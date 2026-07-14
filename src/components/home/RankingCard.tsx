import Link from "next/link";
import { RankingRow } from "./RankingRow";
import type { AITool } from "@/lib/types/tool";

interface RankingCardProps {
  title: string;
  icon: string;
  tools: AITool[];
  totalCount: number;
  categoryLink: string;
  accentColor?: "primary" | "secondary" | "tertiary" | "emerald" | "blue" | "rose";
}

export function RankingCard({
  title,
  icon,
  tools,
  totalCount,
  categoryLink,
  accentColor = "primary",
}: RankingCardProps) {
  
  // Custom thin line gradients based on accent color
  const lineGradients = {
    primary: "bg-gradient-to-r from-transparent via-primary/50 to-transparent",
    secondary: "bg-gradient-to-r from-transparent via-secondary/50 to-transparent",
    tertiary: "bg-gradient-to-r from-transparent via-tertiary/50 to-transparent",
    emerald: "bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent",
    blue: "bg-gradient-to-r from-transparent via-blue-500/50 to-transparent",
    rose: "bg-gradient-to-r from-transparent via-rose-500/50 to-transparent",
  };

  // Dynamic scrollbar thumb color based on accent, made more obvious
  const scrollbarThumbColors: Record<string, string> = {
    primary: "[&::-webkit-scrollbar-thumb]:bg-primary/40 hover:[&::-webkit-scrollbar-thumb]:bg-primary/70",
    secondary: "[&::-webkit-scrollbar-thumb]:bg-secondary/40 hover:[&::-webkit-scrollbar-thumb]:bg-secondary/70",
    tertiary: "[&::-webkit-scrollbar-thumb]:bg-tertiary/40 hover:[&::-webkit-scrollbar-thumb]:bg-tertiary/70",
    emerald: "[&::-webkit-scrollbar-thumb]:bg-emerald-500/40 hover:[&::-webkit-scrollbar-thumb]:bg-emerald-500/70",
    blue: "[&::-webkit-scrollbar-thumb]:bg-blue-500/40 hover:[&::-webkit-scrollbar-thumb]:bg-blue-500/70",
    rose: "[&::-webkit-scrollbar-thumb]:bg-rose-500/40 hover:[&::-webkit-scrollbar-thumb]:bg-rose-500/70",
  };
  const activeScrollbar = scrollbarThumbColors[accentColor] || scrollbarThumbColors.primary;

  const isLatest = title.toLowerCase().includes("latest");
  const extractedCategoryName = title.replace(/Most Popular|Latest|Trending|Top|AI/g, "").trim() || "category";

  return (
    <div className="group/card relative flex h-[420px] flex-col overflow-hidden rounded-[20px] border border-[#7C3AED]/15 bg-white/80 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),_0_4px_24px_rgba(124,58,237,0.04)] transition-all duration-500 hover:shadow-[0_16px_40px_rgba(124,58,237,0.12)] hover:-translate-y-1">
      
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-[#7C3AED]/5 blur-2xl pointer-events-none transition-all duration-500 group-hover/card:bg-[#7C3AED]/10" />

      {/* Header */}
      <div className="relative shrink-0 flex flex-col pt-5 pb-4 px-5 z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F3E8FF] to-white text-[#7C3AED] shadow-sm ring-1 ring-[#7C3AED]/15 group-hover/card:scale-105 transition-transform duration-500">
            <span className="material-symbols-outlined text-[20px]">
              {icon}
            </span>
          </div>
          <h3 className="font-extrabold text-[16px] tracking-tight text-gray-900 group-hover/card:text-[#7C3AED] transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-[#7C3AED]/20 via-[#7C3AED]/5 to-transparent" />
      </div>

      {/* Tools List - Scrollable */}
      <div className={`flex flex-1 flex-col px-4 pb-2 z-10 overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-black/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full transition-colors duration-300 ${activeScrollbar}`}>
        <div className="flex flex-col divide-y divide-border/30">
          {tools.map((tool, index) => (
            <RankingRow key={tool.id} tool={tool} rank={index + 1} isStar={isLatest} accentColor={accentColor} />
          ))}
          {tools.length === 0 && (
            <div className="flex h-full items-center justify-center p-6 text-sm text-on-surface-variant">
              No tools found.
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="relative shrink-0 mt-auto p-4 z-10 bg-transparent">
        <Link
          href={categoryLink}
          className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#F4F4F5] px-4 py-2.5 text-[12px] font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          See all {extractedCategoryName} ({totalCount}) <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
