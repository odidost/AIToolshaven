import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Safe Cache-Buster 301 Cleanup:
  // If ?nocache= or ?cache= is present, strip it and 301 redirect to the clean URL.
  // This consolidates legacy crawlers and external links into clean canonical URLs
  // while strictly preserving legitimate search/filter query parameters (?q=, ?category=, etc.)
  if (searchParams.has('nocache') || searchParams.has('cache')) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('nocache');
    url.searchParams.delete('cache');
    return NextResponse.redirect(url, { status: 301 });
  }

  // 2. Admin routes: perform Supabase session check
  if (pathname.startsWith('/admin')) {
    return await updateSession(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files and assets to allow edge redirection of ?nocache=
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets).*)',
  ],
}
