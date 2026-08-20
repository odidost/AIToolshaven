import Link from "next/link";
import type { AITool } from "@/lib/types/tool";

interface CategoryHeroSpotlightProps {
  categorySlug: string;
  categoryName: string;
  topTools: AITool[];
}

export function CategoryHeroSpotlight({
  categorySlug,
  categoryName,
  topTools
}: CategoryHeroSpotlightProps) {
  if (!topTools || topTools.length === 0) return null;

  const topPick = topTools[0];
  const runnersUp = topTools.slice(1, 4);

  return (
    <div className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 md:p-8 text-white mb-10 border border-white/10 shadow-xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left Side: Top Pick Badge & Description */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/20 text-[#FFC371] border border-[#FF5F6D]/40 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            #1 Editorial Benchmark Winner
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-white mb-2">
            Top Pick: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] via-[#FF8C69] to-[#FFC371]">{topPick.name}</span>
          </h2>
          <p className="font-sans text-sm text-slate-300 leading-relaxed line-clamp-2 mb-4">
            {topPick.tagline || topPick.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/tool/${topPick.slug}`}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FF5F6D] via-[#FF7A6E] to-[#FF8C69] hover:from-[#FF4858] hover:to-[#FF7850] text-white text-xs font-black uppercase tracking-wide px-5 py-2.5 rounded-full transition-all shadow-md shadow-[#FF5F6D]/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              View Full Review & Specs
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>

            {topPick.websiteUrl && (
              <a
                href={topPick.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-full border border-white/10 transition-colors"
              >
                Visit Website ↗
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Quick Comparison Runners Up */}
        {runnersUp.length > 0 && (
          <div className="w-full lg:w-auto bg-white/5 border border-white/10 rounded-2xl p-4 shrink-0">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
              Also Trending in {categoryName}:
            </span>
            <div className="flex flex-col gap-2">
              {runnersUp.map(tool => (
                <Link
                  key={tool.slug}
                  href={`/tool/${tool.slug}`}
                  className="flex items-center justify-between gap-4 p-2 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-[10px] font-bold">
                      {tool.name[0]}
                    </div>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-primary transition-colors">
                      {tool.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {tool.priceModel || 'Free'} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
