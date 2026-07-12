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
        <div className="flex w-5 shrink-0 items-center justify-end text-[13px] text-on-surface-variant/70">
          {isStar ? (
            <span className="material-symbols-outlined text-[14px] text-[#ff6be1]">star</span>
          ) : (
            `${rank}.`
          )}
        </div>
        
        <div className="relative h-[20px] w-[20px] shrink-0 overflow-hidden rounded-full border border-border/40 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md group-hover:border-border/60">
          <ToolImage
            tool={tool}
            type="logo"
            className="h-full w-full object-contain p-[2px]"
          />
        </div>

        <h4 className="truncate text-[13px] font-medium text-on-surface/90 group-hover:text-primary transition-colors">
          {tool.name}
        </h4>
      </div>

      <div className="flex shrink-0 items-center justify-center rounded-[4px] border border-[#a1dbb8] bg-[#f0fbf4] w-[18px] h-[18px] opacity-100 transition-opacity duration-200">
        <span className="material-symbols-outlined text-[11px] text-[#4caf50]">open_in_new</span>
      </div>
    </Link>
  );
}
