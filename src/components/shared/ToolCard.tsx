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
      return "bg-emerald-500/10 text-emerald-800 border-emerald-500/20";
    }
    if (pm.includes("freemium")) {
      return "bg-blue-500/10 text-blue-800 border-blue-500/20";
    }
    return "bg-purple-500/10 text-purple-800 border-purple-500/20";
  })();

  return (
    <Link href={`/tool/${tool.slug}`} prefetch={false} className="group block h-full">
      <div className="relative flex flex-col h-full p-4 sm:p-4.5 bg-[#F9F9F6] hover:bg-white rounded-2xl border border-black/[0.08] hover:border-[#E11D48]/40 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
        
        {/* Background organic blurred bokeh blooms (Editorial Pick signature aesthetic) */}
        <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#FDA4AF]/25 blur-2xl pointer-events-none group-hover:bg-[#FDA4AF]/35 transition-colors" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-[#FED7AA]/30 blur-2xl pointer-events-none group-hover:bg-[#FED7AA]/40 transition-colors" />

        {/* Header Badges: Rank, Status & Pricing */}
        <div className="flex items-center justify-between gap-1.5 mb-3 flex-wrap relative z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            {rank !== undefined && (
              rank === 1 ? (
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#FECDD3] bg-gradient-to-r from-[#FFF1F2] to-[#FFE4E6] text-[10px] font-bold text-[#E11D48] shadow-2xs">
                  <span className="material-symbols-outlined text-[13px]">workspace_premium</span>
                  <span>#1 Top Pick</span>
                </div>
              ) : rank === 2 ? (
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-black/[0.07] bg-white text-[10px] font-semibold text-[#1C1917] shadow-2xs">
                  <span className="material-symbols-outlined text-[13px] text-[#78716C]">military_tech</span>
                  <span>#2 Runner Up</span>
                </div>
              ) : rank === 3 ? (
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-black/[0.07] bg-white text-[10px] font-semibold text-[#1C1917] shadow-2xs">
                  <span className="material-symbols-outlined text-[13px] text-[#78716C]">award_star</span>
                  <span>#3 Top Pick</span>
                </div>
              ) : rank <= 20 ? (
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-black/[0.07] bg-white text-[10px] font-semibold text-[#44403C] shadow-2xs">
                  <span className="text-[#A8A29E] font-mono font-normal">#{rank}</span>
                  <span>Popular</span>
                </div>
              ) : (
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-black/[0.07] bg-white text-[10px] font-mono font-medium text-[#78716C] shadow-2xs">
                  #{rank}
                </div>
              )
            )}

            {tool.isSponsored && (
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-amber-300/70 bg-gradient-to-r from-amber-50 to-amber-100/60 text-[10px] font-semibold text-amber-800 shadow-2xs">
                <span className="material-symbols-outlined text-[12px] text-amber-600">diamond</span>
                <span>Sponsored</span>
              </div>
            )}

            {tool.featured && !tool.isSponsored && (
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-[#FECDD3] bg-[#FFF1F2] text-[10px] font-semibold text-[#E11D48] shadow-2xs">
                <span className="material-symbols-outlined text-[12px]">star</span>
                <span>Featured</span>
              </div>
            )}
          </div>

          {tool.priceModel && (
            <div className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border shrink-0 shadow-2xs ${priceBadgeClass}`}>
              {tool.priceModel}
            </div>
          )}
        </div>

        {/* Identity: Logo & Title */}
        <div className="flex items-center gap-3 mb-2.5 relative z-10">
          <div className="relative w-11 h-11 rounded-xl border border-black/[0.07] bg-white p-1.5 shrink-0 flex items-center justify-center shadow-2xs group-hover:border-[#E11D48]/35 group-hover:scale-[1.03] transition-all">
            <ToolImage
              tool={tool}
              type="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-heading font-bold text-[15px] text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors truncate flex items-center gap-1 leading-snug">
              <span>{tool.name}</span>
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
            <div className="flex items-center gap-1.5 text-[11px] text-[#57534E] mt-0.5 font-mono">
              {(tool.reviewCount || 0) > 0 && tool.rating ? (
                <>
                  <span className="material-symbols-outlined text-[13px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-semibold text-[#0A0A0A]">
                    {tool.rating}
                  </span>
                  <span className="text-[#78716C]">
                    ({tool.reviewCount})
                  </span>
                </>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] text-[#78716C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  Verified Listing
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-serif text-[12.5px] text-[#44403C] group-hover:text-[#1C1917] line-clamp-2 leading-[1.65] mb-4 flex-grow font-normal transition-colors relative z-10">
          {tool.tagline || tool.description}
        </p>

        {/* Footer: Tags & Utility Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-black/[0.06] gap-2 mt-auto relative z-10">
          <div className="flex items-center gap-1.5 overflow-hidden flex-wrap max-h-[22px]">
            {(tool.tags || []).slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-[#57534E] bg-white/85 group-hover:bg-white border border-black/[0.06] px-2 py-0.5 rounded-full truncate max-w-[105px] transition-colors shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 shrink-0 relative z-20">
            <button 
              onClick={handleUpvoteClick}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-mono transition-all duration-150 active:scale-95 shadow-2xs ${
                upvoted 
                  ? 'bg-[#FFF1F2] border-[#FECDD3] text-[#E11D48] font-bold shadow-xs' 
                  : 'bg-white border-black/[0.08] text-[#44403C] hover:border-[#FECDD3] hover:text-[#E11D48] hover:bg-[#FFF1F2]'
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
              className={`w-7 h-7 rounded-full border transition-all duration-150 flex items-center justify-center active:scale-95 shadow-2xs ${
                bookmarked 
                  ? 'bg-[#FFF1F2] border-[#FECDD3] text-[#E11D48] shadow-xs' 
                  : 'bg-white border-black/[0.08] text-[#78716C] hover:border-[#FECDD3] hover:text-[#E11D48] hover:bg-[#FFF1F2]'
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
