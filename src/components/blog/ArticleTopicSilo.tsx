import React from "react";
import Link from "next/link";
import { Folder, Zap, GitFork, ArrowRight, Sparkles } from "lucide-react";
import type { TopicSiloData } from "@/lib/blog-archetypes";

interface ArticleTopicSiloProps {
  data: TopicSiloData;
  variant?: "sidebar" | "footer";
}

export function ArticleTopicSilo({ data, variant = "sidebar" }: ArticleTopicSiloProps) {
  if (variant === "footer") {
    return (
      <div className="my-14 p-7 sm:p-9 md:p-10 rounded-3xl bg-gradient-to-br from-primary/[0.04] via-surface to-primary/[0.02] border border-primary/20 shadow-xs relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-[radial-gradient(circle,rgba(225,29,72,0.06)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-3.5">
              <Sparkles className="w-3.5 h-3.5" />
              Explore the Complete Directory Stack
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-on-surface tracking-tight mb-2.5">
              Ready to build with {data.categoryName}?
            </h3>
            
            <p className="text-base text-on-surface-variant leading-relaxed">
              Compare {data.categoryCountStr} verified tools in the {data.categoryName} Hub, or filter for 100% free allowances with zero credit card traps.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={`/category/${data.categorySlug}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm tracking-wide shadow-xs hover:shadow transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              Browse Category Hub ({data.categoryCountStr})
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={data.freemiumUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface hover:bg-surface-secondary text-on-surface font-semibold text-sm border border-outline hover:border-emerald-500/40 transition-colors shadow-2xs"
            >
              <Zap className="w-4 h-4 text-emerald-500" />
              Freemium Catalog
            </Link>

            {data.workflowSlug && (
              <Link
                href={`/workflows/${data.workflowSlug}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface hover:bg-surface-secondary text-on-surface font-semibold text-sm border border-outline hover:border-primary/40 transition-colors shadow-2xs"
              >
                <GitFork className="w-4 h-4 text-primary" />
                {data.workflowTitle || "Related Playbook"}
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Sidebar widget
  return (
    <div className="bg-surface-container border border-outline rounded-3xl p-6 shadow-xs space-y-4">
      <h3 className="text-xs font-black uppercase tracking-wider text-on-surface flex items-center gap-2">
        <Folder className="w-4 h-4 text-primary" />
        Explore Tools &amp; Workflows
      </h3>

      <div className="space-y-2.5">
        <Link
          href={`/category/${data.categorySlug}`}
          className="group block p-3 rounded-xl bg-surface hover:bg-surface-container-high border border-outline/60 hover:border-primary/40 transition-all"
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5">
              <Folder className="w-3.5 h-3.5 text-primary" />
              {data.categoryName} Hub
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container border border-outline text-on-surface-variant">
              {data.categoryCountStr}
            </span>
          </div>
          <p className="text-[11px] text-on-surface-variant font-['Figtree',sans-serif] line-clamp-1">
            Compare all tools in this domain →
          </p>
        </Link>

        <Link
          href={data.freemiumUrl}
          className="group block p-3 rounded-xl bg-surface hover:bg-surface-container-high border border-outline/60 hover:border-emerald-500/40 transition-all"
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-xs font-bold text-on-surface group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-500" />
              Freemium AI Directory
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
              845+ Free
            </span>
          </div>
          <p className="text-[11px] text-on-surface-variant font-['Figtree',sans-serif] line-clamp-1">
            Zero-credit-card entry points →
          </p>
        </Link>

        {data.workflowSlug && (
          <Link
            href={`/workflows/${data.workflowSlug}`}
            className="group block p-3 rounded-xl bg-surface hover:bg-surface-container-high border border-outline/60 hover:border-primary/40 transition-all"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5">
                <GitFork className="w-3.5 h-3.5 text-primary" />
                Related Workflow
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary font-bold">
                Playbook
              </span>
            </div>
            <p className="text-[11px] text-on-surface-variant font-['Figtree',sans-serif] line-clamp-1">
              {data.workflowTitle || "Multi-app automation"} →
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
