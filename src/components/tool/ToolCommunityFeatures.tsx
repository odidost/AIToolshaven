'use client'

import { useState, useEffect, useTransition } from 'react'
import { toggleBookmark, trackRecentlyViewed } from '@/app/actions/community'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export function RecentlyViewedTracker({ toolSlug }: { toolSlug: string }) {
  useEffect(() => {
    trackRecentlyViewed(toolSlug).catch(console.error)
  }, [toolSlug])

  return null
}

export function BookmarkButton({ 
  toolSlug, 
  className, 
  variant = 'icon' 
}: { 
  toolSlug: string
  className?: string
  variant?: 'icon' | 'button'
}) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isPending, startTransition] = useTransition()
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    // Check initial status
    async function checkStatus() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data } = await supabase
        .from('bookmarks')
        .select('id')
        .eq('user_id', user.id)
        .eq('tool_slug', toolSlug)
        .single()
        
      if (data) setIsBookmarked(true)
    }
    checkStatus()
  }, [toolSlug, supabase])

  const handleToggle = () => {
    startTransition(async () => {
      const result = await toggleBookmark(toolSlug)
      if (result.error) {
        if (result.error.includes("logged in")) {
          toast.error("Please sign up or log in to save bookmarks!")
          router.push("/signup")
        } else {
          toast.error(result.error)
        }
      } else {
        setIsBookmarked(!!result.bookmarked)
        toast.success(result.bookmarked ? 'Saved to bookmarks' : 'Removed from bookmarks')
      }
    })
  }

  if (variant === 'button') {
    return (
      <button
        onClick={handleToggle}
        disabled={isPending}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-4 font-semibold transition-all shadow-xs hover:-translate-y-[0.5px]",
          isBookmarked 
            ? "border-primary bg-primary/10 text-primary hover:bg-primary/20" 
            : "border-border bg-surface hover:shadow-sm hover:border-primary hover:bg-surface-secondary",
          isPending && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <span className={cn("material-symbols-outlined", isBookmarked && "font-variation-fill")}>
          bookmark
        </span>
        {isBookmarked ? 'Saved' : 'Save'}
      </button>
    )
  }

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={cn(
        "rounded-xl border border-outline flex items-center justify-center transition-colors",
        isBookmarked
          ? "bg-primary/10 text-primary border-primary hover:bg-primary/20"
          : "hover:bg-surface-container hover:text-primary",
        isPending && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <span className={cn("material-symbols-outlined", isBookmarked && "font-variation-fill")}>
        bookmark
      </span>
    </button>
  )
}
