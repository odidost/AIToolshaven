'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

async function recalculateToolRating(supabase: any, toolSlug: string) {
  const { data: reviews } = await supabase
    .from('reviews')
    .select('rating')
    .eq('tool_slug', toolSlug)
    .eq('status', 'Approved');

  let rating = 0;
  let review_count = 0;

  if (reviews && reviews.length > 0) {
    review_count = reviews.length;
    const sum = reviews.reduce((acc: number, r: any) => acc + r.rating, 0);
    rating = parseFloat((sum / review_count).toFixed(1));
  }

  await supabase
    .from('tools')
    .update({ rating, review_count })
    .eq('slug', toolSlug);
}

export async function updateReviewStatus(reviewId: string, status: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthorized' }

  // Get the tool_slug before updating
  const { data: review } = await supabase.from('reviews').select('tool_slug').eq('id', reviewId).single();

  const { error } = await supabase
    .from('reviews')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', reviewId)

  if (error) {
    return { error: error.message }
  }

  if (review?.tool_slug) {
    await recalculateToolRating(supabase, review.tool_slug);
    revalidatePath(`/tool/${review.tool_slug}`);
  }

  revalidatePath('/admin/cms/reviews')
  return { success: true }
}

export async function deleteReview(reviewId: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthorized' }

  const { data: review } = await supabase.from('reviews').select('tool_slug').eq('id', reviewId).single();

  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', reviewId)

  if (error) {
    return { error: error.message }
  }

  if (review?.tool_slug) {
    await recalculateToolRating(supabase, review.tool_slug);
    revalidatePath(`/tool/${review.tool_slug}`);
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
