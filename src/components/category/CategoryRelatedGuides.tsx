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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-[#E5E7EB] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[16px] text-[#E11D48]">compare_arrows</span>
            <span>Decision Intelligence &amp; Comparisons</span>
          </div>
          <h2 className="font-heading font-black text-2xl md:text-3xl text-[#0A0A0A] tracking-tight">
            {categoryName}{" "}Buyer&apos;s Guides, Benchmarks &amp; Workflows
          </h2>
          <p className="font-sans text-sm md:text-base text-[#4B5563] mt-1.5 max-w-2xl font-normal leading-relaxed">
            Verified head-to-head comparisons, enterprise feature matrices, and step-by-step production playbooks to select the right stack.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <Link
            href="/compare-tools"
            className="text-xs font-medium text-[#E11D48] hover:underline inline-flex items-center gap-1 group"
          >
            All Comparisons
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <span className="text-[#E5E7EB]">•</span>
          <Link
            href="/blog"
            className="text-xs font-medium text-[#E11D48] hover:underline inline-flex items-center gap-1 group"
          >
            All Editorial Guides
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Column 1: Head-to-Head Comparisons */}
        <div className="flex flex-col bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-xs hover:border-[#E11D48]/40 transition-colors">
          <div className="flex items-center gap-2.5 pb-3.5 mb-3.5 border-b border-[#E5E7EB]">
            <div className="p-1.5 rounded-md bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3]">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider">
                Head-to-Head Comparisons
              </h3>
              <p className="text-[11px] text-[#6B7280]">
                Direct feature &amp; pricing breakdowns
              </p>
            </div>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-2.5">
              {resources.comparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare-tools/${comp.slug}`}
                  className="group block p-3 rounded-md bg-[#F9FAFB] hover:bg-white border border-[#E5E7EB] hover:border-[#E11D48] transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                      {comp.title}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-white border border-[#E5E7EB] text-[#6B7280]">
                      2026 Tested
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4B5563] line-clamp-2 leading-relaxed">
                    {comp.description}
                  </p>
                  <div className="mt-1.5 text-[11px] font-medium text-[#E11D48] inline-flex items-center gap-1 group-hover:underline">
                    Compare Specs &amp; Pricing →
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/compare-tools"
              className="mt-3 pt-2.5 border-t border-[#E5E7EB] text-[11px] font-medium text-center text-[#4B5563] hover:text-[#E11D48] transition-colors block"
            >
              Browse all side-by-side comparisons →
            </Link>
          </div>
        </div>

        {/* Column 2: In-Depth Technical & Buyer's Guides */}
        <div className="flex flex-col bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-xs hover:border-[#E11D48]/40 transition-colors">
          <div className="flex items-center gap-2.5 pb-3.5 mb-3.5 border-b border-[#E5E7EB]">
            <div className="p-1.5 rounded-md bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider">
                Buyer&apos;s Guides &amp; Benchmarks
              </h3>
              <p className="text-[11px] text-[#6B7280]">
                Tested against real-world criteria
              </p>
            </div>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-2.5">
              {resources.guides.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block p-3 rounded-md bg-[#F9FAFB] hover:bg-white border border-[#E5E7EB] hover:border-[#E11D48] transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors line-clamp-1">
                      {article.title}
                    </span>
                    <span className="text-[10px] text-[#6B7280] font-mono shrink-0">
                      {article.readTime}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4B5563] line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="mt-1.5 text-[11px] font-medium text-[#E11D48] inline-flex items-center gap-1 group-hover:underline">
                    Read Full Technical Guide →
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-3 pt-2.5 border-t border-[#E5E7EB] text-[11px] font-medium text-center text-[#4B5563] hover:text-[#E11D48] transition-colors block"
            >
              Browse all expert tutorials &amp; benchmarks →
            </Link>
          </div>
        </div>

        {/* Column 3: Multi-App Production Workflows */}
        <div className="flex flex-col bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-xs hover:border-[#E11D48]/40 transition-colors">
          <div className="flex items-center gap-2.5 pb-3.5 mb-3.5 border-b border-[#E5E7EB]">
            <div className="p-1.5 rounded-md bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3]">
              <GitFork className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider">
                Automated Workflows
              </h3>
              <p className="text-[11px] text-[#6B7280]">
                Chained tool stacks for maximum ROI
              </p>
            </div>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-2.5">
              {resources.workflows.map((wf) => (
                <Link
                  key={wf.slug}
                  href={`/workflows/${wf.slug}`}
                  className="group block p-3 rounded-md bg-[#F9FAFB] hover:bg-white border border-[#E5E7EB] hover:border-[#E11D48] transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {wf.title}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-white border border-[#E5E7EB] text-[#6B7280]">
                      {wf.meta?.steps?.length || 4} Steps
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4B5563] line-clamp-2 leading-relaxed">
                    {wf.description}
                  </p>
                  <div className="mt-1.5 text-[11px] font-medium text-[#E11D48] inline-flex items-center gap-1 group-hover:underline">
                    View Complete Blueprint ({wf.meta?.cost || "Free"}) →
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/workflows"
              className="mt-3 pt-2.5 border-t border-[#E5E7EB] text-[11px] font-medium text-center text-[#4B5563] hover:text-[#E11D48] transition-colors block"
            >
              Explore all multi-app playbooks →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
