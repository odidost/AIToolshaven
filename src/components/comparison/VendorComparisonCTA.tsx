import Link from "next/link";
import { Sparkles, Trophy, Users, ShieldCheck, ArrowRight, Zap } from "lucide-react";

export function VendorComparisonCTA() {
  return (
    <section className="relative overflow-hidden my-20 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-rose-300 border border-primary/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              For AI Software Founders &amp; Marketing Leaders
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Get Your AI Tool{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Benchmarked &amp; Discovered
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Comparison pages represent the single highest purchase-intent traffic in software. When enterprise buyers and developers decide between top tools, make sure your product is on their shortlist.
            </p>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-1">
                  <Users className="w-4 h-4 shrink-0" />
                  <span>50k+ Buyers</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Put your tool in front of tech leads actively comparing solutions.
                </p>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                  <Trophy className="w-4 h-4 shrink-0" />
                  <span>3.8x Conversion</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Head-to-head traffic converts significantly higher than directories.
                </p>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Fair Testing</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  100% objective benchmarks based on reasoning, latency &amp; real costs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inbound Inquiry Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <Zap className="w-4 h-4" />
                  <span>Accepting submissions for 2026 audits</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Request a Matchup or Listing
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Submit your product details, API playground, or sandbox access for our editorial benchmarking team.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-rose-600 text-white font-bold text-sm transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
                >
                  <span>Submit Tool for Evaluation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/advertising"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-700/70 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors border border-slate-600/60"
                >
                  <span>Explore Sponsored Audits &amp; Ad Partnerships</span>
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Fast 48h turnaround available</span>
                <Link href="/editorial-policy" className="hover:text-white transition-colors underline">
                  Editorial Integrity Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
