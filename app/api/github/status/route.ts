import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
    const cookieStore = await cookies();
    const token = cookieStore.get('github_token')?.value;
    const username = cookieStore.get('github_username')?.value;

    if (!token) {
        return NextResponse.json({ connected: false, starred: false });
    }

    try {
        const starRes = await fetch('https://api.github.com/user/starred/quantachain/quanta', {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
                "User-Agent": "Quanta-Faucet"
            }
        });

        // 204 means starred, 404 means not starred
        const starred = starRes.status === 204;
        
        return NextResponse.json({
            connected: true,
            username: username || 'User',
            starred
        });
    } catch (err) {
        return NextResponse.json({ connected: true, username: username || 'User', starred: false });
    }
}
