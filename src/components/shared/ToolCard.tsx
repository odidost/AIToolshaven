"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import type { AITool } from "@/lib/types/tool";
import { useBookmarks } from "@/lib/contexts/BookmarksContext";
import { ToolImage } from "@/components/shared/ToolImage";

export function ToolCard({ tool, rank }: { tool: AITool; rank?: number }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(tool.id);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleBookmark(tool.id);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link href={`/tool/${tool.slug}`} className="block group h-full">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`relative h-full rounded-2xl transition-all duration-300 flex flex-col hover:-translate-y-1 overflow-hidden group/card ${
          tool.isSponsored 
            ? 'bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/5 border-2 border-[#FFD700]/50 shadow-[0_4px_20px_rgba(255,215,0,0.15)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.3)] hover:border-[#FFD700]' 
            : 'bg-gradient-to-br from-rose-50/40 to-orange-50/40 border border-primary/5 hover:border-primary/30 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(255,95,109,0.1)]'
        }`}
      >
        {/* Spotlight Overlay */}
        <div 
          className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,95,109,0.15), transparent 40%)`
          }}
        />
        
        {/* Card Content Wrapper */}
        <div className="relative z-10 flex flex-col h-full p-5">
          <div className="flex flex-wrap items-center gap-1.5 mb-4">
            {rank !== undefined && (
              rank === 1 ? (
                <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-950 dark:text-amber-200 border border-amber-500/40 text-[11px] tracking-tight font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                  <span className="material-symbols-outlined text-[13px] text-amber-600 dark:text-amber-400">workspace_premium</span>
                  #1 Top Pick
                </div>
              ) : rank === 2 ? (
                <div className="bg-gradient-to-r from-slate-200/80 to-slate-100 text-slate-800 dark:bg-slate-800/80 dark:text-slate-200 border border-slate-300 dark:border-slate-600 text-[11px] tracking-tight font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                  <span className="material-symbols-outlined text-[13px] text-slate-600 dark:text-slate-300">military_tech</span>
                  #2 Runner Up
                </div>
              ) : rank === 3 ? (
                <div className="bg-gradient-to-r from-amber-700/10 to-orange-700/10 text-amber-900 dark:text-amber-300 border border-amber-700/30 text-[11px] tracking-tight font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                  <span className="material-symbols-outlined text-[13px] text-amber-700 dark:text-amber-400">award_star</span>
                  #3 Top Pick
                </div>
              ) : rank <= 20 ? (
                <div className="bg-primary/10 text-primary border border-primary/20 text-[11px] tracking-tight font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="text-[10px] opacity-70">#</span>
                  <span>{rank} Popular</span>
                </div>
              ) : (
                <div className="bg-surface-secondary text-on-surface-variant border border-border text-[10px] tracking-tight font-semibold px-2 py-0.5 rounded-full flex items-center">
                  #{rank}
                </div>
              )
            )}

            {tool.isSponsored && (
              <div className="bg-[#FFD700]/20 text-[#996515] border border-[#FFD700]/50 text-[11px] tracking-tight font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[12px]">diamond</span>
                Sponsored
              </div>
            )}
            {tool.featured && !tool.isSponsored && (
              <div className="bg-accent/10 text-accent border border-accent/20 text-[11px] tracking-tight font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">star</span>
                Featured
              </div>
            )}
            <div className="bg-secondary/10 text-secondary border border-secondary/20 text-[11px] tracking-tight font-semibold px-2.5 py-0.5 rounded-full flex items-center">
              {tool.priceModel}
            </div>
          </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-border/60 flex-shrink-0 shadow-xs flex items-center justify-center p-1.5">
            <ToolImage
              tool={tool}
              type="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="font-bold text-base text-on-surface group-hover:text-primary transition-colors flex items-center">
            {tool.name}
            {tool.verified && (
              <span
                className="material-symbols-outlined text-primary text-[18px] ml-1.5"
                title="Verified"
              >
                verified
              </span>
            )}
          </h3>
        </div>

        <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 flex-grow">
          {tool.tagline}
        </p>

        <div className="flex items-center gap-1 mb-4 text-accent min-h-[20px]">
          {(tool.reviewCount || 0) > 0 && tool.rating ? (
            <>
              <span className="material-symbols-outlined text-base">
                star
              </span>
              <span className="text-sm font-semibold text-on-surface">
                {tool.rating}
              </span>
              <span className="text-xs text-on-surface-variant ml-1">
                ({tool.reviewCount})
              </span>
            </>
          ) : (
            <span className="text-xs text-on-surface-variant/70 font-medium">
              No reviews yet
            </span>
          )}
        </div>

          <div className="flex items-center justify-between mt-auto gap-2">
            <div className="flex flex-wrap gap-1.5">
              {(tool.tags || []).slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium text-on-surface-variant bg-surface-secondary px-3 py-1 rounded-full border border-border/50 group-hover/card:border-border transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button 
              onClick={handleBookmarkClick}
              className="p-1.5 rounded-full bg-white border border-black/5 hover:bg-primary group/btn transition-colors flex items-center justify-center shadow-sm z-20 shrink-0 relative"
              title={bookmarked ? "Remove Bookmark" : "Bookmark Tool"}
            >
              <span className={`material-symbols-outlined text-[16px] transition-colors ${bookmarked ? 'text-primary group-hover/btn:text-white' : 'text-on-surface-variant group-hover/btn:text-white'}`}>
                {bookmarked ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
