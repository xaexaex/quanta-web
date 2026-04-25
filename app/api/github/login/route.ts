import { NextResponse } from 'next/server';

export async function GET() {
    const clientId = process.env.GITHUB_CLIENT_ID;
    if (!clientId) {
        return NextResponse.json({ error: 'GITHUB_CLIENT_ID is not configured' }, { status: 500 });
    }
    
    const redirectUri = encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/github/callback`);
    
    // We only need the public 'read:user' to get their ID to prevent sybils. 
    // Public stars can be read without extra scopes.
    const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user`;
    
    return NextResponse.redirect(url);
}
