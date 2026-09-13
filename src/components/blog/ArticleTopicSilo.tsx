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
      <div className="my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white border border-white/10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5F6D]/20 text-[#FFC371] border border-[#FF5F6D]/40 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Explore the Complete Directory Stack
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
              Ready to build with {data.categoryName}?
            </h3>
            <p className="text-sm text-slate-300 font-['Figtree',sans-serif] leading-relaxed">
              Compare {data.categoryCountStr} verified tools in the {data.categoryName} Hub, or filter for 100% free allowances with zero credit card traps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href={`/category/${data.categorySlug}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5F6D] to-[#FF8C69] hover:from-[#FF4858] hover:to-[#FF7850] text-white font-bold text-xs uppercase tracking-wide shadow-md shadow-[#FF5F6D]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Browse Category Hub ({data.categoryCountStr})
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href={data.freemiumUrl}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              Freemium Catalog
            </Link>
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
        Topic Cluster &amp; Directory
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
