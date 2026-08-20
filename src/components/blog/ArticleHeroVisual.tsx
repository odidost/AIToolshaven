import React from "react";
import type { AITool } from "@/lib/types/tool";

interface ArticleHeroVisualProps {
  title: string;
  category: string;
  tools?: AITool[];
}

export function ArticleHeroVisual({ title, category, tools = [] }: ArticleHeroVisualProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-outline/70 bg-gradient-to-br from-white via-slate-50 to-primary/5 p-6 sm:p-10 shadow-sm mb-8">
      {/* Background Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Pill & Watermark */}
      <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-white/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-slate-200 shadow-sm">
            {category} Deep Dive • 2026 Edition
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 text-xs font-black tracking-wider text-slate-400 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          aitoolshaven.com
        </div>
      </div>

      {/* Hero Title Typography inside Graphic */}
      <div className="relative z-10 max-w-2xl mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          {title}
        </h2>
      </div>

      {/* Verified Tools Pill Dock */}
      {tools && tools.length > 0 && (
        <div className="relative z-10 pt-4 border-t border-slate-200/80">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Verified Stack & Benchmarks:
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {tools.slice(0, 5).map((tool) => (
              <div 
                key={tool.slug}
                className="flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs"
              >
                {tool.logoUrl ? (
                  <img src={tool.logoUrl} alt={tool.name} className="w-4 h-4 rounded-md object-contain" />
                ) : (
                  <span className="w-4 h-4 rounded-md bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    {tool.name[0]}
                  </span>
                )}
                <span className="text-xs font-bold text-slate-800">{tool.name}</span>
                {tool.rating && (
                  <span className="text-[11px] font-semibold text-amber-500 flex items-center">
                    ★ {tool.rating.toFixed(1)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
