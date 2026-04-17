import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import path from 'path';
import fs from 'fs';

// ─────────────────────────────────────────────────────────────────────────────
// WASM loader — server-only, synchronous init via Node.js fs + initSync
// ─────────────────────────────────────────────────────────────────────────────

// Cached wasm exports across hot-reloads (development)
const g = global as typeof globalThis & { __quantaWasm?: QuantaWasm };

interface QuantaWasm {
    sign_transaction(txDataHex: string, secretKeyHex: string): string;
    import_wallet(mnemonic: string, passphrase: string, index: number): {
        address: string;
        public_key: string;
        secret_key: string;
    };
    initSync(opts: { module: Buffer }): void;
}

function getWasm(): QuantaWasm {
    if (g.__quantaWasm) return g.__quantaWasm;

    const wasmPath = path.join(process.cwd(), 'lib', 'wasm', 'quanta_wasm_bg.wasm');
    const wasmBytes = fs.readFileSync(wasmPath);

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require('../../../lib/wasm/quanta_wasm') as QuantaWasm;
    mod.initSync({ module: wasmBytes });

    g.__quantaWasm = mod;
    return mod;
}

// ─────────────────────────────────────────────────────────────────────────────
// Build the raw signing-bytes matching Transaction::get_signing_bytes() in Rust
//
// Layout (all integers LITTLE-ENDIAN):
//   sender (UTF-8) | recipient (UTF-8) | amount (u64) | timestamp (i64)
//   fee (u64)      | nonce (u64)       | lock_time (u64) | public_key (bytes)
//   sig_scheme (u8 = 0)  | tx_type (u8 = 0 for Transfer)
// ─────────────────────────────────────────────────────────────────────────────

function u64LE(n: bigint): Buffer {
    const buf = Buffer.allocUnsafe(8);
    buf.writeBigUInt64LE(BigInt.asUintN(64, n));
    return buf;
}

