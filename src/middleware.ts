import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host') || request.nextUrl.hostname;

  // 301 Permanent Redirect for www domain to apex canonical domain (https://aitoolshaven.com)
  if (host && host.toLowerCase().startsWith('www.')) {
    const cleanHost = host.replace(/^www\./i, '');
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    return NextResponse.redirect(
      `${protocol}://${cleanHost}${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    );
  }

  if (request.nextUrl.pathname.startsWith('/admin')) {
    return await updateSession(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets/images
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}


