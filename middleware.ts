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

  // If the hostname is katenet.quantachain.org (or katenet.localhost for testing)
  if (hostname === 'katenet.quantachain.org' || hostname === 'katenet.localhost') {
    // Rewrite all requests on this subdomain to the /katenet route
    url.pathname = `/katenet${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
