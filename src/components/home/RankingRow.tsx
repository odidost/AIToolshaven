import Link from "next/link";
import { ToolImage } from "@/components/shared/ToolImage";
import type { AITool } from "@/lib/types/tool";

interface RankingRowProps {
  tool: AITool;
  rank: number;
  isStar?: boolean;
  accentColor?: string;
}

export function RankingRow({ tool, rank, isStar, accentColor = "primary" }: RankingRowProps) {
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
      className="group relative flex items-center justify-between gap-2 py-2 transition-all duration-300 hover:translate-x-1"
      data-tooltip-title={tool.name}
      data-tooltip-desc={tool.description}
    >
      {/* Background highlight pill that expands slightly outside to keep text aligned */}
      <div className={`absolute -inset-x-2 inset-y-0 rounded-lg transition-colors -z-10 hidden md:block ${activeHoverBg}`} />

      <div className="flex items-center gap-3 min-w-0 flex-1 pl-1">
        <div className="flex w-5 shrink-0 items-center justify-end text-[13px] font-bold">
          {isStar ? (
            <span className="material-symbols-outlined text-[14px] text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          ) : (
            <span className={`bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-500 drop-shadow-sm`}>
              {rank}.
            </span>
          )}
        </div>
        
        <div className="relative h-[20px] w-[20px] shrink-0 overflow-hidden rounded-full border border-border/40 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md group-hover:border-border/60">
          <ToolImage
            tool={tool}
            type="logo"
            className="h-full w-full object-contain p-[2px]"
          />
        </div>

        <h4 className="truncate text-[13px] font-medium text-gray-900/90 group-hover:text-gray-900 transition-colors">
          {tool.name}
        </h4>
      </div>

      <div className={`flex shrink-0 items-center justify-center rounded-[3px] border border-black/10 bg-black/5 text-gray-500 w-[14px] h-[14px] opacity-60 transition-all duration-300 group-hover:opacity-100 ${activeLinkIconHover}`}>
        <span className="material-symbols-outlined text-[9px]">open_in_new</span>
      </div>
    </Link>
  );
}
