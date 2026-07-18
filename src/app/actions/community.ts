'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function toggleBookmark(toolSlug: string) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return { error: 'You must be logged in to bookmark tools' }
  }

  // Check if bookmark exists
  const { data: existing } = await supabase
    .from('bookmarks')
    .select('id')
    .eq('user_id', user.id)
    .eq('tool_slug', toolSlug)
    .single()

  if (existing) {
    // Remove bookmark
    await supabase.from('bookmarks').delete().eq('id', existing.id)
  } else {
    // Add bookmark
    await supabase.from('bookmarks').insert({
      user_id: user.id,
      tool_slug: toolSlug
    })
  }

  revalidatePath(`/tool/${toolSlug}`)
  revalidatePath('/dashboard/bookmarks')
  
  return { success: true, bookmarked: !existing }
}

export async function submitReview(formData: FormData) {
  const supabase = await createClient()
  const { data: { user }, error: userError } = await supabase.auth.getUser()

  if (userError || !user) {
    return { error: 'You must be logged in to submit a review' }
  }

  const toolSlug = formData.get('tool_slug') as string
  const rating = parseInt(formData.get('rating') as string)
  const content = formData.get('content') as string

  if (!toolSlug || !rating || !content) {
    return { error: 'All fields are required' }
  }

  // Check if already reviewed
  const { data: existing } = await supabase
    .from('reviews')
    .select('id')
    .eq('user_id', user.id)
    .eq('tool_slug', toolSlug)
    .single()

  if (existing) {
    return { error: 'You have already reviewed this tool' }
  }

  const { error } = await supabase.from('reviews').insert({
    user_id: user.id,
    tool_slug: toolSlug,
    rating,
    content,
    status: 'Pending'
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath(`/tool/${toolSlug}`)
  revalidatePath('/dashboard/reviews')
  revalidatePath('/admin/cms/reviews')
  
  return { success: true }
}

export async function trackRecentlyViewed(toolSlug: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return

  // Upsert recently viewed
  await supabase.from('recently_viewed').upsert({
    user_id: user.id,
    tool_slug: toolSlug,
    viewed_at: new Date().toISOString()
  }, { onConflict: 'user_id,tool_slug' })
}
