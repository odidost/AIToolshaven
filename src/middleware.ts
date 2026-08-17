import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'

// In-memory cache for edge isolate to reduce DB egress for rapid repeated requests
// Caches both hits and misses for 60 seconds
type RedirectData = { new_path: string; status_code: number } | null;
const redirectCache = new Map<string, { data: RedirectData, expiry: number }>();
const MAX_CACHE_SIZE = 10000;

// Non-semantic cache busting parameters to strip for canonical enforcement
const NON_SEMANTIC_PARAMS = new Set(['nocache', 'cache', '_nocache', 'preview_nonce']);

// Static authoritative 301 redirects for immediate edge resolution
const STATIC_CANONICAL_REDIRECTS: Record<string, string> = {
  '/ai-tool/aider-ai-review': '/tool/aider-chat',
  '/ai-tool/aider-ai-review/': '/tool/aider-chat',
  '/ai-tool/pear-ai-review': '/tool/pearai-code',
  '/ai-tool/pear-ai-review/': '/tool/pearai-code',
  '/ai-tool/wix': '/tool/wix-logo-maker',
  '/ai-tool/wix/': '/tool/wix-logo-maker',
  '/tool/canva-logo-maker': '/tool/canva',
  '/tool/canva-logo-maker/': '/tool/canva',
  '/all-ai-tool-categories': '/categories',
  '/all-ai-tool-categories/': '/categories',
  '/ai-tool-category/ai-image-generation-tools': '/category/ai-image-generators',
  '/ai-tool-category/ai-image-generation-tools/': '/category/ai-image-generators',
  '/ai-tool-category/ai-video-generators': '/category/ai-video-generators',
  '/ai-tool-category/ai-video-generators/': '/category/ai-video-generators',
  '/ai-writing-tools': '/category/ai-writing-tools',
  '/category/text-generation': '/category/ai-writing-tools',
  '/category/image-generation': '/category/ai-image-generators',
  '/category/video-creation': '/category/ai-video-generators',
};

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fygifuwuseksxpcetsbo.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_Wtq6w9BRd1-O_xZxnTh5Zw_kPQbLYUM';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Check and Clean Non-Semantic Query Parameters (?nocache=, ?cache=)
  let hasNonSemanticParams = false;
  const cleanSearchParams = new URLSearchParams();

  searchParams.forEach((val, key) => {
    if (NON_SEMANTIC_PARAMS.has(key.toLowerCase())) {
      hasNonSemanticParams = true;
    } else {
      cleanSearchParams.append(key, val);
    }
  });

  // Normalize path to check both with and without trailing slash
  const normalizedPath = pathname.length > 1 && pathname.endsWith('/') 
    ? pathname.slice(0, -1) 
    : pathname;

  // 1.5. Block known hacked/spam URLs with a 410 Gone response
  if (normalizedPath.startsWith('/video') || normalizedPath.includes('-crack-')) {
    return new NextResponse('Gone', { status: 410 });
  }

  // 2. Check Static Canonical Redirects Fast-Path
  let redirectTarget = STATIC_CANONICAL_REDIRECTS[normalizedPath] || STATIC_CANONICAL_REDIRECTS[normalizedPath + '/'];
  let statusCode = 301;

  if (!redirectTarget) {
    const now = Date.now();
    let redirectData: RedirectData = null;
    let cacheHit = false;

    const cached = redirectCache.get(normalizedPath);
    if (cached && cached.expiry > now) {
      redirectData = cached.data;
      cacheHit = true;
    }

    if (!cacheHit) {
      const supabase = createServerClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
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
      redirectTarget = redirectData.new_path;
      statusCode = redirectData.status_code || 301;
    }
  }

  // 2.5. Wildcard Fallbacks (Executes only if no specific redirect was found in Static or DB)
  if (!redirectTarget) {
    if (normalizedPath.startsWith('/ai-tool/')) {
      redirectTarget = normalizedPath.replace('/ai-tool/', '/tool/');
      statusCode = 301;
    } else if (normalizedPath.startsWith('/ai-tool-category/')) {
      redirectTarget = normalizedPath.replace('/ai-tool-category/', '/category/');
      statusCode = 301;
    } else if (normalizedPath === '/ai-tool' || normalizedPath === '/ai-tool-category') {
      redirectTarget = '/categories';
      statusCode = 301;
    }
  }

  // 3. Issue 301 Redirect if Destination Changed or Non-Semantic Params were Stripped
  if (redirectTarget) {
    const cleanSearchStr = cleanSearchParams.toString();
    const targetUrl = new URL(redirectTarget, request.url);
    targetUrl.search = cleanSearchStr ? `?${cleanSearchStr}` : '';
    return NextResponse.redirect(targetUrl, { status: statusCode });
  } else if (hasNonSemanticParams) {
    const cleanSearchStr = cleanSearchParams.toString();
    const targetUrl = new URL(normalizedPath, request.url);
    targetUrl.search = cleanSearchStr ? `?${cleanSearchStr}` : '';
    return NextResponse.redirect(targetUrl, { status: 301 });
  }

  // 4. Auth & Session Management
  const response = await updateSession(request);

  // 5. Inject requested path into headers so `not-found.tsx` can read it to log 404s
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

