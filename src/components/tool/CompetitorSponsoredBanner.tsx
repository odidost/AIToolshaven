import Link from "next/link";
import Image from "next/image";
import type { AITool } from "@/lib/types/tool";

interface CompetitorSponsoredBannerProps {
  currentTool: AITool;
}

export function CompetitorSponsoredBanner({ currentTool }: CompetitorSponsoredBannerProps) {
  // Only display on rival tools within Logo Generators, never on Design.com itself
  const cat = (currentTool.category || "").toLowerCase();
  const catId = ((currentTool as any).category_id || "").toLowerCase();
  const addCats = Array.isArray(currentTool.additionalCategories)
    ? currentTool.additionalCategories.map((c) => c.toLowerCase())
    : [];
  const tags = Array.isArray(currentTool.tags)
    ? currentTool.tags.map((t) => (typeof t === "string" ? t.toLowerCase() : ""))
    : [];

  const isLogoTool =
    cat === "logo generators" ||
    cat === "logo-generators" ||
    catId === "logo-generators" ||
    catId === "category-1783781229083" ||
    addCats.includes("logo-generators") ||
    addCats.includes("category-1783781229083") ||
    tags.some((t) => t.includes("logo maker") || t.includes("logo generator"));

  if (!isLogoTool || currentTool.slug === "design-com") {
    return null;
  }

  const utmUrl = `https://www.design.com/?utm_source=aitoolshaven&utm_medium=competitor_alternative&utm_campaign=${encodeURIComponent(
    currentTool.slug
  )}_alternative`;

  return (
    <section className="my-12">
      <div className="relative overflow-hidden rounded-[28px] border border-amber-300/80 bg-gradient-to-br from-amber-50/70 via-[#FFFDF8] to-rose-50/40 p-6 sm:p-8 md:p-10 shadow-md">
        {/* Soft background ambient blurs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="relative z-10">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/80 bg-amber-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-950 shadow-2xs">
                <span className="material-symbols-outlined text-[15px] text-amber-700">workspace_premium</span>
                #1 Ranked Alternative
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/80 px-2.5 py-1 text-xs font-medium text-stone-600 shadow-2xs">
                <span className="material-symbols-outlined text-[13px] text-amber-600">diamond</span>
                Featured Sponsor
              </span>
            </div>

            <span className="text-[11px] font-medium text-stone-600">
              FTC Disclosure: Verified Partner Recommendation
            </span>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl border border-black/10 bg-white p-2 shadow-xs">
                  <Image
                    src="/images/tools/design-com-logo.jpg"
                    alt="Design.com Official Logo"
                    fill
                    className="object-contain p-1"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold tracking-tight text-[#0A0A0A]">
                    Looking for a Top Alternative to {currentTool.name}?
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-[#E11D48] flex items-center gap-1.5">
                    <span>Explore Design.com</span>
                    <span className="text-stone-300">•</span>
                    <span className="text-stone-700 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-amber-500 fill-current">star</span>
                      4.9 / 5.0 (340+ verified reviews)
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-stone-700 max-w-3xl">
                While researching <strong className="text-stone-900 font-semibold">{currentTool.name}</strong>, discover why our editorial lab rated <strong className="text-stone-900 font-semibold">Design.com</strong> as the <span className="underline decoration-amber-400 decoration-2 underline-offset-2">#1 Best Overall AI Logo &amp; Brand Maker</span>. It generates over 400,000+ exclusive vector concepts and instantly propagates your logo onto business cards, social headers, and website templates in under 20 minutes.
              </p>

              {/* 3 Key Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 rounded-xl border border-black/5 bg-white/70 px-3 py-2 text-xs font-medium text-stone-800 shadow-2xs">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                  <span>400k+ Exclusive SVG Vectors</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-black/5 bg-white/70 px-3 py-2 text-xs font-medium text-stone-800 shadow-2xs">
                  <span className="material-symbols-outlined text-[16px] text-blue-600">auto_fix_high</span>
                  <span>Instant Multi-Asset Brand Kit</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-black/5 bg-white/70 px-3 py-2 text-xs font-medium text-stone-800 shadow-2xs">
                  <span className="material-symbols-outlined text-[16px] text-amber-600">check_circle</span>
                  <span>100% Free AI Preview</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-64">
              <a
                href={utmUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E11D48] to-rose-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-rose-600/20 transition-all duration-200 hover:from-rose-600 hover:to-rose-700 hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]"
              >
                <span>Try Design.com Free</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>

              <Link
                href="/tool/design-com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-xs font-bold text-stone-800 shadow-2xs transition-all hover:bg-stone-50 hover:border-black/20"
              >
                <span>Read Full Review</span>
                <span className="material-symbols-outlined text-[16px] text-stone-500">article</span>
              </Link>

              <Link
                href={`/compare-tools/${currentTool.slug}-vs-design-com`}
                className="inline-flex items-center justify-center gap-1.5 text-center text-xs font-medium text-stone-600 hover:text-[#E11D48] transition-colors py-1"
              >
                <span>Compare {currentTool.name} vs Design.com</span>
                <span className="material-symbols-outlined text-[14px]">compare_arrows</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
