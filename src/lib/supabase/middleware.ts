import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { AppRole, hasRequiredRole } from '@/lib/auth/rbac'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Protect all /admin routes except /admin/login and /admin/unauthorized
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login') && !request.nextUrl.pathname.startsWith('/admin/unauthorized')) {
    
    const {
      data: { user },
    } = await supabase.auth.getUser()
    
    // 1. Not logged in
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
    }

    // 2. Logged in, check RBAC role
    // Defaulting to "writer" as minimum access for CMS
    const isAuthorized = await hasRequiredRole(supabase, user.id, 'writer')
    
    if (!isAuthorized) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/unauthorized'
      return NextResponse.redirect(url)
    }
  }

  // Redirect logged-in users away from the login page
  if (request.nextUrl.pathname.startsWith('/admin/login')) {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const isAuthorized = await hasRequiredRole(supabase, user.id, 'writer')
      if (isAuthorized) {
         const url = request.nextUrl.clone()
         url.pathname = '/admin/cms'
         return NextResponse.redirect(url)
      }
    }
  }

  return supabaseResponse
}
