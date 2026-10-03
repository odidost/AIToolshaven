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
  badgeText?: string;
  isFreshDrops?: boolean;
}

export function RankingCard({
  title,
  icon,
  tools,
  totalCount,
  categoryLink,
  accentColor = "primary",
  badgeText,
  isFreshDrops,
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

  const isLatest = title.toLowerCase().includes("latest") || title.toLowerCase().includes("fresh");
  const extractedCategoryName = title.replace(/Most Popular|Latest|Trending|Top|AI/g, "").trim() || "category";

  return (
    <div className="relative flex h-[420px] flex-col overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-none transition-colors hover:border-gray-300">
      
      {/* Header */}
      <div className="relative shrink-0 flex items-center justify-between pt-4 pb-3 px-4 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-2.5">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-[#0A0A0A] ${
            isFreshDrops ? "bg-[#FFF1F2] border-[#FECDD3] text-[#E11D48]" : "bg-[#F9FAFB] border-[#E5E7EB]"
          }`}>
            <span className="material-symbols-outlined text-[18px]">
              {icon}
            </span>
          </div>
          <h3 className="font-bold text-sm tracking-tight text-[#0A0A0A] font-heading">
            {title}
          </h3>
        </div>

        {badgeText && (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {badgeText}
          </span>
        )}
      </div>

      {/* Tools List - Scrollable */}
      <div className="flex flex-1 flex-col px-3 py-1 overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded">
        <div className="flex flex-col divide-y divide-[#F3F4F6]">
          {tools.map((tool, index) => (
            <RankingRow 
              key={tool.id} 
              tool={tool} 
              rank={index + 1} 
              isStar={isLatest && !isFreshDrops} 
              isFreshDrops={isFreshDrops} 
              accentColor={accentColor} 
            />
          ))}
          {tools.length === 0 && (
            <div className="flex h-full items-center justify-center p-6 text-xs text-[#4B5563]">
              No tools found.
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="relative shrink-0 mt-auto p-3 bg-white border-t border-[#E5E7EB]">
        <Link
          href={categoryLink}
          className="flex w-full items-center justify-center gap-1.5 rounded-md bg-[#F9FAFB] border border-[#E5E7EB] px-3 py-2 text-xs font-semibold text-[#4B5563] transition-all hover:bg-[#E11D48] hover:border-[#E11D48] hover:text-white group/btn"
        >
          See all {extractedCategoryName} ({totalCount}) <span className="transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
