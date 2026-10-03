"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  Star,
  ChevronRight
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

  return (
    <div className="w-full relative rounded-lg p-5 md:p-6 mb-8 bg-white border border-[#E5E7EB] hover:border-[#E11D48]/40 shadow-xs transition-colors group">
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8">
        
        {/* Left Side: Top Pick Identity, Badges & Actions */}
        <div className="max-w-2xl flex-1">
          
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="inline-flex items-center gap-1.5 bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3] px-2.5 py-0.5 rounded-md text-xs font-semibold">
              <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
              <span>#1 Editorial Benchmark Winner</span>
            </div>

            {topPick.priceModel && (
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium">
                {topPick.priceModel}
              </span>
            )}

            <span className="inline-flex items-center gap-1 bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] px-2 py-0.5 rounded-md text-[11px] font-mono">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>{topPick.rating || "4.9"} ({topPick.reviewCount ? `${topPick.reviewCount}+` : "150+"} reviews)</span>
            </span>
          </div>

          {/* Title Row with Tool Logo */}
          <div className="flex items-center gap-3 mb-2.5">
            <div className="relative w-11 h-11 rounded-md bg-white border border-[#E5E7EB] p-1.5 flex items-center justify-center shrink-0 group-hover:border-[#E11D48]/40 transition-colors">
              <ToolImage
                tool={topPick}
                type="logo"
                alt={`${topPick.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#6B7280] uppercase tracking-wider mb-0.5">Top Category Pick</div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0A0A0A] flex items-center gap-1.5">
                <span>{topPick.name}</span>
                <span className="material-symbols-outlined text-[#E11D48] text-[18px]" title="Verified">
                  verified
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="font-sans text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed line-clamp-2 mb-4">
            {topPick.tagline || topPick.description}
          </p>

          {/* Action Buttons & Founder Hook */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href={`/tool/${topPick.slug}`}
              className="inline-flex items-center gap-1.5 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-medium px-4 py-2 rounded-md transition-colors shadow-xs"
            >
              <span>View Full Review &amp; Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {topPick.websiteUrl && (
              <a
                href={topPick.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-[#FFF1F2] text-[#0A0A0A] hover:text-[#E11D48] text-xs font-medium px-3.5 py-2 rounded-md border border-[#E5E7EB] hover:border-[#FECDD3] transition-colors"
              >
                <span>Visit Official Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <Link
              href={`/submit?category=${categorySlug}&ref=spotlight`}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5563] hover:text-[#E11D48] bg-[#F9FAFB] hover:bg-[#FFF1F2] border border-[#E5E7EB] hover:border-[#FECDD3] px-3 py-1.5 rounded-md transition-colors ml-auto sm:ml-0"
              title="Apply to feature your tool in this benchmark spotlight"
            >
              <span className="material-symbols-outlined text-[14px] text-[#E11D48]">rocket_launch</span>
              <span>Tool Founder? Get Featured &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Quick Comparison Runners Up */}
        {runnersUp.length > 0 && (
          <div className="w-full lg:w-72 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md p-3.5 shrink-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-[#0A0A0A] uppercase tracking-wider">
                Trending in {categoryName}
              </span>
              <span className="text-[10px] font-mono text-[#6B7280]">#2 &ndash; #{Math.min(4, topTools.length)}</span>
            </div>

            <div className="flex flex-col gap-1">
              {runnersUp.map((tool, idx) => (
                <Link
                  key={tool.slug}
                  href={`/tool/${tool.slug}`}
                  className="flex items-center justify-between gap-2.5 p-1.5 rounded-md hover:bg-white border border-transparent hover:border-[#E5E7EB] transition-colors group/item"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-5 h-5 rounded-md bg-white border border-[#E5E7EB] text-[#4B5563] flex items-center justify-center text-[10px] font-mono font-medium shrink-0">
                      {idx + 2}
                    </div>
                    <span className="text-xs font-medium text-[#0A0A0A] group-hover/item:text-[#E11D48] transition-colors truncate">
                      {tool.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6B7280] group-hover/item:text-[#0A0A0A] transition-colors shrink-0 flex items-center gap-0.5">
                    {tool.priceModel || 'Free'}
                    <ChevronRight className="w-3 h-3 opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Quick Browse All Link */}
            <a
              href="#tools-grid"
              className="mt-2 pt-2 border-t border-[#E5E7EB] text-[11px] text-[#6B7280] hover:text-[#E11D48] flex items-center justify-center gap-1 transition-colors font-medium text-center"
            >
              <span>Compare all {topTools.length} tools below &darr;</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
