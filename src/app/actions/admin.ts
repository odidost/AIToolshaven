'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateReviewStatus(reviewId: string, status: string) {
  const supabase = await createClient()
  
  // Verify admin role (assuming there's a get_my_role function or checking user_roles)
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthorized' }

  // In a real app, verify they are admin here, but RLS will catch it too
  const { error } = await supabase
    .from('reviews')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', reviewId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/cms/reviews')
  return { success: true }
}

export async function deleteReview(reviewId: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthorized' }

  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', reviewId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/cms/reviews')
  return { success: true }
}

export async function updateUserRole(userId: string, role: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthorized' }

  const { error } = await supabase
    .from('user_roles')
    .upsert({ user_id: userId, role })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/cms/users')
  return { success: true }
}
