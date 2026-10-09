"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowDown, 
  BookOpen, 
  ArrowRight,
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
  const topPicks = categoryTools.slice(0, 3);
  const heroMedia = getCategoryHeroMedia(category.slug, category.name);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAF8] border-b border-black/[0.08]">
      {/* Background organic blurred bokeh blooms */}
      <div className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-[#FED7AA]/35 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#FDA4AF]/25 blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pb-16 lg:pb-16 relative z-10">
        
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

        {/* Commercial Grid: Left Editorial / Right Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Commercial Editorial Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Top Trending Pill Kicker */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.07] bg-white text-xs font-semibold text-[#44403C] shadow-2xs">
                <span className="material-symbols-outlined text-[16px] text-[#E11D48]">auto_awesome</span>
                <span>2026 Curated Collection</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.07] bg-white text-xs font-semibold text-[#44403C] shadow-2xs">
                <span className="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                <span>{categoryTools.length} Hand-Vetted Tools</span>
              </div>
            </div>

            {/* Headline: Authoritative Category Title */}
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight leading-[1.14]">
                {category.slug === "coding-assistants" ? (
                  <>
                    Best{" "}
                    <span className="bg-[#FFF1F2] text-[#E11D48] px-2.5 py-0.5 rounded-xl border border-[#FECDD3] inline-block shadow-2xs">
                      AI Coding Assistants
                    </span>
                    : IDEs, Autonomous Agents &amp; Code Completion
                  </>
                ) : category.slug === "productivity" ? (
                  <>
                    Best{" "}
                    <span className="bg-[#FFF1F2] text-[#E11D48] px-2.5 py-0.5 rounded-xl border border-[#FECDD3] inline-block shadow-2xs">
                      AI Productivity Tools
                    </span>{" "}
                    for 2026: Workspaces &amp; Notes
                  </>
                ) : category.slug === "ai-video-generators" ? (
                  <>
                    Best{" "}
                    <span className="bg-[#FFF1F2] text-[#E11D48] px-2.5 py-0.5 rounded-xl border border-[#FECDD3] inline-block shadow-2xs">
                      AI Video Generators
                    </span>{" "}
                    for 2026: Text-to-Video &amp; VFX
                  </>
                ) : category.slug === "ai-presentation-makers" ? (
                  <>
                    Best{" "}
                    <span className="bg-[#FFF1F2] text-[#E11D48] px-2.5 py-0.5 rounded-xl border border-[#FECDD3] inline-block shadow-2xs">
                      AI Presentation Makers
                    </span>{" "}
                    for 2026: Pitch Decks
                  </>
                ) : category.slug === "marketing-sales" ? (
                  <>
                    Best{" "}
                    <span className="bg-[#FFF1F2] text-[#E11D48] px-2.5 py-0.5 rounded-xl border border-[#FECDD3] inline-block shadow-2xs">
                      AI Marketing &amp; Sales Tools
                    </span>{" "}
                    for 2026
                  </>
                ) : category.slug === "ai-image-generators" ? (
                  <>
                    Best{" "}
                    <span className="bg-[#FFF1F2] text-[#E11D48] px-2.5 py-0.5 rounded-xl border border-[#FECDD3] inline-block shadow-2xs">
                      AI Image Generators
                    </span>{" "}
                    for 2026: Photorealism &amp; Art
                  </>
                ) : (
                  <>
                    The Best{" "}
                    <span className="bg-[#FFF1F2] text-[#E11D48] px-2.5 py-0.5 rounded-xl border border-[#FECDD3] inline-block shadow-2xs">
                      {category.name}
                    </span>{" "}
                    <span>
                      {/^ai\b/i.test(category.name) || /(?:tools|generators|assistants|chatbots|agents|makers|builders)$/i.test(category.name) ? "for 2026" : "AI Tools for 2026"}
                    </span>
                  </>
                )}
              </h1>
            </div>

            {/* Friendly Editorial Subheading */}
            <p className="font-serif text-base sm:text-lg text-[#57534E] max-w-xl font-normal leading-[1.65]">
              {theme.heroDescription || `Hand-tested ${category.name} software curated for modern creators, founders, and teams. Compare verified pricing, free allowances, and real community ratings.`}
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection("tools-grid")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore All {categoryTools.length || ""} Tools</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection("buyer-resources")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FFF1F2] text-[#0A0A0A] hover:text-[#E11D48] font-bold text-sm border border-black/[0.08] hover:border-[#FECDD3] transition-all shadow-2xs hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <ArrowDown className="w-4 h-4 text-[#E11D48]" />
                <span>Compare Top Picks</span>
              </button>

              {hasGuide && (
                <button
                  onClick={() => scrollToSection("category-guide")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FFF1F2] text-[#57534E] hover:text-[#E11D48] font-medium text-sm border border-black/[0.08] hover:border-[#FECDD3] transition-all shadow-2xs cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#6B7280]" />
                  <span>Buyer&apos;s Guide</span>
                </button>
              )}
            </div>

            {/* Social Proof Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-1.5 overflow-hidden">
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center text-[10px] font-bold border border-[#FECDD3] shadow-2xs">
                  EK
                </div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-[#F0FDF4] text-emerald-700 flex items-center justify-center text-[10px] font-bold border border-emerald-200 shadow-2xs">
                  SM
                </div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-[#EFF6FF] text-blue-700 flex items-center justify-center text-[10px] font-bold border border-blue-200 shadow-2xs">
                  AR
                </div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-[#FAF5FF] text-purple-700 flex items-center justify-center text-[10px] font-bold border border-purple-200 shadow-2xs">
                  JD
                </div>
              </div>
              <div className="text-xs font-serif text-[#57534E]">
                <span className="text-amber-500 font-bold font-mono">★ 4.9</span> rating • Loved by <strong className="text-[#0A0A0A] font-semibold">25,000+ creators &amp; founders</strong>
              </div>
            </div>

          </div>

          {/* Right Column: Restrained Showcase with Clean Flat Product Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-4">
            
            {/* Main Human Studio Image Frame */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-black/[0.08] bg-[#F9F9F6] shadow-[0_8px_30px_rgba(0,0,0,0.06)] group">
              <Image
                src={heroMedia.imageSrc}
                alt={heroMedia.alt}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
              />
              
              {/* Soft bottom vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Badge inside photo */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium px-3.5 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20">
                <span className="flex items-center gap-1.5 truncate">
                  <span className="material-symbols-outlined text-[15px] text-amber-300">auto_awesome</span>
                  <span className="truncate">{heroMedia.creatorTagline}</span>
                </span>
                <span className="text-[10px] text-white/90 font-mono shrink-0 ml-2">2026 Verified</span>
              </div>
            </div>

            {/* Floating Product Card 1: Top Left */}
            {topPicks[0] && (
              <Link
                href={`/tool/${topPicks[0].slug}`}
                className="absolute -top-3 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/[0.08] hover:border-[#E11D48]/40 hover:scale-[1.03] flex items-center gap-2.5 transition-all z-20 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FFF1F2] border border-[#FECDD3] flex items-center justify-center text-xs font-bold text-[#E11D48]">
                  {topPicks[0].name.charAt(0)}
                </div>
                <div className="pr-1">
                  <div className="text-xs font-semibold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors truncate max-w-[120px]">
                    {topPicks[0].name}
                  </div>
                  <div className="text-[10px] text-[#6B7280] flex items-center gap-1 font-medium font-mono">
                    <span className="text-amber-500">★ {topPicks[0].rating || "4.9"}</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-semibold">{topPicks[0].priceModel || "Freemium"}</span>
                  </div>
                </div>
              </Link>
            )}

            {/* Floating Product Card 2: Bottom Right */}
            {topPicks[1] && (
              <Link
                href={`/tool/${topPicks[1].slug}`}
                className="absolute -bottom-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/[0.08] hover:border-[#E11D48]/40 hover:scale-[1.03] flex items-center gap-2.5 transition-all z-20 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-xs font-bold text-blue-700">
                  {topPicks[1].name.charAt(0)}
                </div>
                <div className="pr-1">
                  <div className="text-xs font-semibold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors truncate max-w-[120px]">
                    {topPicks[1].name}
                  </div>
                  <div className="text-[10px] text-[#6B7280] flex items-center gap-1 font-medium font-mono">
                    <span className="text-amber-500">★ {topPicks[1].rating || "4.8"}</span>
                    <span>•</span>
                    <span className="text-[#E11D48] font-semibold">{topPicks[1].priceModel || "Free"}</span>
                  </div>
                </div>
              </Link>
            )}

            {/* Floating Live Badge: Center Right */}
            {topPicks[2] && (
              <div className="hidden sm:flex absolute top-1/2 -right-3 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/[0.08] items-center gap-1.5 z-20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium text-[#0A0A0A]">
                  {topPicks[2].name} Trending
                </span>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Full-Width Bottom Trust Feature Strip with Harmonized Brand Styling */}
      <div className="border-t border-black/[0.07] bg-[#F9F9F6] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] shadow-2xs flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[17px] text-[#E11D48]">verified_user</span>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0A0A0A]">Independent Testing</div>
              <div className="text-[11px] font-serif text-[#78716C]">Zero pay-to-rank bias</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] shadow-2xs flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[17px] text-[#E11D48]">check_circle</span>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0A0A0A]">Free Tiers Verified</div>
              <div className="text-[11px] font-serif text-[#78716C]">No credit card traps</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] shadow-2xs flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[17px] text-[#E11D48]">update</span>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0A0A0A]">Weekly Updates</div>
              <div className="text-[11px] font-serif text-[#78716C]">Curated for 2026</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] shadow-2xs flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[17px] text-[#E11D48]">star</span>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0A0A0A]">2,400+ User Ratings</div>
              <div className="text-[11px] font-serif text-[#78716C]">Real community feedback</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