function buildSigningBytesHex(opts: {
    sender: string;
    recipient: string;
    amount: bigint;
    timestamp: bigint;
    fee: bigint;
    nonce: bigint;
    lockTime: bigint;
    pubKeyHex: string;
    networkId?: number; // 0 = testnet
}): string {
    const enc = new TextEncoder();
    const networkId = opts.networkId ?? 0;
    const networkIdBuf = Buffer.allocUnsafe(4);
    networkIdBuf.writeUInt32LE(networkId, 0);
    const parts: Buffer[] = [
        Buffer.from(enc.encode(opts.sender)),
        Buffer.from(enc.encode(opts.recipient)),
        u64LE(opts.amount),
        u64LE(opts.timestamp),    // i64 stored as u64 LE — same bit pattern
        u64LE(opts.fee),
        u64LE(opts.nonce),
        u64LE(opts.lockTime),
        Buffer.from(opts.pubKeyHex, 'hex'),
        Buffer.from([0x00]),      // sig_scheme = Falcon512
        networkIdBuf,             // network_id (u32 LE) — 0 = testnet
        Buffer.from([0x00]),      // tx_type    = Transfer
    ];
    return Buffer.concat(parts).toString('hex');
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

const AMOUNT_MICROUNITS = 5_000_000n; // 5 QUA  (1 QUA = 1_000_000 microunits)
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
        } catch (e) {
            return NextResponse.json({ success: false, error: 'CAPTCHA verification error.' }, { status: 500 });
        }

        // ── 2. MongoDB rate-limit check (1 success per IP + per address per 24h) ─
        const client   = await clientPromise;
        const db       = client.db('quanta');
        const claims   = db.collection('faucet_claims');
        const cutoff   = new Date(Date.now() - 24 * 60 * 60 * 1000);

        const existing = await claims.findOne({
            $or: [{ ip }, { address }],
            claimed_at: { $gte: cutoff },
            status: 'success',
        });

        if (existing) {
            const nextAt   = new Date(existing.claimed_at.getTime() + 24 * 60 * 60 * 1000);
            const hoursLeft = Math.max(1, Math.ceil((nextAt.getTime() - Date.now()) / 3_600_000));
            return NextResponse.json(
                { success: false, error: `You can claim again in ~${hoursLeft}h. Limit: 5 QUA per wallet per IP per 24 hours.` },
                { status: 429 }
            );
        }

        // ── 3. Env config ──────────────────────────────────────────────────
        const faucetMnemonic  = process.env.FAUCET_MNEMONIC;
        const faucetPassphrase = process.env.FAUCET_PASSPHRASE ?? '';
        const nodeUrl          = (process.env.NODE_API_URL ?? 'http://127.0.0.1:8080').replace(/\/$/, '');

        if (!faucetMnemonic) {
            console.error('[faucet] FAUCET_MNEMONIC env var is not set');
            return NextResponse.json({ success: false, error: 'Faucet is not configured.' }, { status: 500 });
        }

        // ── 4. Load WASM & derive faucet keypair ───────────────────────────
        let wasm: QuantaWasm;
        try {
            wasm = getWasm();
        } catch (e) {
            console.error('[faucet] WASM load failed:', e);
            return NextResponse.json({ success: false, error: 'Crypto engine failed to initialise.' }, { status: 500 });
        }

        const { address: faucetAddress, public_key: pubKeyHex, secret_key: secretKeyHex } =
            wasm.import_wallet(faucetMnemonic, faucetPassphrase, 0);

        // ── 5. Fetch faucet nonce from the node ────────────────────────────
        let currentNonce = 0n;
        try {
            const res = await fetch(`${nodeUrl}/api/balance`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address: faucetAddress }),
                signal: AbortSignal.timeout(5000),
            });
            if (res.ok) {
                // M-5 FIX: /api/balance now returns { address, balance_microunits, nonce }
                // Previously this was cast as { nonce? } but the field didn't exist — always 0.
                const data = await res.json() as { nonce?: number; balance_microunits?: number };
                currentNonce = BigInt(data.nonce ?? 0);
            }
        } catch (e) {
            console.warn('[faucet] Could not reach node to fetch nonce, defaulting to 0:', e);
        }

        const nonce     = currentNonce + 1n;
        const timestamp = BigInt(Math.floor(Date.now() / 1000));

        // ── 6. Build signing bytes & sign with Falcon-512 ──────────────────
        const signingBytesHex = buildSigningBytesHex({
            sender:    faucetAddress,
            recipient: address,
            amount:    AMOUNT_MICROUNITS,
            timestamp,
            fee:       FEE_MICROUNITS,
            nonce,
            lockTime:  0n,
            pubKeyHex,
        });

        // sign_transaction returns hex of the Falcon-512 signed-message blob (sig ‖ message)
        const signedBlobHex = wasm.sign_transaction(signingBytesHex, secretKeyHex);

        // The node deserialises `signature` and `public_key` as Vec<u8> (JSON arrays of numbers)
        const signatureArr = Array.from(Buffer.from(signedBlobHex, 'hex'));
        const pubKeyArr    = Array.from(Buffer.from(pubKeyHex, 'hex'));

        const txPayload = {
            sender:     faucetAddress,
            recipient:  address,
            amount:     Number(AMOUNT_MICROUNITS),
            timestamp:  Number(timestamp),
            signature:  signatureArr,
            public_key: pubKeyArr,
            fee:        Number(FEE_MICROUNITS),
            nonce:      Number(nonce),
            lock_time:  0,
            network_id: 0,           // 0 = testnet
            tx_type:    'Transfer',
            sig_scheme: 'Falcon512',
        };

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
            await claims.insertOne({ address, ip, claimed_at: new Date(), amount_qua: 5, status: 'node_unreachable' });
            return NextResponse.json({ success: false, error: 'Could not reach the Quanta node. Please try again later.' }, { status: 502 });
        }

        if (!submitOk) {
            await claims.insertOne({
                address, ip,
                claimed_at: new Date(),
                amount_qua: 5,
                status: 'failed',
                error: submitData!.error ?? 'unknown',
            });
            return NextResponse.json(
                { success: false, error: submitData!.error ?? 'Node rejected the transaction.' },
                { status: 502 }
            );
        }

        // ── 8. Record successful claim ─────────────────────────────────────
        await claims.insertOne({
            address,
            ip,
            claimed_at: new Date(),
            amount_qua: 5,
            tx_hash: submitData!.tx_hash,
            status: 'success',
        });

        return NextResponse.json({
            success: true,
            message:  '5 QUA sent to your wallet!',
            details:  `TX Hash: ${submitData!.tx_hash}`,
            tx_hash:  submitData!.tx_hash,
        });

    } catch (err) {
        console.error('[faucet] Unhandled error:', err);
        return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
    }
}
