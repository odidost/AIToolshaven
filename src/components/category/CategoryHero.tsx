"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Star, 
  ArrowDown, 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getCategoryHeroMedia } from "@/lib/data/categoryHeroImages";
import type { ToolCategory } from "@/lib/types/category";
import type { CategoryTheme } from "@/lib/data/categoryThemes";
import type { AITool } from "@/lib/types/tool";

interface CategoryHeroProps {
  category: ToolCategory;
  categoryTools: AITool[];
  theme: CategoryTheme;
  hasGuide?: boolean;
  parentBreadcrumb?: { label: string; href?: string }[];
}

export function CategoryHero({
  category,
  categoryTools,
  theme,
  hasGuide = true,
  parentBreadcrumb = [],
}: CategoryHeroProps) {
  // Extract top tools for floating product cards
  const topPicks = categoryTools.slice(0, 3);
  const heroMedia = getCategoryHeroMedia(category.slug, category.name);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300">
      
      {/* Ambient background studio radial glows */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 dark:opacity-25 pointer-events-none -mr-40 -mt-20"
        style={{
          background: `rgb(${theme.accentColors.cssVar})`
        }}
      />
      <div 
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-[120px] opacity-10 dark:opacity-15 pointer-events-none bg-gradient-to-tr from-rose-400 to-amber-300"
      />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pb-16 lg:pb-20 relative z-10">
        
        {/* Breadcrumb Navigation inside Hero */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs
            items={[
              { label: "Categories", href: "/categories" },
              ...parentBreadcrumb,
              { label: category.name },
            ]}
          />
        </div>

        {/* Commercial Grid: Left Editorial / Right Human Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Commercial Editorial Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Trending Pill Kicker */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>2026 Curated Collection</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                <span>{categoryTools.length} Hand-Vetted Tools</span>
              </div>
            </div>

            {/* Headline: Authoritative Category Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                The Best{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-amber-500 drop-shadow-xs">
                  {category.name}
                </span>{" "}
                <span className="text-slate-900 dark:text-white">
                  {(/^ai\b/i.test(category.name) || /tools$/i.test(category.name)) ? "for 2026" : "AI Tools for 2026"}
                </span>
              </h1>
            </div>

            {/* Friendly Editorial Subheading */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed font-sans">
              {theme.heroDescription || `Hand-tested ${category.name} software curated for modern creators, founders, and teams. Compare verified pricing, free allowances, and real community ratings.`}
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollToSection("tools-grid")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary via-rose-500 to-amber-500 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Explore All {categoryTools.length || ""} Tools</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection("buyer-resources")}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-sm border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <ArrowDown className="w-4 h-4 text-primary" />
                <span>Compare Top Picks</span>
              </button>

              {hasGuide && (
                <button
                  onClick={() => scrollToSection("category-guide")}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span>Buyer&apos;s Guide</span>
                </button>
              )}
            </div>

            {/* Social Proof Strip (NovaTrend / Crescendo style) */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white">
                  EK
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-[10px] font-bold text-white">
                  SM
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
                  AR
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-[10px] font-bold text-white">
                  JD
                </div>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                <span className="text-amber-500 font-bold">★★★★★ 4.9</span> rating • Loved by <strong className="text-slate-900 dark:text-white">25,000+ creators &amp; founders</strong>
              </div>
            </div>

          </div>

          {/* Right Column: Commercial Human Showcase with Floating Product Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            
            {/* Ambient Background Behind Image Container */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-primary/10 via-rose-500/10 to-amber-400/10 blur-xl pointer-events-none transform scale-95" />

            {/* Main Human Studio Image Frame */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 group">
              <Image
                src={heroMedia.imageSrc}
                alt={heroMedia.alt}
                fill
                priority
                quality={80}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Soft bottom vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Bottom Badge inside photo */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold px-4 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  {heroMedia.creatorTagline}
                </span>
                <span className="text-[11px] text-white/90 font-mono">2026 Verified</span>
              </div>
            </div>

            {/* Floating Product Card 1: Top Left */}
            {topPicks[0] && (
              <Link
                href={`/tool/${topPicks[0].slug}`}
                className="absolute -top-3 -left-2 sm:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 flex items-center gap-3 hover:scale-105 transition-all duration-300 z-20 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-sm font-black text-amber-600 dark:text-amber-400">
                  {topPicks[0].name.charAt(0)}
                </div>
                <div className="pr-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {topPicks[0].name}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                    <span className="text-amber-500 font-bold">★ {topPicks[0].rating || "4.9"}</span>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{topPicks[0].priceModel || "Freemium"}</span>
                  </div>
                </div>
              </Link>
            )}

            {/* Floating Product Card 2: Bottom Right */}
            {topPicks[1] && (
              <Link
                href={`/tool/${topPicks[1].slug}`}
                className="absolute -bottom-3 -right-2 sm:-right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 flex items-center gap-3 hover:scale-105 transition-all duration-300 z-20 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center text-sm font-black text-purple-600 dark:text-purple-400">
                  {topPicks[1].name.charAt(0)}
                </div>
                <div className="pr-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {topPicks[1].name}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                    <span className="text-amber-500 font-bold">★ {topPicks[1].rating || "4.8"}</span>
                    <span>•</span>
                    <span className="text-primary font-semibold">{topPicks[1].priceModel || "Free"}</span>
                  </div>
                </div>
              </Link>
            )}

            {/* Floating Live Badge: Center Right */}
            {topPicks[2] && (
              <div className="hidden sm:flex absolute top-1/2 -right-4 -translate-y-1/2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-black/5 dark:border-white/10 items-center gap-2 z-20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                  {topPicks[2].name} Trending
                </span>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Full-Width Bottom Trust Feature Strip - Exactly like NovaTrend & Crescendo */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.08] bg-white/70 dark:bg-slate-950/70 backdrop-blur-md py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Independent Testing</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Zero pay-to-rank bias</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Free Tiers Verified</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">No credit card traps</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Weekly Updates</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Curated for 2026</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-rose-500 fill-rose-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">2,400+ User Ratings</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Real community feedback</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
