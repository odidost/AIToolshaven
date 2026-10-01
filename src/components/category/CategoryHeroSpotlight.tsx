"use client";

import React from "react";
import Link from "next/link";
import { 
  Trophy, 
  Crown, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Star,
  CheckCircle2,
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

  // Dynamic category accent RGB triplet (matches CategoryHero exactly)
  const categoryCssVar = theme?.accentColors?.cssVar || "255, 95, 109";

  return (
    <div className="w-full relative rounded-3xl p-6 md:p-8 mb-10 overflow-hidden bg-gradient-to-br from-slate-100/95 via-white to-primary/[0.09] dark:from-slate-900 dark:via-[#111728] dark:to-slate-950 border-2 border-primary/25 dark:border-primary/35 hover:border-primary/45 shadow-[0_12px_36px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300 group">
      
      {/* 1. Ambient Background Studio Radial Glows - Enhanced Rich Opacity */}
      <div 
        className="absolute -top-12 right-1/4 w-[460px] h-[460px] rounded-full blur-[115px] opacity-25 dark:opacity-40 pointer-events-none -mr-24"
        style={{
          background: `rgb(${categoryCssVar})`
        }}
      />
      <div 
        className="absolute -bottom-10 left-4 w-96 h-96 rounded-full blur-[105px] opacity-20 dark:opacity-30 pointer-events-none bg-gradient-to-tr from-rose-500/70 to-amber-400/70"
      />
      
      {/* 2. Thicker Accent Top Gradient Bar */}
      <div 
        className="absolute top-0 inset-x-0 h-[3px] opacity-90 shadow-sm"
        style={{
          background: `linear-gradient(90deg, transparent, rgb(${categoryCssVar}), #f43f5e, #fbbf24, transparent)`
        }}
      />

      {/* 3. Subtle Radial Sheen Overlay */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 15% 10%, rgb(${categoryCssVar}), transparent 65%)`
        }}
      />

      {/* 4. Compact Main Layout (Exact former length & width) */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8">
        
        {/* Left Side: Top Pick Identity, Badges & Actions */}
        <div className="max-w-2xl flex-1">
          
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {/* Editorial Benchmark Winner Pill */}
            <div className="inline-flex items-center gap-2 bg-primary/15 dark:bg-primary/20 text-primary border-2 border-primary/30 dark:border-primary/40 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-xs">
              <Trophy className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>#1 Editorial Benchmark Winner</span>
            </div>

            {/* Price Model Pill */}
            <span className="inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-2 border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-extrabold">
              {topPick.priceModel || "Freemium"}
            </span>

            {/* Rating Pill */}
            <span className="inline-flex items-center gap-1 bg-black/5 dark:bg-white/10 border-2 border-black/10 dark:border-white/15 text-slate-800 dark:text-slate-200 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>{topPick.rating || "4.9"} ({topPick.reviewCount ? `${topPick.reviewCount}+` : "150+"} reviews)</span>
            </span>
          </div>

          {/* Title Row with Tool Logo */}
          <div className="flex items-center gap-3 mb-2.5">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 border-2 border-primary/30 dark:border-primary/40 p-1.5 flex items-center justify-center shrink-0 shadow-sm shadow-primary/15">
              <ToolImage
                tool={topPick}
                type="logo"
                alt={`${topPick.name} logo`}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-amber-500 text-white flex items-center justify-center shadow-xs">
                <Crown className="w-2.5 h-2.5 fill-current" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-slate-400 dark:text-slate-500 font-semibold text-lg sm:text-xl">Top Pick:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-amber-500 drop-shadow-xs">
                {topPick.name}
              </span>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-0.5" />
            </h2>
          </div>

          {/* Description */}
          <p className="font-sans text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed line-clamp-2 mb-4">
            {topPick.tagline || topPick.description}
          </p>

          {/* Action Buttons & Founder Hook */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/tool/${topPick.slug}`}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary via-rose-500 to-amber-500 hover:from-primary/95 hover:to-amber-500/95 text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-md shadow-primary/25 hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Full Review &amp; Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {topPick.websiteUrl && (
              <a
                href={topPick.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-bold px-4 py-2.5 rounded-full border-2 border-slate-200/90 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/30 transition-all shadow-xs"
              >
                <span>Visit Official Site</span>
                <ExternalLink className="w-3.5 h-3.5 text-primary" />
              </a>
            )}

            {/* Founder Incentive Hook: Discreet, High-Status Pill */}
            <Link
              href={`/submit?category=${categorySlug}&ref=spotlight`}
              className="inline-flex items-center gap-1.5 text-[11px] font-black text-primary hover:text-primary/90 bg-primary/15 hover:bg-primary/25 border-2 border-primary/30 hover:border-primary/50 px-3.5 py-1.5 rounded-full transition-all ml-auto sm:ml-0 shadow-2xs"
              title="Apply to feature your tool in this benchmark spotlight"
            >
              <Sparkles className="w-3 h-3 text-primary shrink-0" />
              <span>Tool Founder? Get Featured &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Quick Comparison Runners Up (Solid Frosted Card) */}
        {runnersUp.length > 0 && (
          <div className="w-full lg:w-72 bg-white/90 dark:bg-slate-900/90 border-2 border-primary/20 dark:border-white/10 hover:border-primary/40 rounded-2xl p-4 shrink-0 transition-all shadow-md backdrop-blur-md">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-1">
                <span>Also Trending in {categoryName}</span>
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400">#2 &ndash; #{Math.min(4, topTools.length)}</span>
            </div>

            <div className="flex flex-col gap-1.5">
              {runnersUp.map((tool, idx) => (
                <Link
                  key={tool.slug}
                  href={`/tool/${tool.slug}`}
                  className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors group/item"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-6 h-6 rounded-md bg-primary/15 text-primary border border-primary/30 flex items-center justify-center text-[10px] font-black shrink-0">
                      {idx + 2}
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover/item:text-primary transition-colors truncate">
                      {tool.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors shrink-0 flex items-center gap-0.5">
                    {tool.priceModel || 'Free'}
                    <ChevronRight className="w-3 h-3 opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Quick Browse All Link */}
            <a
              href="#tools-grid"
              className="mt-2.5 pt-2 border-t border-black/[0.06] dark:border-white/[0.08] text-[11px] text-slate-500 dark:text-slate-400 hover:text-primary flex items-center justify-center gap-1 transition-colors font-bold text-center"
            >
              <span>Compare all {topTools.length} tools below</span>
              <span>&darr;</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
