'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { hasRequiredRole } from '@/lib/auth/rbac'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return redirect('/admin/login?message=Invalid%20login%20credentials')
  }



  revalidatePath('/admin/cms')
  redirect('/admin/cms')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  return redirect('/admin/login')
}
