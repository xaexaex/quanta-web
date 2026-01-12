import { NextRequest, NextResponse } from 'next/server';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { exec } from 'child_process';
import util from 'util';

// Promisify exec for cleaner async/await usage
const execPromise = util.promisify(exec);

// Rate Limiter: 1 request per 24 hours per IP
const rateLimiter = new RateLimiterMemory({
    points: 1,
    duration: 86400, // 24 hours
});

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

        try {
            await rateLimiter.consume(ip);
        } catch (rlRejected) {
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

            return NextResponse.json({
                success: true,
                message: 'Sent 100 Testnet QUA',
                details: stdout.trim()
            });

        } catch (error: any) {
            console.error(`Exec error: ${error}`);
            // Return 500 but ideally we might want to revert the rate limit consumption here if it's a system error,
            // but keeping it simple as per request.
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
