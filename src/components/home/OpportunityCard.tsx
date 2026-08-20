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
      className={`relative rounded-3xl bg-gradient-to-b ${theme.gradient} bg-white border ${theme.borderColor} p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full`}
    >
      {/* Top Section */}
      <div>
        {/* Row: Icon Box & ROI Pill Badge */}
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
          Monetization Opportunity • {difficulty} Track
        </p>
        <p className="text-sm font-sans text-gray-600 leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        {/* Opportunity Telemetry Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          <div className="p-3 rounded-2xl bg-white/80 border border-black/5 space-y-0.5">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
              Difficulty
            </span>
            <span className="text-xs font-black text-gray-900">
              {difficulty}
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-white/80 border border-black/5 space-y-0.5">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
              Earning Potential
            </span>
            <span className="text-xs font-black text-emerald-600">
              {roi}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Action CTA */}
      <div className="pt-4 border-t border-black/5">
        <Link
          href={slug ? `/goals/${slug}` : `/goals`}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-primary text-white text-xs font-bold transition-all shadow-xs"
        >
          Unlock Opportunity Playbook
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        </Link>
      </div>
    </div>
  );
}
