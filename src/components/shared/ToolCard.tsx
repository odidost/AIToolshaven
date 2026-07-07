"use client";

import Link from "next/link";
import type { AITool } from "@/lib/types/tool";
import { useBookmarks } from "@/lib/contexts/BookmarksContext";

export function ToolCard({ tool }: { tool: AITool }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(tool.id);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleBookmark(tool.id);
  };

  return (
    <Link href={`/tool/${tool.slug}`} className="block group h-full">
      <article className="bg-card rounded-3xl p-6 border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-glow relative group/card hover:-translate-y-1 bg-gradient-to-b from-surface to-surface-secondary/20">
        <button 
          onClick={handleBookmarkClick}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-surface border border-outline hover:bg-primary group/btn transition-colors flex items-center justify-center shadow-sm"
          title={bookmarked ? "Remove Bookmark" : "Bookmark Tool"}
        >
          <span className={`material-symbols-outlined text-[18px] transition-colors ${bookmarked ? 'text-primary group-hover/btn:text-white' : 'text-on-surface-variant group-hover/btn:text-white'}`}>
            {bookmarked ? 'bookmark' : 'bookmark_border'}
          </span>
        </button>

        <div className="flex justify-between items-start mb-4 pr-10">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-outline flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.imageUrl}
              alt={tool.name}
              className="w-full h-full object-cover"
            />
          </div>

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

        <h3 className="font-bold text-lg text-on-surface mb-1 group-hover:text-primary transition-colors">
          {tool.name}

          {tool.verified && (
            <span
              className="material-symbols-outlined text-primary text-sm ml-1 align-middle"
              title="Verified"
            >
              verified
            </span>
          )}
        </h3>

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

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-on-surface-variant bg-surface-secondary px-3 py-1 rounded-full border border-border/50 group-hover/card:border-border transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
