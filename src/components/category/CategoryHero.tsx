"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Layers, 
  Users, 
  ArrowDown, 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  Award,
  Lock,
  Flame
} from "lucide-react";
import { CategoryHeroVisual } from "./CategoryHeroVisual";
import type { ToolCategory } from "@/lib/types/category";
import type { CategoryTheme } from "@/lib/data/categoryThemes";
import type { AITool } from "@/lib/types/tool";

interface CategoryHeroProps {
  category: ToolCategory;
  categoryTools: AITool[];
  theme: CategoryTheme;
  hasGuide?: boolean;
}

export function CategoryHero({
  category,
  categoryTools,
  theme,
  hasGuide = true,
}: CategoryHeroProps) {
  // Dynamic stats calculation
  const totalReviews = categoryTools.reduce((acc, tool) => acc + (tool.reviewCount || 0), 0);
  const avgRating = categoryTools.length 
    ? (categoryTools.reduce((acc, tool) => acc + (tool.rating || 0), 0) / categoryTools.length).toFixed(1) 
    : "4.9";
  const verifiedCount = categoryTools.filter(t => t.verified).length || categoryTools.length;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative rounded-[2rem] md:rounded-[2.5rem] bg-slate-950 overflow-hidden border border-[#FF5F6D]/25 shadow-2xl shadow-[#FF5F6D]/10 mb-10 text-white">
      
      {/* Background Watermark Typography */}
      <div className="absolute top-4 right-6 select-none pointer-events-none overflow-hidden opacity-[0.025] dark:opacity-[0.035] leading-none font-mono font-black text-6xl md:text-8xl tracking-[0.2em] text-white uppercase whitespace-nowrap z-0">
        {category.name}
      </div>

      {/* AIToolsHaven Brand Ambient Glowing Orbs & Background Gradients */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0 pointer-events-none" 
        style={{
          background: `radial-gradient(circle at 85% 15%, rgba(255, 95, 109, 0.25) 0%, transparent 55%), radial-gradient(circle at 15% 85%, rgba(255, 195, 113, 0.18) 0%, transparent 50%), linear-gradient(135deg, #090d16 0%, #030712 100%)`
        }}
      />
      <div 
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[120px] opacity-40 pointer-events-none bg-gradient-to-br from-[#FF5F6D] to-[#FFC371]"
      />
      <div 
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-[120px] opacity-30 pointer-events-none bg-gradient-to-tr from-[#FF5F6D] to-[#FF8C69]"
      />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0 pointer-events-none" />

      <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between">
        
        {/* Left Column: Category Identity, Compact Styled Headline & Value Ribbons */}
        <div className="max-w-2xl space-y-4 text-left">
          
          {/* Top Kicker & Glowing Pill Badge */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF5F6D]/20 via-[#FF8C69]/15 to-[#FFC371]/20 border border-[#FF5F6D]/40 backdrop-blur-md shadow-md shadow-[#FF5F6D]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC371] shrink-0" />
              <span className="text-xs font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-[#FFC371]">
                2026 Verified Directory
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-mono font-medium">
              <Flame className="w-3 h-3 text-[#FF5F6D]" />
              <span>{categoryTools.length} Curated Tools</span>
            </div>
          </div>

          {/* Stylized Multilevel Headline (Reduced Size) */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FFC371] flex items-center gap-1.5">
              <span className="w-1.5 h-0.5 bg-[#FF5F6D] rounded-full inline-block" />
              Industry Standard Comparison
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.12]">
              The Best{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] via-[#FF8C69] to-[#FFC371] drop-shadow-[0_2px_10px_rgba(255,95,109,0.3)]">
                {category.name}
              </span>{" "}
              <span className="text-white">AI Tools for 2026</span>
            </h1>
          </div>

          {/* Rich Editorial Body Paragraph (Compact Figtree) */}
          <p className="font-['Figtree',sans-serif] text-sm sm:text-[15px] text-slate-300 font-normal leading-relaxed max-w-xl">
            {theme.heroDescription ? (
              <span>
                {theme.heroDescription.split(". ")[0]}.{" "}
                <span className="text-white font-medium">
                  {theme.heroDescription.split(". ").slice(1).join(". ")}
                </span>
              </span>
            ) : (
              <span>
                Discover, compare, and choose top-tier <strong className="text-white font-semibold">{category.name}</strong> software. Evaluated with <span className="text-[#FFC371] font-semibold">human-tested benchmarks</span> and verified pricing.
              </span>
            )}
          </p>

          {/* Micro Feature Ribbons (Value Badges) */}
          <div className="flex flex-wrap gap-2 pt-0.5">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-200">
              <Zap className="w-3 h-3 text-[#FF8C69]" />
              <span>Instant Pricing</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-200">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Zero-Spam Vetted</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-200">
              <Award className="w-3 h-3 text-[#FFC371]" />
              <span>Expert Verdicts</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-200">
              <Lock className="w-3 h-3 text-cyan-400" />
              <span>Enterprise Ready</span>
            </div>
          </div>

          {/* Action CTAs & Jump Links (Compact) */}
          <div className="pt-1.5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection("tools-grid")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5F6D] via-[#FF7A6E] to-[#FF8C69] hover:from-[#FF4858] hover:to-[#FF7850] text-white font-black text-xs tracking-wide uppercase shadow-lg shadow-[#FF5F6D]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
              <span>Explore {categoryTools.length || "All"} Tools</span>
              <ArrowDown className="w-3.5 h-3.5 text-white/90" />
            </button>

            {hasGuide && (
              <button
                onClick={() => scrollToSection("category-guide")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs border border-white/20 hover:border-[#FF5F6D]/50 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#FFC371]" />
                <span>Read In-Depth Guide</span>
              </button>
            )}
          </div>

          {/* Editorial Meta Bar */}
          <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px] font-medium text-slate-400 border-t border-white/10">
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Human-Curated
            </span>
            <span className="text-white/20">•</span>
            <span>Updated August 2026</span>
            <span className="text-white/20">•</span>
            <span>Free &amp; Commercial</span>
          </div>

        </div>

        {/* Right Column: Visual Diagram + High-End Live Telemetry HUD (Best Fit) */}
        <div className="w-full lg:w-80 shrink-0 flex flex-col gap-3">
          {/* Domain-Specific Visual Diagram */}
          <CategoryHeroVisual slug={category.slug} categoryName={category.name} />

          {/* High-End Live Telemetry HUD */}
          <div className="w-full bg-slate-950/85 backdrop-blur-2xl rounded-2xl border border-white/15 p-3.5 shadow-xl space-y-2.5 hover:border-[#FF5F6D]/40 transition-all duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="text-[10px] uppercase font-black tracking-widest text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF5F6D] animate-pulse" />
                Live Telemetry
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#FF5F6D]/15 text-[#FF8C69] border border-[#FF5F6D]/30 text-[10px] font-mono font-bold">
                Active Index
              </span>
            </div>

            {/* 2x2 Telemetry Metric Cards */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5 hover:bg-white/10 transition-colors">
                <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[#FF8C69]" /> Listed
                </div>
                <div className="text-xl font-black text-white font-mono tracking-tight">
                  {categoryTools.length}
                </div>
                <div className="text-[9px] text-slate-400 font-['Figtree',sans-serif]">Indexed tools</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5 hover:bg-white/10 transition-colors">
                <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Users className="w-3 h-3 text-[#FFC371]" /> Reviews
                </div>
                <div className="text-xl font-black text-white font-mono tracking-tight">
                  {totalReviews > 0 ? `${totalReviews.toLocaleString()}+` : "2,400+"}
                </div>
                <div className="text-[9px] text-slate-400 font-['Figtree',sans-serif]">Verified ratings</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5 hover:bg-white/10 transition-colors">
                <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> Avg Score
                </div>
                <div className="text-xl font-black text-amber-300 font-mono tracking-tight">
                  {avgRating}
                </div>
                <div className="text-[9px] text-slate-400 font-['Figtree',sans-serif]">Out of 5.0</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5 hover:bg-white/10 transition-colors">
                <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified
                </div>
                <div className="text-xl font-black text-emerald-400 font-mono tracking-tight">
                  {verifiedCount}
                </div>
                <div className="text-[9px] text-slate-400 font-['Figtree',sans-serif]">Quality tested</div>
              </div>
            </div>

            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>Security: <strong>SOC2 &amp; TLS</strong></span>
              <span className="text-emerald-400 font-bold">100% Monitored</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
