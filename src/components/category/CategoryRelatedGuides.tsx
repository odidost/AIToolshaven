import React from "react";
import Link from "next/link";
import { ArrowLeftRight, BookOpen, GitFork, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
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
  theme,
}: CategoryRelatedGuidesProps) {
  const resources = getCategoryResourceBundle(categorySlug);

  return (
    <section id="buyer-resources" className="my-16 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Decision Intelligence &amp; Comparisons
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-on-surface tracking-tight">
            {categoryName} Buyer&apos;s Guides, Benchmarks &amp; Workflows
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant mt-1.5 max-w-2xl font-['Figtree',sans-serif]">
            Verified head-to-head comparisons, enterprise feature matrices, and step-by-step production playbooks to select the right stack.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <Link
            href="/compare-tools"
            className="text-xs font-bold text-primary hover:text-primary/80 inline-flex items-center gap-1 group"
          >
            All Comparisons
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <span className="text-border">•</span>
          <Link
            href="/blog"
            className="text-xs font-bold text-primary hover:text-primary/80 inline-flex items-center gap-1 group"
          >
            All Editorial Guides
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Column 1: Head-to-Head Comparisons */}
        <div className="flex flex-col bg-surface border border-border rounded-2xl p-5 shadow-xs hover:border-[rgba(var(--category-accent),0.4)] transition-all duration-300">
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-border/70">
            <div className="p-2 rounded-xl bg-[rgba(var(--category-accent),0.1)] text-[rgb(var(--category-accent))]">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
                Head-to-Head Comparisons
              </h3>
              <p className="text-[11px] text-on-surface-variant font-medium">
                Direct feature &amp; pricing breakdowns
              </p>
            </div>
          </div>

          <div className="space-y-3.5 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              {resources.comparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare-tools/${comp.slug}`}
                  className="group block p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-border/60 hover:border-primary/40 transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[rgb(var(--category-accent))]" />
                      {comp.title}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-surface border border-border text-on-surface-variant">
                      2026 Tested
                    </span>
                  </div>
                  <p className="text-[12px] text-on-surface-variant line-clamp-2 leading-relaxed font-['Figtree',sans-serif]">
                    {comp.description}
                  </p>
                  <div className="mt-2 text-[11px] font-semibold text-primary inline-flex items-center gap-1 group-hover:underline">
                    Compare Specs &amp; Pricing →
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/compare-tools"
              className="mt-4 pt-3 border-t border-border/50 text-[11px] font-bold text-center text-on-surface-variant hover:text-primary transition-colors block"
            >
              Browse all side-by-side comparisons →
            </Link>
          </div>
        </div>

        {/* Column 2: In-Depth Technical & Buyer's Guides */}
        <div className="flex flex-col bg-surface border border-border rounded-2xl p-5 shadow-xs hover:border-[rgba(var(--category-accent),0.4)] transition-all duration-300">
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-border/70">
            <div className="p-2 rounded-xl bg-[rgba(var(--category-accent),0.1)] text-[rgb(var(--category-accent))]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
                Buyer&apos;s Guides &amp; Benchmarks
              </h3>
              <p className="text-[11px] text-on-surface-variant font-medium">
                Tested against real-world production criteria
              </p>
            </div>
          </div>

          <div className="space-y-3.5 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              {resources.guides.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-border/60 hover:border-primary/40 transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                      {article.title}
                    </span>
                    <span className="text-[10px] text-on-surface-variant font-mono shrink-0">
                      {article.readTime}
                    </span>
                  </div>
                  <p className="text-[12px] text-on-surface-variant line-clamp-2 leading-relaxed font-['Figtree',sans-serif]">
                    {article.summary}
                  </p>
                  <div className="mt-2 text-[11px] font-semibold text-primary inline-flex items-center gap-1 group-hover:underline">
                    Read Full Technical Guide →
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-4 pt-3 border-t border-border/50 text-[11px] font-bold text-center text-on-surface-variant hover:text-primary transition-colors block"
            >
              Browse all expert tutorials &amp; benchmarks →
            </Link>
          </div>
        </div>

        {/* Column 3: Multi-App Production Workflows */}
        <div className="flex flex-col bg-surface border border-border rounded-2xl p-5 shadow-xs hover:border-[rgba(var(--category-accent),0.4)] transition-all duration-300">
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-border/70">
            <div className="p-2 rounded-xl bg-[rgba(var(--category-accent),0.1)] text-[rgb(var(--category-accent))]">
              <GitFork className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
                Automated Workflows
              </h3>
              <p className="text-[11px] text-on-surface-variant font-medium">
                Chained tool stacks for maximum ROI
              </p>
            </div>
          </div>

          <div className="space-y-3.5 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              {resources.workflows.map((wf) => (
                <Link
                  key={wf.slug}
                  href={`/workflows/${wf.slug}`}
                  className="group block p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-border/60 hover:border-primary/40 transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {wf.title}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-on-surface-variant">
                      {wf.meta?.steps?.length || 4} Steps
                    </span>
                  </div>
                  <p className="text-[12px] text-on-surface-variant line-clamp-2 leading-relaxed font-['Figtree',sans-serif]">
                    {wf.description}
                  </p>
                  <div className="mt-2 text-[11px] font-semibold text-primary inline-flex items-center gap-1 group-hover:underline">
                    View Complete Blueprint ({wf.meta?.cost || "Free"}) →
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/workflows"
              className="mt-4 pt-3 border-t border-border/50 text-[11px] font-bold text-center text-on-surface-variant hover:text-primary transition-colors block"
            >
              Explore all multi-app playbooks →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
