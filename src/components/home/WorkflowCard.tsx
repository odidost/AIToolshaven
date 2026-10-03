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
      className="rounded-lg bg-white border border-[#E5E7EB] p-5 sm:p-6 hover:border-gray-300 transition-colors flex flex-col justify-between group shadow-none h-full"
    >
      {/* Top Section */}
      <div>
        {/* Row: Icon Box & Audience/Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-9 h-9 rounded-md bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#0A0A0A] group-hover:text-[#E11D48] group-hover:border-[#E11D48]/40 transition-colors">
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>
          <span className="text-[11px] font-mono text-[#4B5563] bg-[#F9FAFB] border border-[#E5E7EB] px-2 py-0.5 rounded-md uppercase">
            {badgeText}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-base sm:text-lg font-heading font-bold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors mb-1">
          {title}
        </h3>
        <p className="text-xs text-[#4B5563] mb-3">
          {tools.map(t => t.name).join(" • ")}
        </p>
        <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-5 line-clamp-2">
          {displayDesc}
        </p>

        {/* Pipeline / Sequence of Tools */}
        <div className="mb-5">
          <span className="text-[11px] font-semibold text-[#4B5563] uppercase tracking-wider block mb-2">
            Tool stack:
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {tools.map((tool, idx) => {
              const toolSlug = tool.slug || tool.fullTool?.slug || tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              const isLast = idx === tools.length - 1;

              return (
                <div key={idx} className="flex items-center gap-1.5">
                  <Link
                    href={`/tool/${toolSlug}`}
                    prefetch={false}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#F9FAFB] hover:bg-white hover:border-[#E11D48] hover:text-[#E11D48] text-[#0A0A0A] px-2 py-1 rounded-md border border-[#E5E7EB] transition-colors"
                    title={`View ${tool.name}`}
                  >
                    <div className="w-3.5 h-3.5 rounded overflow-hidden shrink-0 flex items-center justify-center">
                      <ToolLogo name={tool.name} logoUrl={tool.logoUrl} fullTool={tool.fullTool} />
                    </div>
                    <span>{tool.name}</span>
                  </Link>

                  {!isLast && (
                    <span className="text-gray-300 text-xs select-none">
                      &rarr;
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Row: Metadata & Action Button */}
      <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
        {meta && (
          <div className="flex items-center justify-between text-xs text-[#4B5563] bg-[#F9FAFB] p-2 rounded-md border border-[#E5E7EB]">
            <span className="truncate pr-2 font-medium">
              {meta.time || "15-30m"} &bull; {meta.skill || "All Levels"}
            </span>
            <span className="font-semibold text-[#0A0A0A] shrink-0">
              {meta.cost || "Free & Paid"}
            </span>
          </div>
        )}

        {slug ? (
          <Link
            href={`/workflows/${slug}`}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-[#0A0A0A] hover:bg-[#E11D48] text-white text-xs font-medium transition-colors shadow-none"
          >
            <span>Run Workflow Recipe</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </Link>
        ) : (
          <div className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
            Verified Recipe
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
