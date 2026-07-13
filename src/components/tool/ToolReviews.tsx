"use client";

import { useState, useEffect, useTransition } from "react";
import type { AITool } from "@/lib/types/tool";
import { createClient } from "@/lib/supabase/client";
import { submitReview } from "@/app/actions/community";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type ToolReviewsProps = {
    tool: AITool;
};

export function ToolReviews({ tool }: ToolReviewsProps) {
    const [sort, setSort] = useState("Newest");
    const [reviews, setReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isWriting, setIsWriting] = useState(false);
    const [rating, setRating] = useState(5);
    const [content, setContent] = useState("");
    const [isPending, startTransition] = useTransition();

    const supabase = createClient();

    useEffect(() => {
        async function fetchReviews() {
            setLoading(true);
            const { data } = await supabase
                .from('reviews')
                .select('*, profiles(username, avatar_url, is_verified_reviewer)')
                .eq('tool_slug', tool.slug)
                .eq('status', 'Approved')
                .order('created_at', { ascending: sort === "Oldest" ? true : false });
                
            if (data) setReviews(data);
            setLoading(false);
        }
        fetchReviews();
    }, [tool.slug, sort, supabase]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            toast.error("You must be logged in to write a review.");
            return;
        }

        const formData = new FormData();
        formData.append('tool_slug', tool.slug);
        formData.append('rating', rating.toString());
        formData.append('content', content);

        startTransition(async () => {
            const result = await submitReview(formData);
            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success("Review submitted! It will appear once approved.");
                setIsWriting(false);
                setContent("");
                setRating(5);
            }
        });
    };

    const avgRating = reviews.length > 0 
      ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length 
      : (tool.rating || 0);

    const totalReviews = reviews.length > 0 ? reviews.length : (tool.reviewCount || 0);

    return (
        <section className="my-16">
            <h2 className="text-fluid-h2 font-bold tracking-tight text-on-surface mb-8">Real User Reviews</h2>

            <div className="grid gap-8 lg:gap-10 lg:grid-cols-[300px_1fr]">
                {/* Left Sidebar: Ratings Summary */}
                <div className="rounded-[24px] border border-primary/15 bg-gradient-to-br from-[#F0EDFF] via-[#F5F7FB] to-[#E0EBFF] p-6 sm:p-8 shadow-sm h-fit">
                    <div className="text-center mb-6">
                        <div className="text-5xl font-extrabold text-on-surface">{avgRating.toFixed(1)}</div>
                        <div className="flex items-center justify-center gap-1 mt-2 text-warning">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span key={star} className="material-symbols-outlined fill-current text-[20px]">
                                    {star <= Math.round(avgRating) ? 'star' : 'star_border'}
                                </span>
                            ))}
                        </div>
                        <div className="text-sm text-on-surface-variant mt-2">
                            Based on {totalReviews.toLocaleString()} reviews
                        </div>
                    </div>

                    <Dialog open={isWriting} onOpenChange={setIsWriting}>
                        <DialogTrigger asChild>
                            <button className="w-full mt-8 py-3 rounded-xl border border-border/50 font-semibold text-on-surface hover:bg-surface-secondary transition-colors bg-white">
                                Write a Review
                            </button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Review {tool.name}</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Label>Rating</Label>
                                    <div className="flex gap-2 mt-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setRating(star)}
                                                className={`material-symbols-outlined text-3xl ${star <= rating ? 'text-warning fill-current' : 'text-on-surface-variant'}`}
                                                style={{ fontVariationSettings: star <= rating ? "'FILL' 1" : "'FILL' 0" }}
                                            >
                                                star
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="content">Your Review</Label>
                                    <Textarea
                                        id="content"
                                        required
                                        rows={5}
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        placeholder={`What did you like or dislike about ${tool.name}?`}
                                        className="mt-2"
                                    />
                                </div>
                                <Button type="submit" disabled={isPending} className="w-full">
                                    {isPending ? 'Submitting...' : 'Submit Review'}
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Right Area: Reviews List */}
                <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border/50">
                        <div className="flex gap-2">
                            <select 
                                value={sort} 
                                onChange={(e) => setSort(e.target.value)}
                                className="bg-white border border-border/50 rounded-lg px-3 py-2 text-sm font-medium text-on-surface focus:outline-none focus:border-primary"
                            >
                                <option>Newest</option>
                                <option>Oldest</option>
                            </select>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center py-12 text-on-surface-variant">Loading reviews...</div>
                    ) : reviews.length === 0 ? (
                        <div className="text-center py-12 bg-surface-container/50 rounded-2xl border border-outline border-dashed">
                            <p className="text-on-surface-variant">No reviews yet. Be the first to review {tool.name}!</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {reviews.map((review) => (
                                <div key={review.id} className="rounded-[24px] border border-primary/15 bg-gradient-to-br from-[#F0EDFF] via-[#F5F7FB] to-[#E0EBFF] p-6 sm:p-8 shadow-sm">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base sm:text-lg overflow-hidden">
                                                {review.profiles?.avatar_url ? (
                                                    <img src={review.profiles.avatar_url} alt={review.profiles.username} className="w-full h-full object-cover" />
                                                ) : (
                                                    review.profiles?.username?.substring(0, 2) || "U"
                                                )}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center flex-wrap gap-2">
                                                    <h4 className="font-bold text-on-surface truncate">{review.profiles?.username || "Anonymous"}</h4>
                                                    {review.profiles?.is_verified_reviewer && (
                                                        <span className="material-symbols-outlined text-[16px] text-success shrink-0" title="Verified Reviewer">
                                                            verified
                                                        </span>
                                                    )}
                                                    <div className="flex text-warning sm:hidden ml-auto">
                                                        {[1, 2, 3, 4, 5].map(star => (
                                                            <span key={star} className="material-symbols-outlined fill-current text-[14px]">
                                                                {star <= review.rating ? 'star' : 'star_border'}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="text-[11px] sm:text-xs text-on-surface-variant flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
                                                    <span className="whitespace-nowrap">{new Date(review.created_at).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden sm:flex text-warning shrink-0">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <span key={star} className="material-symbols-outlined fill-current text-[18px]">
                                                    {star <= review.rating ? 'star' : 'star_border'}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-on-surface-variant leading-relaxed mb-6">
                                        {review.content}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant border-t border-border/50 pt-4 mt-4">
                                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                                            Helpful ({review.helpful_votes || 0})
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
