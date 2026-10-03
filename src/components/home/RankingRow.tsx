import Link from "next/link";
import { ToolImage } from "@/components/shared/ToolImage";
import type { AITool } from "@/lib/types/tool";

interface RankingRowProps {
  tool: AITool;
  rank: number;
  isStar?: boolean;
  isFreshDrops?: boolean;
  accentColor?: string;
}

export function RankingRow({ tool, rank, isStar, isFreshDrops, accentColor = "primary" }: RankingRowProps) {
  // Map accent colors to very subtle hover backgrounds
  const hoverBackgrounds: Record<string, string> = {
    primary: "group-hover:bg-primary/5",
    secondary: "group-hover:bg-secondary/5",
    tertiary: "group-hover:bg-tertiary/5",
    emerald: "group-hover:bg-emerald-500/5",
    blue: "group-hover:bg-blue-500/5",
    rose: "group-hover:bg-rose-500/5",
  };

  const activeHoverBg = hoverBackgrounds[accentColor] || hoverBackgrounds.primary;

  const linkIconHoverColors: Record<string, string> = {
    primary: "group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary",
    secondary: "group-hover:border-secondary/40 group-hover:bg-secondary/10 group-hover:text-secondary",
    tertiary: "group-hover:border-tertiary/40 group-hover:bg-tertiary/10 group-hover:text-tertiary",
    emerald: "group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-600",
    blue: "group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:text-blue-600",
    rose: "group-hover:border-rose-500/40 group-hover:bg-rose-500/10 group-hover:text-rose-600",
  };

  const activeLinkIconHover = linkIconHoverColors[accentColor] || linkIconHoverColors.primary;

  return (
    <Link
      href={`/tool/${tool.slug}`}
      className="group relative flex items-center justify-between gap-2 py-1.5 px-1 rounded-md transition-colors hover:bg-[#F9FAFB]"
      data-tooltip-title={tool.name}
      data-tooltip-desc={tool.description}
    >
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <div className="flex w-5 shrink-0 items-center justify-center text-xs font-mono font-medium text-[#4B5563]">
          {isFreshDrops && rank <= 3 ? (
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#E11D48] bg-[#FFF1F2] px-1 py-0.2 rounded border border-[#FECDD3]">
              NEW
            </span>
          ) : isStar ? (
            <span className="material-symbols-outlined text-[13px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          ) : (
            <span>{rank}.</span>
          )}
        </div>
        
        <div className="relative h-5 w-5 shrink-0 overflow-hidden rounded border border-[#E5E7EB] bg-white">
          <ToolImage
            tool={tool}
            type="logo"
            className="h-full w-full object-contain p-0.5"
          />
        </div>

        <h4 className="truncate text-xs font-medium text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors">
          {tool.name}
        </h4>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        {tool.priceModel && (
          <span className="text-[9px] font-medium px-1.5 py-0.2 rounded border border-[#E5E7EB] bg-[#F9FAFB] text-[#4B5563] group-hover:border-[#E11D48]/30 group-hover:text-[#E11D48] transition-colors">
            {tool.priceModel}
          </span>
        )}
        <span className="material-symbols-outlined text-[13px] text-[#9CA3AF] group-hover:text-[#E11D48] group-hover:translate-x-0.5 transition-all">
          arrow_forward
        </span>
      </div>
    </Link>
  );
}
