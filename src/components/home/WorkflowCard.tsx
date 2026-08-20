"use client";

import Link from "next/link";
import { useState } from "react";
import { ToolImage } from "@/components/shared/ToolImage";
import type { AITool } from "@/lib/types/tool";
import type { WorkflowStep } from "@/lib/workflows";

interface WorkflowCardProps {
  title: string;
  tools: { name: string; logoUrl?: string; slug?: string; fullTool?: AITool }[];
  icon?: string;
  slug?: string;
  description?: string;
  audience?: string;
  meta?: {
    outcome?: string;
    time?: string;
    skill?: string;
    cost?: string;
    toolsCount?: number;
    steps?: WorkflowStep[];
  };
  color?: string;
}

export function WorkflowCard({
  title,
  tools,
  icon = "account_tree",
  slug,
  description,
  audience,
  meta,
  color = "red",
}: WorkflowCardProps) {
  // Derive color theme matching TrendingStacksHub aesthetics
  const c = color.toLowerCase();
  const theme = 
    c.includes("blue") || c.includes("code") ? {
      gradient: "from-blue-600/10 via-cyan-500/5 to-transparent",
      borderColor: "border-blue-500/20 hover:border-blue-500/50",
      badgeColor: "from-blue-500/20 to-cyan-500/20 text-blue-600 border-blue-500/30",
      iconColor: "text-blue-500"
    } :
    c.includes("purple") || c.includes("pink") ? {
      gradient: "from-purple-600/10 via-pink-500/5 to-transparent",
      borderColor: "border-purple-500/20 hover:border-purple-500/50",
      badgeColor: "from-purple-500/20 to-pink-500/20 text-purple-600 border-purple-500/30",
      iconColor: "text-purple-500"
    } :
    c.includes("emerald") || c.includes("green") ? {
      gradient: "from-emerald-600/10 via-teal-500/5 to-transparent",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/50",
      badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-600 border-emerald-500/30",
      iconColor: "text-emerald-500"
    } :
    c.includes("amber") || c.includes("orange") || c.includes("yellow") ? {
      gradient: "from-amber-600/10 via-orange-500/5 to-transparent",
      borderColor: "border-amber-500/20 hover:border-amber-500/50",
      badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-500/30",
      iconColor: "text-amber-500"
    } : {
      // Default AIToolsHaven Sunset Ember Theme
      gradient: "from-[#FF5F6D]/10 via-[#FF8C69]/5 to-transparent",
      borderColor: "border-[#FF5F6D]/20 hover:border-[#FF5F6D]/50",
      badgeColor: "from-[#FF5F6D]/20 to-[#FFC371]/20 text-[#FF5F6D] border-[#FF5F6D]/30",
      iconColor: "text-primary"
    };

  const badgeText = audience || "VERIFIED BLUEPRINT";
  const displayDesc = description || (meta?.outcome ? meta.outcome : `Step-by-step automated workflow combining ${tools.length} leading AI tools.`);

  return (
    <div 
      className={`relative rounded-3xl bg-gradient-to-b ${theme.gradient} bg-white border ${theme.borderColor} p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full`}
    >
      {/* Top Section */}
      <div>
        {/* Row: Icon Box & Audience/Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">{icon}</span>
          </div>
          <span className={`text-[10.5px] font-black px-3 py-1 rounded-full border bg-gradient-to-r ${theme.badgeColor} tracking-wider uppercase`}>
            {badgeText}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-heading font-black text-gray-900 group-hover:text-primary transition-colors mb-1">
          {title}
        </h3>
        <p className="text-xs font-semibold text-gray-500 mb-3 tracking-tight">
          {tools.map(t => t.name).join(" • ")}
        </p>
        <p className="text-sm font-sans text-gray-600 leading-relaxed mb-6 line-clamp-2">
          {displayDesc}
        </p>

        {/* Pipeline / Sequence of Tools */}
        <div className="mb-6">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2.5">
            Chained Tool Stack:
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {tools.map((tool, idx) => {
              const toolSlug = tool.slug || tool.fullTool?.slug || tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              const isLast = idx === tools.length - 1;

              return (
                <div key={idx} className="flex items-center gap-1.5">
                  <Link
                    href={`/tool/${toolSlug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-primary/10 hover:text-primary px-2.5 py-1.5 rounded-lg border border-black/5 shadow-2xs transition-all hover:scale-105"
                    title={`View ${tool.name}`}
                  >
                    <div className="w-4 h-4 rounded overflow-hidden shrink-0 flex items-center justify-center">
                      <ToolLogo name={tool.name} logoUrl={tool.logoUrl} fullTool={tool.fullTool} />
                    </div>
                    <span>{tool.name}</span>
                  </Link>

                  {!isLast && (
                    <span className="text-gray-300 text-xs font-bold select-none">
                      ➔
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Row: Metadata & Action Button */}
      <div className="pt-4 border-t border-black/5 space-y-3">
        {meta && (
          <div className="flex items-center justify-between text-xs font-medium text-gray-700 bg-white/70 p-2.5 rounded-xl border border-black/5">
            <span className="truncate pr-2 font-semibold">
              ⏱️ {meta.time || "15-30m"} • 🎯 {meta.skill || "All Levels"}
            </span>
            <span className="text-emerald-600 font-bold shrink-0">
              {meta.cost || "Free & Paid"}
            </span>
          </div>
        )}

        {slug ? (
          <Link
            href={`/workflows/${slug}`}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-primary text-white text-xs font-bold transition-all shadow-xs"
          >
            Run Step-by-Step Blueprint
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </Link>
        ) : (
          <div className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gray-100 text-gray-700 text-xs font-bold">
            Verified Blueprint
          </div>
        )}
      </div>
    </div>
  );
}

function ToolLogo({ name, logoUrl, fullTool }: { name: string; logoUrl?: string; fullTool?: AITool }) {
  const [error, setError] = useState(false);
  const safeName = typeof name === 'string' && name.trim().length > 0 ? name.trim() : 'AI';
  const letter = safeName.charAt(0).toUpperCase();

  if (error || (!logoUrl && !fullTool)) {
    const colors = [
      "from-[#FF5F6D] to-[#FF8C69]",
      "from-purple-500 to-indigo-600",
      "from-emerald-400 to-emerald-600",
      "from-amber-400 to-orange-500",
      "from-blue-400 to-cyan-500",
    ];
    const colorIndex = (letter.charCodeAt(0) || 65) % colors.length;
    const gradient = colors[colorIndex] || colors[0];

    return (
      <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center rounded`}>
        <span className="text-[10px] font-black text-white">{letter}</span>
      </div>
    );
  }

  if (fullTool) {
    return (
      <div className="w-full h-full object-cover overflow-hidden">
        <ToolImage tool={fullTool} type="logo" className="w-full h-full object-contain" />
      </div>
    );
  }

  return (
    <img 
      src={logoUrl} 
      alt={safeName} 
      className="w-full h-full object-contain" 
      onError={() => setError(true)} 
    />
  );
}
