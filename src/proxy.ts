import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Check if we're trying to access an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // If ENABLE_ADMIN is not explicitly set to 'true', block access
    if (process.env.ENABLE_ADMIN !== 'true') {
      // We can either redirect to home or return a 404. Let's redirect to home for a smooth UX.
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Continue for all other routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
