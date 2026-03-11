import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import util from 'util';
import clientPromise from '@/lib/mongodb';

// Promisify exec for cleaner async/await usage
const execPromise = util.promisify(exec);

// Helper to get IP
function getIp(request: NextRequest): string {
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }
    return '127.0.0.1'; // Fallback or use request.ip if available in deployed env
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { address } = body;
        const ip = getIp(request);

        if (!address) {
            return NextResponse.json({ success: false, error: 'Address is required' }, { status: 400 });
        }

        if (address.length < 10) {
            return NextResponse.json({ success: false, error: 'Invalid address format' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection('faucet_claims');

        // Check rate limit: 1 request per 24 hours per IP or Address
        const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

        const recentClaim = await collection.findOne({
            $or: [{ ip: ip }, { address: address }],
            claimed_at: { $gte: twentyFourHoursAgo }
        });

        if (recentClaim) {
            return NextResponse.json({ success: false, error: 'Rate limit exceeded. Try again in 24 hours.' }, { status: 429 });
        }

        console.log(`Sending 100 QUA to ${address} from IP ${ip}...`);

        const QUANTA_BINARY = process.env.QUANTA_BINARY || 'quanta';
        const FAUCET_WALLET = process.env.FAUCET_WALLET || 'faucet.qua';
        const FAUCET_DB = process.env.FAUCET_DB || './quanta_data_testnet';
        const FAUCET_PASSWORD = process.env.QUANTA_WALLET_PASSWORD || 'password';

        // Construct command
        // Usage: quanta send --wallet <FILE> --to <ADDR> --amount <AMT> --db <DB>
        const cmd = `"${QUANTA_BINARY}" send --wallet "${FAUCET_WALLET}" --to "${address}" --amount 100 --db "${FAUCET_DB}"`;

        const env = { ...process.env, QUANTA_WALLET_PASSWORD: FAUCET_PASSWORD };

        try {
            const { stdout, stderr } = await execPromise(cmd, { env });

            console.log(`Success: ${stdout}`);

            // Log successful claim to MongoDB
            await collection.insertOne({
                address,
                ip,
                claimed_at: new Date(),
                amount: 100,
                status: 'success'
            });

            return NextResponse.json({
                success: true,
                message: 'Sent 100 Testnet QUA',
                details: stdout.trim()
            });

        } catch (error: any) {
            console.error(`Exec error: ${error}`);

            // Still log failed attempts to prevent abuse
            await collection.insertOne({
                address,
                ip,
                claimed_at: new Date(),
                amount: 100,
                status: 'failed',
                error: error.stderr || error.message
            });

            return NextResponse.json({
                success: false,
                error: 'Transaction failed via node CLI.',
                details: error.stderr || error.message
            }, { status: 500 });
        }

    } catch (err) {
        console.error("API Error:", err);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
