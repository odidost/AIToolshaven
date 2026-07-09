"use client";

import { useState } from "react";
import type { AITool } from "@/lib/types/tool";

type ToolReviewsProps = {
    tool: AITool;
};

export function ToolReviews({ tool }: ToolReviewsProps) {
    const [sort, setSort] = useState("Most Helpful");
    const [filter, setFilter] = useState("All Ratings");

    // Mock data for UI demonstration
    const totalReviews = tool.reviewCount || 124;
    const rating = tool.rating || 4.8;
    const distribution = [
        { stars: 5, percentage: 75 },
        { stars: 4, percentage: 15 },
        { stars: 3, percentage: 5 },
        { stars: 2, percentage: 3 },
        { stars: 1, percentage: 2 },
    ];

    const mockReviews = [
        {
            id: 1,
            name: "Sarah Jenkins",
            initials: "SJ",
            verified: true,
            source: "Community Feedback",
            date: "2 weeks ago",
            rating: 5,
            helpfulCount: 42,
            useCase: "Developer",
            content: `I've integrated ${tool.name} into our core product, and the results have been phenomenal. The API is lightning fast, and the documentation made it very easy to get started. Highly recommended for any engineering team looking to scale their AI capabilities without building from scratch.`
        },
        {
            id: 2,
            name: "David Chen",
            initials: "DC",
            verified: true,
            source: "Public Review",
            date: "1 month ago",
            rating: 4,
            helpfulCount: 18,
            useCase: "Marketer",
            content: `As a marketer, I don't have time to write complex prompts. ${tool.name} simplifies everything. It saves me about 10 hours a week on content generation. My only gripe is that it can be a bit sluggish during peak hours, but overall it's a solid tool.`
        }
    ];

    return (
        <section className="my-16">
            <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-8">Real User Reviews</h2>

            <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
                {/* Left Sidebar: Ratings Summary */}
                <div className="rounded-[24px] border border-primary/15 bg-gradient-to-br from-[#F0EDFF] via-[#F5F7FB] to-[#E0EBFF] p-8 shadow-sm h-fit">
                    <div className="text-center mb-6">
                        <div className="text-5xl font-extrabold text-on-surface">{rating.toFixed(1)}</div>
                        <div className="flex items-center justify-center gap-1 mt-2 text-warning">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span key={star} className="material-symbols-outlined fill-current text-[20px]">
                                    {star <= Math.round(rating) ? 'star' : 'star_border'}
                                </span>
                            ))}
                        </div>
                        <div className="text-sm text-on-surface-variant mt-2">
                            Based on {totalReviews.toLocaleString()} reviews
                        </div>
                    </div>

                    <div className="space-y-3">
                        {distribution.map((dist) => (
                            <div key={dist.stars} className="flex items-center gap-3 text-sm">
                                <span className="font-medium w-3 text-on-surface">{dist.stars}</span>
                                <span className="material-symbols-outlined text-[14px] text-warning fill-current">star</span>
                                <div className="flex-1 h-2 rounded-full bg-surface-secondary overflow-hidden">
                                    <div 
                                        className="h-full bg-warning rounded-full" 
                                        style={{ width: `${dist.percentage}%` }}
                                    />
                                </div>
                                <span className="w-8 text-right text-on-surface-variant">{dist.percentage}%</span>
                            </div>
                        ))}
                    </div>
                    
                    <button className="w-full mt-8 py-3 rounded-xl border border-border/50 font-semibold text-on-surface hover:bg-surface-secondary transition-colors">
                        Write a Review
                    </button>
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
                                <option>Most Helpful</option>
                                <option>Newest</option>
                                <option>Highest Rated</option>
                                <option>Lowest Rated</option>
                            </select>
                            <select 
                                value={filter} 
                                onChange={(e) => setFilter(e.target.value)}
                                className="bg-white border border-border/50 rounded-lg px-3 py-2 text-sm font-medium text-on-surface focus:outline-none focus:border-primary"
                            >
                                <option>All Ratings</option>
                                <option>5 Stars</option>
                                <option>4 Stars</option>
                                <option>3 Stars</option>
                                <option>2 Stars</option>
                                <option>1 Star</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {mockReviews.map((review) => (
                            <div key={review.id} className="rounded-[24px] border border-primary/15 bg-gradient-to-br from-[#F0EDFF] via-[#F5F7FB] to-[#E0EBFF] p-8 shadow-sm">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                            {review.initials}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-bold text-on-surface">{review.name}</h4>
                                                {review.verified && (
                                                    <span className="material-symbols-outlined text-[16px] text-success" title="Verified Reviewer">
                                                        verified
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-xs text-on-surface-variant flex items-center gap-2 mt-1">
                                                <span>{review.source}</span>
                                                <span>•</span>
                                                <span>{review.date}</span>
                                                <span>•</span>
                                                <span className="font-medium bg-surface-secondary px-2 py-0.5 rounded-md">
                                                    {review.useCase}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex text-warning">
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

                                <div className="flex items-center gap-4 text-sm text-on-surface-variant border-t border-border/50 pt-4 mt-4">
                                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                                        Helpful ({review.helpfulCount})
                                    </button>
                                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">share</span>
                                        Share
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <button className="px-6 py-3 rounded-xl border border-border/50 font-semibold text-on-surface hover:bg-surface-secondary transition-colors">
                            Load More Reviews
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
