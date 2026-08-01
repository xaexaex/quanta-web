import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import clientPromise from '@/lib/mongodb';
import { initQuanta, QuantaWallet, TransactionBuilder } from 'quanta-sdk';
import path from 'path';
import fs from 'fs';

// ─────────────────────────────────────────────────────────────────────────────
// SDK loader — server-only, init via Node.js fs
// ─────────────────────────────────────────────────────────────────────────────

const g = global as typeof globalThis & { __quantaSdkLoaded?: Promise<void> };

function ensureSdkLoaded(): Promise<void> {
    if (g.__quantaSdkLoaded) return g.__quantaSdkLoaded;
    const wasmPath = path.join(process.cwd(), 'lib', 'wasm', 'quanta_wasm_bg.wasm');
    const wasmBytes = fs.readFileSync(wasmPath);
    g.__quantaSdkLoaded = initQuanta(wasmBytes);
    return g.__quantaSdkLoaded;
}

// ─────────────────────────────────────────────────────────────────────────────
// IP extraction
// ─────────────────────────────────────────────────────────────────────────────

function getIp(req: NextRequest): string {
    return (
        req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
        req.headers.get('x-real-ip')?.trim() ??
        '127.0.0.1'
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/faucet
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Concurrency guard — prevents duplicate nonces when two claims arrive before
// the first TX is confirmed.  A simple module-level mutex serialises the
// nonce-fetch → sign → submit sequence.  On server restart the in-memory
// tracker resets to 0 and falls back to the node's confirmed nonce.
// ─────────────────────────────────────────────────────────────────────────────

const g2 = global as typeof globalThis & {
    __faucetNonceLock?: Promise<void>;
    __faucetPendingNonce?: bigint;
};

function acquireFaucetLock(): { release: () => void; promise: Promise<void> } {
    let release!: () => void;
    const next = new Promise<void>(resolve => { release = resolve; });
    const wait = g2.__faucetNonceLock ?? Promise.resolve();
    g2.__faucetNonceLock = wait.then(() => next);
    return { release, promise: wait };
}

const FEE_MICROUNITS    = 1_000n;     // 0.001 QUA fee

export async function POST(request: NextRequest) {
    try {
        // ── 1. Parse & validate input ──────────────────────────────────────
        const body = await request.json().catch(() => ({})) as Record<string, unknown>;
        const rawAddress = typeof body.address === 'string' ? body.address.trim() : '';

        if (!rawAddress) {
            return NextResponse.json({ success: false, error: 'Wallet address is required' }, { status: 400 });
        }

        const address = rawAddress.toLowerCase();
        if (!/^0x[0-9a-f]{40}$/.test(address)) {
            return NextResponse.json(
                { success: false, error: 'Invalid address – must be 0x-prefixed 40-char hex (e.g. 0xabc...)' },
                { status: 400 }
            );
        }

        const ip = getIp(request);

        // ── 1.5 Verify Cloudflare Turnstile token ─────────────────────────
        const token = typeof body.token === 'string' ? body.token : '';
        if (!token) {
            return NextResponse.json({ success: false, error: 'CAPTCHA token is missing. Please complete the CAPTCHA.' }, { status: 400 });
        }

        const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
        if (!turnstileSecret) {
            return NextResponse.json({ success: false, error: 'Server configuration error (missing Turnstile secret).' }, { status: 500 });
        }

        const formData = new FormData();
        formData.append('secret', turnstileSecret);
        formData.append('response', token);
        formData.append('remoteip', ip);

        try {
            const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
                method: 'POST',
                body: formData,
            });
            const turnstileData = await turnstileRes.json();
            if (!turnstileData.success) {
                return NextResponse.json({ success: false, error: 'CAPTCHA verification failed. Please try again.' }, { status: 400 });
            }
        } catch {
            return NextResponse.json({ success: false, error: 'CAPTCHA verification error.' }, { status: 500 });
        }

        // ── 2. Fetch GitHub Token and Star Status ────────────────────────
        const cookieStore = await cookies();
        const githubToken = cookieStore.get('github_token')?.value;
        const githubId = cookieStore.get('github_id')?.value;
        
        let rewardAmountQua = 5;
        if (githubToken) {
            rewardAmountQua = 10;
            try {
                const starRes = await fetch('https://api.github.com/user/starred/quantachain/quanta', {
                    headers: {
                        Authorization: `Bearer ${githubToken}`,
                        Accept: 'application/vnd.github.v3+json',
                        "User-Agent": "Quanta-Faucet"
                    }
                });
                if (starRes.status === 204) {
                    rewardAmountQua = 15;
                }
            } catch (e) {
                console.error('[faucet] Github star check failed:', e);
            }
        }
        
        const amountMicrounits = BigInt(rewardAmountQua) * 1_000_000n;

        // ── 3. MongoDB rate-limit check ──────────────────────────────────
        const client   = await clientPromise;
        const db       = client.db('quanta');
        const claims   = db.collection('faucet_claims');
        const cutoff   = new Date(Date.now() - 24 * 60 * 60 * 1000);

        const rateLimitQuery: Record<string, unknown>[] = [{ ip }, { address }];
        if (githubId) {
            rateLimitQuery.push({ github_id: githubId });
        }

        const existing = await claims.findOne({
            $or: rateLimitQuery,
            claimed_at: { $gte: cutoff },
            status: 'success',
        });

        if (existing) {
            const nextAt   = new Date(existing.claimed_at.getTime() + 24 * 60 * 60 * 1000);
            const hoursLeft = Math.max(1, Math.ceil((nextAt.getTime() - Date.now()) / 3_600_000));
            return NextResponse.json(
                { success: false, error: `You can claim again in ~${hoursLeft}h. Limit: 1 claim per wallet/IP/GitHub per 24 hours.` },
                { status: 429 }
            );
        }

        // ── 3. Env config ──────────────────────────────────────────────────
        // Changed: 2026-08-01 — faucet now loaded from raw Falcon-512 keypair
        // (account is from the old system, not derivable from the new mnemonic)
        const faucetSecretKey = process.env.FAUCET_SECRET_KEY_HEX;
        const faucetPublicKey = process.env.FAUCET_PUBLIC_KEY_HEX;
        const faucetAddr      = process.env.FAUCET_ADDRESS;
        const nodeUrl         = (process.env.NODE_API_URL ?? 'http://127.0.0.1:8080').replace(/\/$/, '');

        if (!faucetSecretKey || !faucetPublicKey || !faucetAddr) {
            console.error('[faucet] FAUCET_SECRET_KEY_HEX / FAUCET_PUBLIC_KEY_HEX / FAUCET_ADDRESS env vars are not set');
            return NextResponse.json({ success: false, error: 'Faucet is not configured.' }, { status: 500 });
        }

        // ── 4. Load WASM & derive faucet keypair ───────────────────────────
        try {
            await ensureSdkLoaded();
        } catch (e) {
            console.error('[faucet] SDK WASM load failed:', e);
            return NextResponse.json({ success: false, error: 'Crypto engine failed to initialise.' }, { status: 500 });
        }

        // Load wallet directly from raw Falcon-512 keypair (bypasses HD derivation)
        const wallet = new QuantaWallet(faucetSecretKey, faucetPublicKey, faucetAddr);
        const faucetAddress = wallet.address;

        // ── 5. Fetch faucet nonce — serialised to prevent duplicate nonces ───
        const lock = acquireFaucetLock();
        await lock.promise; // wait for any in-flight claim to finish

        let currentNonce = 0n;
        try {
            const res = await fetch(`${nodeUrl}/api/balance`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address: faucetAddress }),
                signal: AbortSignal.timeout(5000),
            });
            if (res.ok) {
                const data = await res.json() as { nonce?: number };
                currentNonce = BigInt(data.nonce ?? 0);
            }
        } catch (e) {
            console.warn('[faucet] Could not reach node to fetch nonce, defaulting to 0:', e);
        }

        // Use max(confirmed nonce, last locally submitted nonce) to avoid reuse
        const pendingNonce = g2.__faucetPendingNonce ?? 0n;
        const baseNonce    = currentNonce > pendingNonce ? currentNonce : pendingNonce;
        const nonce        = baseNonce + 1n;
        // Reserve this nonce immediately so concurrent requests see it
        g2.__faucetPendingNonce = nonce;

        const timestamp = BigInt(Math.floor(Date.now() / 1000));

        // ── 6. Build & Sign Transaction with SDK ───────────────────────────
        const unsignedTx = TransactionBuilder.createTransfer(
            faucetAddress,
            address,
            Number(amountMicrounits),
            Number(nonce),
            Number(FEE_MICROUNITS)
        );
        unsignedTx.timestamp = Number(timestamp); // Ensure same timestamp is used

        const txPayload = TransactionBuilder.sign(unsignedTx, wallet);

        // ── 7. Submit pre-signed transaction to the node ───────────────────
        let submitData: { success: boolean; tx_hash?: string; error?: string };
        let submitOk = false;
        try {
            const submitRes = await fetch(`${nodeUrl}/api/transactions/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(txPayload),
                signal: AbortSignal.timeout(10_000),
            });
            submitData = await submitRes.json() as typeof submitData;
            submitOk   = submitRes.ok && submitData.success;
        } catch (e) {
            console.error('[faucet] Node submission error:', e);
            await claims.insertOne({ address, ip, github_id: githubId || null, claimed_at: new Date(), amount_qua: rewardAmountQua, status: 'node_unreachable' });
            return NextResponse.json({ success: false, error: 'Could not reach the Quanta node. Please try again later.' }, { status: 502 });
        }

        if (!submitOk) {
            // Revert the reserved nonce so the next claim can retry with the correct one
            if (g2.__faucetPendingNonce === nonce) g2.__faucetPendingNonce = baseNonce;
            lock.release();
            await claims.insertOne({
                address, ip, github_id: githubId || null,
                claimed_at: new Date(),
                amount_qua: rewardAmountQua,
                status: 'failed',
                error: submitData!.error ?? 'unknown',
            });
            return NextResponse.json(
                { success: false, error: submitData!.error ?? 'Node rejected the transaction.' },
                { status: 502 }
            );
        }

        lock.release();

        // ── 8. Record successful claim ─────────────────────────────────────
        await claims.insertOne({
            address,
            ip,
            github_id: githubId || null,
            claimed_at: new Date(),
            amount_qua: rewardAmountQua,
            tx_hash: submitData!.tx_hash,
            status: 'success',
        });

        return NextResponse.json({
            success: true,
            message:  `${rewardAmountQua} QUA sent to your wallet!`,
            details:  `TX Hash: ${submitData!.tx_hash}`,
            tx_hash:  submitData!.tx_hash,
        });

    } catch (err) {
        console.error('[faucet] Unhandled error:', err);
        return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
    }
}
