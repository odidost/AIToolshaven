import React from "react";
import Link from "next/link";
import { Swords, ArrowRight, Sparkles, ShieldCheck, Zap, Users } from "lucide-react";
import { AITool } from "@/lib/types/tool";

interface ChallengeWinnerBannerProps {
  mainTool: AITool;
  compareTool: AITool;
  categoryName?: string;
}

export function ChallengeWinnerBanner({
  mainTool,
  compareTool,
  categoryName = "AI Software",
}: ChallengeWinnerBannerProps) {
  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 text-white p-7 sm:p-10 lg:p-12 shadow-2xl">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Contextual Challenge Hook */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-rose-300 border border-primary/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Swords className="w-3.5 h-3.5" />
              Vendor Challenge &bull; {categoryName}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Think Your AI Tool Can Beat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                {mainTool.name} or {compareTool.name}?
              </span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Are you building a next-generation product in the <strong>{categoryName}</strong> space? Don&apos;t let incumbents take all the spotlight. Submit your software for our editorial team to benchmark across speed, output accuracy, and pricing.
            </p>

            {/* Value Highlights */}
            <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary" />
                <span>50k+ Monthly AI Buyers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Unbiased Benchmarks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>48h Fast-Track Review</span>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Actions */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            <Link
              href={`/submit?ref=challenge-${mainTool.slug}-vs-${compareTool.slug}`}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-rose-600 text-white font-bold text-sm transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group text-center"
            >
              <span>Challenge the Winner</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/advertising"
              className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs transition-colors border border-slate-700 text-center"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sponsor a Curated Matchup</span>
            </Link>

            <p className="text-[11px] text-slate-400 text-center mt-1">
              Have API keys or sandbox access? Include them in your submission for expedited testing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
