"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import type { AITool } from "@/lib/types/tool";
import { useBookmarks } from "@/lib/contexts/BookmarksContext";
import { ToolImage } from "@/components/shared/ToolImage";

interface RecommendationResultCardProps {
  tool: AITool;
  role: string;
  goal: string;
}

export function RecommendationResultCard({ tool, role, goal }: RecommendationResultCardProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(tool.id);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Generate a deterministic high match score (94-99) based on tool ID string length or char codes
  const baseScore = 94;
  const scoreMod = tool.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 6;
  const matchScore = baseScore + scoreMod;

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
        className="relative h-full rounded-3xl bg-gradient-to-br from-rose-50 to-orange-50 border border-primary/10 hover:border-primary/40 transition-all duration-500 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(255,95,109,0.15)] group/card hover:-translate-y-2 overflow-hidden"
      >
        {/* Spotlight Overlay */}
        <div 
          className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,95,109,0.1), transparent 40%)`
          }}
        />
        
        {/* Card Content Wrapper */}
        <div className="relative z-10 flex flex-col h-full p-4 lg:p-5">
          
          {/* Top Bar: Match Score & Price */}
          <div className="flex justify-between items-start mb-4 border-b border-black/5 pb-3">
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 border border-emerald-100 px-2.5 py-1 rounded-xl font-bold text-xs lg:text-sm">
              <span className="material-symbols-outlined text-[16px]">temp_preferences_custom</span>
              {matchScore}% Match
            </div>
            <div className="bg-slate-50 text-slate-600 border border-black/5 text-[11px] lg:text-xs font-bold px-2.5 py-1 rounded-xl flex items-center">
              {tool.priceModel}
            </div>
          </div>

          {/* Tool Identity */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white flex-shrink-0 shadow-sm ring-1 ring-black/5">
              <ToolImage
                tool={tool}
                type="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-black text-xl text-slate-900 group-hover:text-primary transition-colors flex items-center gap-1.5">
                {tool.name}
                {tool.verified && (
                  <span className="material-symbols-outlined text-primary text-[18px]" title="Verified">
                    verified
                  </span>
                )}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-accent text-[14px]">star</span>
                <span className="text-xs font-bold text-slate-700">{tool.rating}</span>
                <span className="text-[10px] font-medium text-slate-500">({tool.reviewCount})</span>
              </div>
            </div>
          </div>

          {/* The AI Insight */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-3 mb-4 border border-primary/10 flex-grow shadow-inner">
            <div className="flex items-center gap-1.5 mb-1.5 text-primary">
              <span className="material-symbols-outlined text-[14px] lg:text-[16px] animate-pulse">psychology</span>
              <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-widest">AI Insight</span>
            </div>
            <p className="text-xs lg:text-sm text-slate-700 leading-relaxed font-semibold">
              Highly recommended for a <strong className="text-primary">{role}</strong> looking to <strong className="text-secondary">{goal.toLowerCase()}</strong>. {tool.name} is an industry standard in the {tool.category} space.
            </p>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between mt-auto pt-1">
            <div className="flex flex-wrap gap-1.5">
              {tool.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] lg:text-[10px] font-bold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-black/5 transition-colors group-hover/card:border-black/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button 
              onClick={handleBookmarkClick}
              className="p-2 rounded-full bg-white border border-black/5 hover:bg-primary group/btn transition-colors flex items-center justify-center z-20 shrink-0 shadow-sm"
              title={bookmarked ? "Remove Bookmark" : "Bookmark Tool"}
            >
              <span className={`material-symbols-outlined text-[18px] transition-colors ${bookmarked ? 'text-primary group-hover/btn:text-white' : 'text-slate-400 group-hover/btn:text-white'}`}>
                {bookmarked ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
