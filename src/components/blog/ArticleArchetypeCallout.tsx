import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Clock, DollarSign, Award, Layers } from "lucide-react";
import type { ArchetypeCalloutData } from "@/lib/blog-archetypes";

export function ArticleArchetypeCallout({ data }: { data: ArchetypeCalloutData }) {
  const isShootout = data.archetype === "shootout";
  const isBlueprint = data.archetype === "blueprint";

  const borderColor = isShootout
    ? "border-amber-500/30"
    : isBlueprint
    ? "border-cyan-500/30"
    : "border-emerald-500/30";

  const gradientBg = isShootout
    ? "from-amber-500/10 via-orange-500/5 to-transparent"
    : isBlueprint
    ? "from-cyan-500/10 via-blue-500/5 to-transparent"
    : "from-emerald-500/10 via-teal-500/5 to-transparent";

  const badgeColor = isShootout
    ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30"
    : isBlueprint
    ? "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30"
    : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";

  return (
    <div
      className={`rounded-2xl border ${borderColor} bg-gradient-to-br ${gradientBg} bg-surface p-6 sm:p-7 mb-10 shadow-sm relative overflow-hidden`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-border/60">
        <div>
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border mb-2.5 ${badgeColor}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {data.badge}
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
            {data.title}
          </h2>
        </div>

        {/* Quick Action CTAs */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {data.primaryCta && (
            <Link
              href={data.primaryCta.href}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold shadow-xs hover:bg-primary/90 transition-all group"
            >
              {data.primaryCta.label}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
          {data.secondaryCta && (
            <Link
              href={data.secondaryCta.href}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface border border-border text-xs font-semibold text-on-surface hover:bg-muted transition-all"
            >
              {data.secondaryCta.label}
            </Link>
          )}
        </div>
      </div>

      <p className="text-sm sm:text-[15px] text-on-surface-variant leading-relaxed mb-5 font-['Figtree',sans-serif]">
        {data.summary}
      </p>

      {/* 3 Metric Chips */}
      {data.metrics && data.metrics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {data.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-surface-container-low border border-border/50 flex flex-col justify-between gap-1"
            >
              <span className="text-[10px] uppercase font-bold text-on-surface-variant font-mono tracking-wider">
                {metric.label}
              </span>
              <span className="text-sm font-black text-on-surface font-mono">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
