'use client'

import { useState, useTransition } from 'react'
import { updateReviewStatus, deleteReview } from '@/app/actions/admin'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function ReviewsTable({ initialReviews }: { initialReviews: any[] }) {
  const [reviews, setReviews] = useState(initialReviews)
  const [isPending, startTransition] = useTransition()

  const handleStatusChange = (id: string, newStatus: string) => {
    startTransition(async () => {
      const result = await updateReviewStatus(id, newStatus)
      if (result.error) {
        toast.error(result.error)
      } else {
        setReviews(reviews.map(r => r.id === id ? { ...r, status: newStatus } : r))
        toast.success(`Review marked as ${newStatus}`)
      }
    })
  }

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return
    
    startTransition(async () => {
      const result = await deleteReview(id)
      if (result.error) {
        toast.error(result.error)
      } else {
        setReviews(reviews.filter(r => r.id !== id))
        toast.success('Review deleted')
      }
    })
  }

  if (reviews.length === 0) {
    return <div className="p-8 text-center text-on-surface-variant">No reviews found.</div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-on-surface-variant uppercase bg-surface-container/50 border-b border-outline">
          <tr>
            <th className="px-6 py-4 font-medium">Author</th>
            <th className="px-6 py-4 font-medium">Tool</th>
            <th className="px-6 py-4 font-medium">Rating</th>
            <th className="px-6 py-4 font-medium">Content</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline">
          {reviews.map((review) => (
            <tr key={review.id} className="hover:bg-surface-container/30 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-on-surface">{review.profiles?.username || 'Anonymous'}</div>
                <div className="text-xs text-on-surface-variant">{new Date(review.created_at).toLocaleDateString()}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium">{review.tools?.name || review.tool_slug}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-warning">
                  {review.rating} <span className="material-symbols-outlined text-[14px] ml-1 fill-current">star</span>
                </div>
              </td>
              <td className="px-6 py-4 min-w-[300px]">
                <p className="text-on-surface-variant line-clamp-2">{review.content}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge variant={
                  review.status === 'Approved' ? 'default' :
                  review.status === 'Pending' ? 'secondary' :
                  review.status === 'Rejected' ? 'destructive' : 'outline'
                }>
                  {review.status}
                </Badge>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                <select
                  disabled={isPending}
                  value={review.status}
                  onChange={(e) => handleStatusChange(review.id, e.target.value)}
                  className="bg-white border border-border/50 rounded-lg px-2 py-1 text-xs font-medium text-on-surface focus:outline-none focus:border-primary"
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approve</option>
                  <option value="Rejected">Reject</option>
                  <option value="Hidden">Hide</option>
                  <option value="Spam">Spam</option>
                </select>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  disabled={isPending}
                  onClick={() => handleDelete(review.id)}
                  className="h-8"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
