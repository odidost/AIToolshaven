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

  const matchScore = tool.matchScore || (94 + (tool.id.charCodeAt(0) % 5));
  const badge = tool.recommendationBadge || "#1 Editorial Top Pick";

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  // Badge styles
  const isTopPick = badge.includes("#1");
  const isBestValue = badge.includes("Value") || badge.includes("Speed");
  const badgeClass = isTopPick
    ? "from-[#FF5F6D]/20 to-[#FFC371]/20 text-[#FF5F6D] border-[#FF5F6D]/30"
    : isBestValue
    ? "from-emerald-500/20 to-teal-500/20 text-emerald-600 border-emerald-500/30"
    : "from-blue-500/20 to-cyan-500/20 text-blue-600 border-blue-500/30";

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative rounded-3xl bg-gradient-to-b from-[#FF5F6D]/5 via-[#FF8C69]/3 to-transparent bg-white border border-black/5 hover:border-primary/40 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full"
    >
      {/* Interactive Spotlight Radial Glow */}
      <div 
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,95,109,0.08), transparent 60%)`
        }}
      />

      <div className="relative z-10">
        {/* Top Header: Badge, Match Radar, and Price Model */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border bg-gradient-to-r ${badgeClass} uppercase tracking-wider`}>
            {badge}
          </span>
          
          <div className="flex items-center gap-1.5">
            <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {matchScore}% Match
            </div>
            <span className="text-[11px] font-bold text-gray-500 bg-gray-100 border border-black/5 px-2 py-0.5 rounded-full">
              {tool.priceModel}
            </span>
          </div>
        </div>

        {/* Tool Identity Row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <Link href={`/tool/${tool.slug}`} className="flex items-center gap-3 group/link">
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white flex-shrink-0 shadow-sm border border-black/5 group-hover/link:scale-105 transition-transform">
              <ToolImage
                tool={tool}
                type="logo"
                className="w-full h-full object-cover p-1"
              />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-gray-900 group-hover/link:text-primary transition-colors flex items-center gap-1.5">
                {tool.name}
                {tool.verified && (
                  <span className="material-symbols-outlined text-primary text-[17px]" title="Verified Standard">
                    verified
                  </span>
                )}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mt-0.5">
                <span className="text-amber-500 font-bold flex items-center">
                  ★ {tool.rating || "4.8"}
                </span>
                <span className="text-gray-300">•</span>
                <span>{tool.category.replace(/-/g, ' ')}</span>
              </div>
            </div>
          </Link>

          <button 
            onClick={handleBookmarkClick}
            className="p-2 rounded-xl bg-white border border-black/5 hover:bg-primary/10 text-gray-400 hover:text-primary transition-colors shrink-0 shadow-2xs"
            title={bookmarked ? "Remove Bookmark" : "Save Tool"}
          >
            <span className={`material-symbols-outlined text-[18px] ${bookmarked ? 'text-primary' : ''}`}>
              {bookmarked ? 'bookmark' : 'bookmark_border'}
            </span>
          </button>
        </div>

        {/* The AI Insight Box */}
        <div className="bg-gradient-to-br from-[#FF5F6D]/5 via-[#FF8C69]/5 to-transparent rounded-2xl p-3.5 mb-4 border border-[#FF5F6D]/15 shadow-2xs">
          <div className="flex items-center gap-1.5 mb-1.5 text-primary">
            <span className="material-symbols-outlined text-[15px] animate-pulse">auto_awesome</span>
            <span className="text-[10.5px] font-black uppercase tracking-wider">Why It Fits You</span>
          </div>
          <p className="font-sans text-xs sm:text-[13px] text-gray-700 leading-relaxed line-clamp-3">
            {tool.aiReasoning || `Tailored for ${role}s looking to ${goal.toLowerCase()}. Verified benchmark performer with robust production capabilities.`}
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {(tool.tags || []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-lg border border-black/5 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3.5 border-t border-black/5 flex items-center gap-2">
        <Link
          href={`/tool/${tool.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-primary text-white text-xs font-bold transition-all shadow-xs group-hover:bg-primary"
        >
          View Full Specs & Review
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
