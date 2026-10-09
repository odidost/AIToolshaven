import React from "react";
import Link from "next/link";
import { ArrowLeftRight, BookOpen, GitFork, ArrowRight } from "lucide-react";
import { getCategoryResourceBundle } from "@/lib/category-resources";
import type { CategoryTheme } from "@/lib/data/categoryThemes";

interface CategoryRelatedGuidesProps {
  categorySlug: string;
  categoryName: string;
  theme: CategoryTheme;
}

export function CategoryRelatedGuides({
  categorySlug,
  categoryName,
}: CategoryRelatedGuidesProps) {
  const resources = getCategoryResourceBundle(categorySlug);

  return (
    <section id="buyer-resources" className="my-14 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-black/[0.07] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.07] bg-white text-xs font-semibold text-[#44403C] shadow-2xs mb-3">
            <span className="material-symbols-outlined text-[16px] text-[#E11D48]">compare_arrows</span>
            <span>Decision Intelligence &amp; Comparisons</span>
          </div>
          <h2 className="font-heading font-black text-2xl md:text-3xl text-[#0A0A0A] tracking-tight">
            {categoryName} Buyer&apos;s Guides, Benchmarks &amp; Workflows
          </h2>
          <p className="font-serif text-sm md:text-base text-[#57534E] mt-1.5 max-w-2xl font-normal leading-relaxed">
            Verified head-to-head comparisons, feature matrices, and step-by-step production playbooks to select the right stack.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <Link
            href="/compare-tools"
            className="text-xs font-semibold text-[#E11D48] hover:text-[#BE123C] inline-flex items-center gap-1 group hover:underline underline-offset-4"
          >
            <span>All Comparisons</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <span className="text-black/20">•</span>
          <Link
            href="/blog"
            className="text-xs font-semibold text-[#E11D48] hover:text-[#BE123C] inline-flex items-center gap-1 group hover:underline underline-offset-4"
          >
            <span>All Editorial Guides</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1: Head-to-Head Comparisons */}
        <div className="relative flex flex-col bg-[#F9F9F6] border border-black/[0.08] rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-2xs hover:shadow-xs transition-all overflow-hidden group/col">
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#FDA4AF]/20 blur-2xl pointer-events-none" />

          <div className="flex items-center gap-3 pb-4 mb-4 border-b border-black/[0.06] relative z-10">
            <div className="w-9 h-9 rounded-xl bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3] flex items-center justify-center shadow-2xs shrink-0">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold font-heading text-[#0A0A0A] uppercase tracking-wider">
                Head-to-Head Comparisons
              </h3>
              <p className="text-[11px] font-serif text-[#78716C]">
                Direct feature &amp; pricing breakdowns
              </p>
            </div>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-between relative z-10">
            <div className="space-y-2.5">
              {resources.comparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare-tools/${comp.slug}`}
                  className="group/card block p-3.5 rounded-xl bg-white border border-black/[0.06] hover:border-[#E11D48]/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-[#0A0A0A] group-hover/card:text-[#E11D48] transition-colors flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shrink-0" />
                      <span className="truncate">{comp.title}</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F9F9F6] border border-black/[0.05] text-[#78716C] shrink-0">
                      2026 Tested
                    </span>
                  </div>
                  <p className="font-serif text-[11.5px] text-[#57534E] line-clamp-2 leading-relaxed">
                    {comp.description}
                  </p>
                  <div className="mt-2 text-[11px] font-semibold text-[#E11D48] inline-flex items-center gap-1 group-hover/card:underline">
                    Compare Specs &amp; Pricing →
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/compare-tools"
              className="mt-3 pt-3 border-t border-black/[0.06] text-xs font-serif font-medium text-center text-[#78716C] hover:text-[#E11D48] transition-colors block"
            >
              Browse all side-by-side comparisons →
            </Link>
          </div>
        </div>

        {/* Column 2: In-Depth Technical & Buyer's Guides */}
        <div className="relative flex flex-col bg-[#F9F9F6] border border-black/[0.08] rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-2xs hover:shadow-xs transition-all overflow-hidden group/col">
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#FED7AA]/25 blur-2xl pointer-events-none" />

          <div className="flex items-center gap-3 pb-4 mb-4 border-b border-black/[0.06] relative z-10">
            <div className="w-9 h-9 rounded-xl bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3] flex items-center justify-center shadow-2xs shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold font-heading text-[#0A0A0A] uppercase tracking-wider">
                Buyer&apos;s Guides &amp; Benchmarks
              </h3>
              <p className="text-[11px] font-serif text-[#78716C]">
                Tested against real-world criteria
              </p>
            </div>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-between relative z-10">
            <div className="space-y-2.5">
              {resources.guides.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group/card block p-3.5 rounded-xl bg-white border border-black/[0.06] hover:border-[#E11D48]/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-[#0A0A0A] group-hover/card:text-[#E11D48] transition-colors line-clamp-1">
                      {article.title}
                    </span>
                    <span className="text-[10px] text-[#78716C] font-mono shrink-0 px-2 py-0.5 rounded-full bg-[#F9F9F6] border border-black/[0.05]">
                      {article.readTime}
                    </span>
                  </div>
                  <p className="font-serif text-[11.5px] text-[#57534E] line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="mt-2 text-[11px] font-semibold text-[#E11D48] inline-flex items-center gap-1 group-hover/card:underline">
                    Read Full Technical Guide →
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-3 pt-3 border-t border-black/[0.06] text-xs font-serif font-medium text-center text-[#78716C] hover:text-[#E11D48] transition-colors block"
            >
              Browse all expert tutorials &amp; benchmarks →
            </Link>
          </div>
        </div>

        {/* Column 3: Multi-App Production Workflows */}
        <div className="relative flex flex-col bg-[#F9F9F6] border border-black/[0.08] rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-2xs hover:shadow-xs transition-all overflow-hidden group/col">
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#D9F99D]/20 blur-2xl pointer-events-none" />

          <div className="flex items-center gap-3 pb-4 mb-4 border-b border-black/[0.06] relative z-10">
            <div className="w-9 h-9 rounded-xl bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3] flex items-center justify-center shadow-2xs shrink-0">
              <GitFork className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold font-heading text-[#0A0A0A] uppercase tracking-wider">
                Automated Workflows
              </h3>
              <p className="text-[11px] font-serif text-[#78716C]">
                Chained tool stacks for maximum ROI
              </p>
            </div>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-between relative z-10">
            <div className="space-y-2.5">
              {resources.workflows.map((wf) => (
                <Link
                  key={wf.slug}
                  href={`/workflows/${wf.slug}`}
                  className="group/card block p-3.5 rounded-xl bg-white border border-black/[0.06] hover:border-[#E11D48]/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-[#0A0A0A] group-hover/card:text-[#E11D48] transition-colors flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="truncate">{wf.title}</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F9F9F6] border border-black/[0.05] text-[#78716C] shrink-0">
                      {wf.meta?.steps?.length || 4} Steps
                    </span>
                  </div>
                  <p className="font-serif text-[11.5px] text-[#57534E] line-clamp-2 leading-relaxed">
                    {wf.description}
                  </p>
                  <div className="mt-2 text-[11px] font-semibold text-[#E11D48] inline-flex items-center gap-1 group-hover/card:underline">
                    View Complete Blueprint ({wf.meta?.cost || "Free"}) →
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/workflows"
              className="mt-3 pt-3 border-t border-black/[0.06] text-xs font-serif font-medium text-center text-[#78716C] hover:text-[#E11D48] transition-colors block"
            >
              Explore all multi-app playbooks →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
