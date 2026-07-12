import Link from "next/link";
import { RankingRow } from "./RankingRow";
import type { AITool } from "@/lib/types/tool";

interface RankingCardProps {
  title: string;
  icon: string;
  tools: AITool[];
  categoryLink: string;
  accentColor?: "primary" | "secondary" | "tertiary" | "emerald" | "blue" | "rose";
}

export function RankingCard({
  title,
  icon,
  tools,
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

  // Dynamic scrollbar thumb color based on accent
  const scrollbarThumbColors: Record<string, string> = {
    primary: "[&::-webkit-scrollbar-thumb]:bg-primary/20 hover:[&::-webkit-scrollbar-thumb]:bg-primary/40",
    secondary: "[&::-webkit-scrollbar-thumb]:bg-secondary/20 hover:[&::-webkit-scrollbar-thumb]:bg-secondary/40",
    tertiary: "[&::-webkit-scrollbar-thumb]:bg-tertiary/20 hover:[&::-webkit-scrollbar-thumb]:bg-tertiary/40",
    emerald: "[&::-webkit-scrollbar-thumb]:bg-emerald-500/20 hover:[&::-webkit-scrollbar-thumb]:bg-emerald-500/40",
    blue: "[&::-webkit-scrollbar-thumb]:bg-blue-500/20 hover:[&::-webkit-scrollbar-thumb]:bg-blue-500/40",
    rose: "[&::-webkit-scrollbar-thumb]:bg-rose-500/20 hover:[&::-webkit-scrollbar-thumb]:bg-rose-500/40",
  };
  const activeScrollbar = scrollbarThumbColors[accentColor] || scrollbarThumbColors.primary;

  const isLatest = title.toLowerCase().includes("latest");
  const extractedCategoryName = title.replace(/Most Popular|Latest|Trending|Top|AI/g, "").trim() || "category";

  return (
    <div className="group/card relative flex h-[420px] flex-col overflow-hidden rounded-[16px] border border-white/60 bg-white/70 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),_0_4px_24px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1">
      {/* Header */}
      <div className="flex flex-col items-center pt-5 pb-3 px-6 relative">
        <div className="flex items-center justify-center gap-2 mb-2.5">
          <span className="material-symbols-outlined text-[16px] text-on-surface-variant/80">
            {icon}
          </span>
          <h3 className="font-bold text-[14px] text-on-surface tracking-wide">
            {title}
          </h3>
        </div>
        <div className={`h-[1px] w-full ${lineGradients[accentColor]}`} />
      </div>

      {/* Tools List - Scrollable */}
      <div className={`flex flex-1 flex-col px-4 pb-2 overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full transition-colors duration-300 ${activeScrollbar}`}>
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
      <div className="p-3 bg-white/40 backdrop-blur-md pt-1">
        <Link
          href={categoryLink}
          className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-surface-variant/20 px-4 py-2 text-[12px] font-medium text-on-surface-variant/80 transition-all duration-300 hover:bg-white hover:shadow-sm hover:text-on-surface"
        >
          See all {extractedCategoryName} ({tools.length * 8 + 1}) <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
