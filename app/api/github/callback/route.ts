import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');

    if (!code) {
        return NextResponse.redirect(new URL('/faucet?error=missing_code', request.url));
    }

    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        return NextResponse.json({ error: 'GitHub OAuth is not configured' }, { status: 500 });
    }

    try {
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                client_id: clientId,
                client_secret: clientSecret,
                code,
            }),
        });

        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
            return NextResponse.redirect(new URL('/faucet?error=oauth_failed', request.url));
        }

        const accessToken = tokenData.access_token;

        // Fetch user data to get github_id
        const userResponse = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/vnd.github.v3+json',
                "User-Agent": "Quanta-Faucet"
            },
        });

        if (!userResponse.ok) {
             return NextResponse.redirect(new URL('/faucet?error=user_fetch_failed', request.url));
        }

        const userData = await userResponse.json();
        const githubId = userData.id.toString();
        const githubUsername = userData.login;

        // Set secure cookies
        const cookieStore = await cookies();
        cookieStore.set('github_token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });
        
        cookieStore.set('github_username', githubUsername, {
            httpOnly: false, 
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });
        
        cookieStore.set('github_id', githubId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });

        return NextResponse.redirect(new URL('/faucet', request.url));
    } catch (err) {
        console.error(err);
        return NextResponse.redirect(new URL('/faucet?error=server_error', request.url));
    }
}
