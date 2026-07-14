'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return redirect('/login?message=Could not authenticate user')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const username = formData.get('username') as string
  
  const headersList = await headers()
  const origin = headersList.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: {
        username: username, // Pass username to user_metadata
      }
    },
  })

  if (error) {
    console.error("Signup error:", error);
    const errorMessage = error.message && error.message !== '{}' 
      ? error.message 
      : 'An unexpected error occurred during signup. Check server logs.';
    return redirect(`/signup?message=${encodeURIComponent(errorMessage)}`)
  }

  return redirect('/signup?message=Check email to continue sign in process')
}

export async function forgotPassword(formData: FormData) {
    const email = formData.get('email') as string
    const headersList = await headers()
    const origin = headersList.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    
    const supabase = await createClient()
  
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/auth/callback?next=/reset-password`,
    })
  
    if (error) {
      console.error("Forgot password error:", error);
      return redirect('/forgot-password?message=Could not reset password')
    }
  
    return redirect('/forgot-password?message=Check email to reset password')
}

export async function resetPassword(formData: FormData) {
    const password = formData.get('password') as string
    
    const supabase = await createClient()
  
    const { error } = await supabase.auth.updateUser({
        password: password
    })
  
    if (error) {
      return redirect('/reset-password?message=Could not update password')
    }
  
    return redirect('/login?message=Password updated successfully')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  
  revalidatePath('/', 'layout')
  redirect('/')
}
