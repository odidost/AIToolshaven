"use client";

import Link from "next/link";
import type { AITool } from "@/lib/types/tool";
import { useBookmarks } from "@/lib/contexts/BookmarksContext";
import { useUpvotes } from "@/lib/contexts/UpvotesContext";
import { ToolImage } from "@/components/shared/ToolImage";
import { motion, AnimatePresence } from "framer-motion";

export function ToolCard({ tool, rank }: { tool: AITool; rank?: number }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { upvotes, hasUpvoted, toggleUpvote } = useUpvotes();
  
  const bookmarked = isBookmarked(tool.id);
  const upvoted = hasUpvoted(tool.slug || tool.id);
  const upvoteCount = upvotes[tool.slug || tool.id] || 0;

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(tool.id);
  };

  const handleUpvoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleUpvote(tool.slug || tool.id);
  };

  const priceBadgeClass = (() => {
    const pm = (tool.priceModel || "").toLowerCase();
    if (pm.includes("free") && !pm.includes("freemium") && !pm.includes("trial")) {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
    if (pm.includes("freemium")) {
      return "bg-blue-50 text-blue-700 border-blue-200";
    }
    return "bg-purple-50 text-purple-700 border-purple-200";
  })();

  return (
    <Link href={`/tool/${tool.slug}`} prefetch={false} className="group block h-full">
      <div className="relative flex flex-col h-full p-4 bg-white rounded-lg border border-[#E5E7EB] hover:border-[#E11D48] hover:shadow-xs transition-all duration-200">
        
        {/* Header Badges: Rank, Status & Pricing */}
        <div className="flex items-center justify-between gap-1.5 mb-3 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            {rank !== undefined && (
              rank === 1 ? (
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-[#FECDD3] bg-[#FFF1F2] text-[11px] font-bold text-[#E11D48]">
                  <span className="material-symbols-outlined text-[13px]">workspace_premium</span>
                  #1 Top Pick
                </div>
              ) : rank === 2 ? (
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-[11px] font-semibold text-[#4B5563]">
                  <span className="material-symbols-outlined text-[13px] text-[#6B7280]">military_tech</span>
                  #2 Runner Up
                </div>
              ) : rank === 3 ? (
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-[11px] font-semibold text-[#4B5563]">
                  <span className="material-symbols-outlined text-[13px] text-[#6B7280]">award_star</span>
                  #3 Top Pick
                </div>
              ) : rank <= 20 ? (
                <div className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-[11px] font-medium text-[#4B5563]">
                  <span className="text-[10px] text-[#9CA3AF]">#</span>
                  <span>{rank} Popular</span>
                </div>
              ) : (
                <div className="inline-flex items-center px-1.5 py-0.5 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-[10px] font-mono text-[#6B7280]">
                  #{rank}
                </div>
              )
            )}

            {tool.isSponsored && (
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-amber-200 bg-amber-50 text-[11px] font-medium text-amber-700">
                <span className="material-symbols-outlined text-[12px]">diamond</span>
                Sponsored
              </div>
            )}

            {tool.featured && !tool.isSponsored && (
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-[#FECDD3] bg-[#FFF1F2] text-[11px] font-medium text-[#E11D48]">
                <span className="material-symbols-outlined text-[12px]">star</span>
                Featured
              </div>
            )}
          </div>

          {tool.priceModel && (
            <div className={`text-[10px] font-medium px-2 py-0.5 rounded-md border shrink-0 ${priceBadgeClass}`}>
              {tool.priceModel}
            </div>
          )}
        </div>

        {/* Identity: Logo & Title */}
        <div className="flex items-center gap-3 mb-2.5">
          <div className="w-10 h-10 rounded-md border border-[#E5E7EB] bg-white p-1 shrink-0 flex items-center justify-center group-hover:border-[#E11D48]/40 transition-colors">
            <ToolImage
              tool={tool}
              type="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-heading font-semibold text-sm text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors truncate flex items-center gap-1">
              {tool.name}
              {tool.verified && (
                <span
                  className="material-symbols-outlined text-[#E11D48] text-[15px] shrink-0"
                  title="Verified"
                >
                  verified
                </span>
              )}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 text-[11px] text-[#4B5563] mt-0.5">
              {(tool.reviewCount || 0) > 0 && tool.rating ? (
                <>
                  <span className="material-symbols-outlined text-[13px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-mono font-medium text-[#0A0A0A]">
                    {tool.rating}
                  </span>
                  <span className="text-[#9CA3AF]">
                    ({tool.reviewCount})
                  </span>
                </>
              ) : (
                <span className="text-[11px] text-[#9CA3AF]">
                  Verified Listing
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed mb-4 flex-grow">
          {tool.tagline}
        </p>

        {/* Footer: Tags & Utility Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F3F4F6] gap-2 mt-auto">
          <div className="flex items-center gap-1.5 overflow-hidden flex-wrap max-h-[22px]">
            {(tool.tags || []).slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-[#4B5563] bg-[#F9FAFB] border border-[#E5E7EB] px-1.5 py-0.5 rounded-md truncate max-w-[100px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 shrink-0 relative z-20">
            <button 
              onClick={handleUpvoteClick}
              className={`flex items-center gap-1 px-2 py-1 rounded-md border text-xs font-mono transition-colors ${
                upvoted 
                  ? 'bg-[#FFF1F2] border-[#FECDD3] text-[#E11D48]' 
                  : 'bg-[#F9FAFB] border-[#E5E7EB] text-[#4B5563] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2]'
              }`}
              title={upvoted ? "Remove Upvote" : "Upvote Tool"}
            >
              <motion.span 
                className="material-symbols-outlined text-[14px]"
                animate={upvoted ? { scale: [1, 1.25, 1] } : {}}
                transition={{ duration: 0.2 }}
              >
                keyboard_arrow_up
              </motion.span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={upvoteCount}
                  initial={{ y: -6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 6, opacity: 0 }}
                  className="font-medium"
                >
                  {upvoteCount.toLocaleString()}
                </motion.span>
              </AnimatePresence>
            </button>

            <button 
              onClick={handleBookmarkClick}
              className={`p-1 rounded-md border transition-colors flex items-center justify-center ${
                bookmarked 
                  ? 'bg-[#FFF1F2] border-[#FECDD3] text-[#E11D48]' 
                  : 'bg-[#F9FAFB] border-[#E5E7EB] text-[#6B7280] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2]'
              }`}
              title={bookmarked ? "Remove Bookmark" : "Bookmark Tool"}
            >
              <span className="material-symbols-outlined text-[15px]">
                {bookmarked ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
