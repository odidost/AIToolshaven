import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check for Active Redirects
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll() {
          // Read-only client for middleware redirects
        },
      },
    }
  );

  const { data: redirectData } = await supabase
    .from('redirects')
    .select('new_path, status_code')
    .eq('old_path', pathname)
    .eq('active', true)
    .single();

  if (redirectData) {
    const url = request.nextUrl.clone();
    url.pathname = redirectData.new_path;
    return NextResponse.redirect(url, { status: redirectData.status_code || 301 });
  }

  // 2. Auth & Session Management
  const response = await updateSession(request);

  // 3. Inject requested path into headers so `not-found.tsx` can read it to log 404s
  response.headers.set('x-invoke-path', pathname);

  return response;
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
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets).*)',
  ],
}
