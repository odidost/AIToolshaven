"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  Star, 
  ChevronRight,
  Trophy
} from "lucide-react";
import type { AITool } from "@/lib/types/tool";
import type { CategoryTheme } from "@/lib/data/categoryThemes";
import { ToolImage } from "@/components/shared/ToolImage";

interface CategoryHeroSpotlightProps {
  categorySlug: string;
  categoryName: string;
  topTools: AITool[];
  theme?: CategoryTheme;
}

export function CategoryHeroSpotlight({
  categorySlug,
  categoryName,
  topTools,
  theme
}: CategoryHeroSpotlightProps) {
  if (!topTools || topTools.length === 0) return null;

  const topPick = topTools[0];
  const runnersUp = topTools.slice(1, 4);

  // Helper to safely strip HTML tags and decode clean text
  const cleanPlainText = (rawText?: string): string => {
    if (!rawText) return "";
    return rawText
      .replace(/<[^>]*>/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/\s+/g, " ")
      .trim();
  };

  const description = cleanPlainText(topPick.tagline || topPick.description);

  return (
    <div className="w-full relative rounded-2xl md:rounded-3xl p-5 md:p-6 mb-8 bg-[#F9F9F6] border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow-hidden transition-all">
      {/* Background organic blurred bokeh blooms with brand accent integration */}
      <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-[#FED7AA]/45 blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-1/4 w-72 h-72 rounded-full bg-[#FDA4AF]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-56 h-56 rounded-full bg-[#D9F99D]/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-56 h-56 rounded-full bg-[#FECDD3]/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8">
        
        {/* Left Side: Top Pick Identity, Badges & Actions */}
        <div className="max-w-2xl flex-1">
          
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="inline-flex items-center gap-1.5 bg-white/90 text-[#0A0A0A] border border-black/[0.08] px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-2xs">
              <Trophy className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
              <span className="font-serif italic">#1 Editorial Benchmark Winner</span>
            </div>

            {topPick.isSponsored && (
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-50 to-amber-100/70 text-[11px] font-semibold text-amber-900 shadow-2xs">
                <span className="material-symbols-outlined text-[13px] text-amber-600">diamond</span>
                <span>Featured Sponsor</span>
              </div>
            )}

            {topPick.priceModel && (
              <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium">
                {topPick.priceModel}
              </span>
            )}

            <span className="inline-flex items-center gap-1 bg-white/80 border border-black/[0.07] text-[#44403C] px-2.5 py-0.5 rounded-full text-[11px] font-mono">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>{topPick.rating || "4.9"} ({topPick.reviewCount ? `${topPick.reviewCount}+` : "150+"} reviews)</span>
            </span>
          </div>

          {/* Title Row with Tool Logo */}
          <div className="flex items-center gap-3 mb-2.5">
            <div className="relative w-11 h-11 rounded-xl bg-white border border-black/[0.07] p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
              <ToolImage
                tool={topPick}
                type="logo"
                alt={`${topPick.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#78716C] uppercase tracking-wider mb-0.5">Top Category Pick</div>
              <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight text-[#0A0A0A] flex items-center gap-1.5">
                <span>{topPick.name}</span>
                <span className="material-symbols-outlined text-[#E11D48] text-[18px]" title="Verified">
                  verified
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="font-serif text-xs sm:text-sm text-[#44403C] font-normal leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>

          {/* Action Buttons & Founder Hook */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href={`/tool/${topPick.slug}`}
              className="inline-flex items-center gap-1.5 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Full Review &amp; Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {topPick.websiteUrl && (
              <a
                href={topPick.websiteUrl}
                target="_blank"
                rel={`noopener noreferrer${topPick.isSponsored ? ' sponsored' : ''}`}
                className="inline-flex items-center gap-1.5 bg-[#1E2220] hover:bg-[#0A0A0A] text-white text-xs font-bold px-3.5 py-2 rounded-full transition-all shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Visit Official Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <Link
              href={`/submit?category=${categorySlug}&ref=spotlight`}
              className="inline-flex items-center gap-1.5 text-[11px] font-serif text-[#78716C] hover:text-[#0A0A0A] px-2.5 py-1 rounded-full transition-colors ml-auto sm:ml-0 hover:underline underline-offset-4"
              title="Apply to feature your tool in this benchmark spotlight"
            >
              <span className="material-symbols-outlined text-[14px] text-[#E11D48]">rocket_launch</span>
              <span>Tool Founder? Get Featured &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Quick Comparison Runners Up with Bespoke Styling */}
        {runnersUp.length > 0 && (
          <div className="w-full lg:w-72 relative rounded-2xl bg-white/90 backdrop-blur-xl border border-black/[0.08] p-3.5 shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
            {/* Ambient micro-bloom inside side card */}
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#E11D48]/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-[#FACC15]/10 blur-2xl pointer-events-none" />

            {/* Header Micro-Section */}
            <div className="relative z-10 flex items-center justify-between pb-2 mb-2 border-b border-black/[0.06]">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shrink-0" />
                <span className="text-[11px] font-serif font-semibold text-[#1C1917] tracking-tight truncate">
                  Trending in {categoryName}
                </span>
              </div>
              <span className="text-[10px] font-mono font-medium text-[#78716C] bg-black/[0.03] border border-black/[0.05] px-1.5 py-0.5 rounded-full shrink-0">
                #2 &ndash; #{Math.min(4, topTools.length)}
              </span>
            </div>

            {/* Runner-Up Tool Items Micro-Section */}
            <div className="relative z-10 flex flex-col gap-1.5">
              {runnersUp.map((tool, idx) => (
                <Link
                  key={tool.slug}
                  href={`/tool/${tool.slug}`}
                  className="flex items-center justify-between gap-2.5 p-1.5 rounded-xl bg-white/70 hover:bg-white border border-black/[0.04] hover:border-[#E11D48]/35 transition-all group/item shadow-2xs hover:shadow-xs hover:translate-x-0.5"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    {/* Bespoke Rank Badge */}
                    <div className="w-5 h-5 rounded-md bg-gradient-to-b from-[#FAF9F6] to-[#EFECE6] border border-black/[0.07] text-[#57534E] group-hover/item:text-[#E11D48] group-hover/item:border-[#E11D48]/30 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 transition-colors shadow-2xs">
                      #{idx + 2}
                    </div>

                    {/* Tool Micro Logo */}
                    <div className="relative w-5 h-5 rounded-md bg-white border border-black/[0.06] p-0.5 flex items-center justify-center shrink-0">
                      <ToolImage
                        tool={tool}
                        type="logo"
                        alt={`${tool.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <span className="text-xs font-semibold text-[#0A0A0A] group-hover/item:text-[#E11D48] transition-colors truncate">
                      {tool.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[10px] font-mono text-[#78716C] bg-black/[0.03] group-hover/item:bg-[#FFF1F2] group-hover/item:text-[#E11D48] px-1.5 py-0.5 rounded-md border border-black/[0.04] group-hover/item:border-[#FECDD3] transition-colors">
                      {tool.priceModel || "Free"}
                    </span>
                    <ChevronRight className="w-3 h-3 text-[#A8A29E] group-hover/item:text-[#E11D48] group-hover/item:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Browse All Link Micro-Section */}
            <div className="relative z-10 pt-2 mt-2 border-t border-black/[0.06] text-center">
              <a
                href="#tools-grid"
                className="inline-flex items-center justify-center gap-1 w-full py-0.5 rounded-md text-[11px] font-serif font-medium text-[#78716C] hover:text-[#E11D48] hover:bg-black/[0.02] transition-colors group/scroll"
              >
                <span>Compare all {topTools.length} tools below</span>
                <span className="text-[#E11D48] text-[11px] group-hover/scroll:translate-y-0.5 transition-transform">&darr;</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
