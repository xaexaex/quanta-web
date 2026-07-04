import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  
  // Get hostname of request (e.g. kate.quantachain.org, quantachain.org, localhost:3000)
  let hostname = req.headers.get('host') || '';
  
  // Remove port for local development mapping (e.g. localhost:3000 -> localhost)
  hostname = hostname.split(':')[0];

  // If the hostname is kate.quantachain.org (or kate.localhost for testing)
  if (hostname === 'kate.quantachain.org' || hostname === 'kate.localhost') {
    // If they are requesting the root of the subdomain, rewrite to /kate
    if (url.pathname === '/') {
      url.pathname = '/kate';
      return NextResponse.rewrite(url);
    }
    // If they are requesting other paths, you could also rewrite them to /kate/path
    // But for a single page site, rewriting root is usually enough.
  }

  return NextResponse.next();
}
