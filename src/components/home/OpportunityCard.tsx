"use client";

import Link from "next/link";

interface OpportunityCardProps {
  title: string;
  description: string;
  icon: string;
  slug?: string;
  difficulty?: string;
  roi?: string;
  color?: string;
}

export function OpportunityCard({
  title,
  description,
  icon,
  slug,
  difficulty = "Beginner",
  roi = "High",
  color = "from-primary to-orange-500",
}: OpportunityCardProps) {
  // Derive color theme matching TrendingStacksHub & WorkflowCard aesthetics
  const c = color.toLowerCase();
  const theme = 
    c.includes("emerald") || c.includes("teal") || c.includes("green") ? {
      gradient: "from-emerald-600/10 via-teal-500/5 to-transparent",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/50",
      badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-600 border-emerald-500/30",
      roiBg: "bg-emerald-500/10 text-emerald-700",
    } :
    c.includes("purple") || c.includes("indigo") ? {
      gradient: "from-purple-600/10 via-indigo-500/5 to-transparent",
      borderColor: "border-purple-500/20 hover:border-purple-500/50",
      badgeColor: "from-purple-500/20 to-indigo-500/20 text-purple-600 border-purple-500/30",
      roiBg: "bg-purple-500/10 text-purple-700",
    } :
    c.includes("cyan") || c.includes("blue") ? {
      gradient: "from-cyan-600/10 via-blue-500/5 to-transparent",
      borderColor: "border-cyan-500/20 hover:border-cyan-500/50",
      badgeColor: "from-cyan-500/20 to-blue-500/20 text-cyan-600 border-cyan-500/30",
      roiBg: "bg-cyan-500/10 text-cyan-700",
    } :
    c.includes("orange") || c.includes("amber") || c.includes("yellow") ? {
      gradient: "from-amber-600/10 via-orange-500/5 to-transparent",
      borderColor: "border-amber-500/20 hover:border-amber-500/50",
      badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-500/30",
      roiBg: "bg-amber-500/10 text-amber-700",
    } :
    c.includes("rose") || c.includes("red") ? {
      gradient: "from-rose-600/10 via-[#FF5F6D]/5 to-transparent",
      borderColor: "border-rose-500/20 hover:border-rose-500/50",
      badgeColor: "from-rose-500/20 to-[#FFC371]/20 text-rose-600 border-rose-500/30",
      roiBg: "bg-rose-500/10 text-rose-700",
    } : {
      // Default AIToolsHaven Sunset Ember Theme
      gradient: "from-[#FF5F6D]/10 via-[#FF8C69]/5 to-transparent",
      borderColor: "border-[#FF5F6D]/20 hover:border-[#FF5F6D]/50",
      badgeColor: "from-[#FF5F6D]/20 to-[#FFC371]/20 text-[#FF5F6D] border-[#FF5F6D]/30",
      roiBg: "bg-[#FF5F6D]/10 text-[#FF5F6D]",
    };

  const badgeText = roi.includes("$") ? roi : `${roi.toUpperCase()} ROI`;

  return (
    <div 
      className="rounded-lg bg-white border border-[#E5E7EB] p-5 sm:p-6 hover:border-gray-300 transition-colors flex flex-col justify-between group shadow-none h-full"
    >
      {/* Top Section */}
      <div>
        {/* Row: Icon Box & ROI Pill Badge */}
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
          Monetization blueprint &bull; {difficulty}
        </p>
        <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-5 line-clamp-2">
          {description}
        </p>

        {/* Opportunity Telemetry Grid */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="p-2.5 rounded-md bg-[#F9FAFB] border border-[#E5E7EB]">
            <span className="text-[10px] font-semibold text-[#4B5563] uppercase tracking-wider block">
              Difficulty
            </span>
            <span className="text-xs font-bold text-[#0A0A0A]">
              {difficulty}
            </span>
          </div>

          <div className="p-2.5 rounded-md bg-[#F9FAFB] border border-[#E5E7EB]">
            <span className="text-[10px] font-semibold text-[#4B5563] uppercase tracking-wider block">
              Potential
            </span>
            <span className="text-xs font-bold text-[#0A0A0A]">
              {roi}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Action CTA */}
      <div className="pt-4 border-t border-[#E5E7EB]">
        <Link
          href={slug ? `/goals/${slug}` : `/goals`}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-[#0A0A0A] hover:bg-[#E11D48] text-white text-xs font-medium transition-colors shadow-none"
        >
          <span>View Business Mission</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
