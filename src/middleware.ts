import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'

// In-memory cache for edge isolate to reduce DB egress for rapid repeated requests
// Caches both hits and misses for 60 seconds
type RedirectData = { new_path: string; status_code: number } | null;
const redirectCache = new Map<string, { data: RedirectData, expiry: number }>();
const MAX_CACHE_SIZE = 10000;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Normalize path to check both with and without trailing slash
  const normalizedPath = pathname.length > 1 && pathname.endsWith('/') 
    ? pathname.slice(0, -1) 
    : pathname;
    
  const now = Date.now();
  let redirectData = null;
  let cacheHit = false;

  const cached = redirectCache.get(normalizedPath);
  if (cached && cached.expiry > now) {
    redirectData = cached.data;
    cacheHit = true;
  }

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

  if (!cacheHit) {
    const pathWithSlash = normalizedPath + '/';
    const { data } = await supabase
      .from('redirects')
      .select('new_path, status_code')
      .in('old_path', [normalizedPath, pathWithSlash])
      .eq('active', true)
      .limit(1)
      .maybeSingle();
      
    redirectData = data;
    
    // Prevent memory leaks in long-running edge isolates
    if (redirectCache.size >= MAX_CACHE_SIZE) {
      redirectCache.clear();
    }
    
    // Cache for 60 seconds
    redirectCache.set(normalizedPath, { data, expiry: now + 60000 });
  }

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
