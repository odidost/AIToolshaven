"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import type { AITool } from "@/lib/types/tool";
import { useBookmarks } from "@/lib/contexts/BookmarksContext";
import { ToolImage } from "@/components/shared/ToolImage";

export function ToolCard({ tool }: { tool: AITool }) {
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
        className="relative h-full rounded-2xl bg-gradient-to-br from-rose-50/40 to-orange-50/40 border border-primary/5 hover:border-primary/30 transition-all duration-300 flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(255,95,109,0.1)] group/card hover:-translate-y-1 overflow-hidden"
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
          <div className="flex flex-wrap justify-start items-start gap-2 mb-4">
            <div className="flex gap-2">
              {tool.featured && (
                <div className="bg-accent/10 text-accent border border-accent/20 text-[11px] tracking-tight font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">star</span>
                  Featured
                </div>
              )}
              <div className="bg-secondary/10 text-secondary border border-secondary/20 text-[11px] tracking-tight font-semibold px-2.5 py-0.5 rounded-full flex items-center">
                {tool.priceModel}
              </div>
            </div>
          </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-outline flex-shrink-0 shadow-sm">
            <ToolImage
              tool={tool}
              type="logo"
              className="w-full h-full object-cover"
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

        <div className="flex items-center gap-1 mb-4 text-accent">
          <span className="material-symbols-outlined text-base">
            star
          </span>

          <span className="text-sm font-semibold text-on-surface">
            {tool.rating}
          </span>

          <span className="text-xs text-on-surface-variant ml-1">
            ({tool.reviewCount})
          </span>
        </div>

          <div className="flex items-center justify-between mt-auto gap-2">
            <div className="flex flex-wrap gap-1.5">
              {tool.tags.slice(0, 3).map((tag) => (
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
