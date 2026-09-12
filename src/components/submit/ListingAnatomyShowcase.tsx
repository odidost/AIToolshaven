import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  ShieldCheck,
  Award,
  Link2,
  CheckCircle2,
  Sparkles,
  Swords,
  Globe,
  ArrowRight,
  Eye,
} from "lucide-react";

export function ListingAnatomyShowcase() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:text-rose-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5" />
            Transparent Product Preview
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            The Anatomy of a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              High-Converting Listing
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Here is the exact layout, authority signals, and conversion assets your AI product receives upon editorial publication.
          </p>
        </div>

        {/* The Visual Showcase Card with Annotations */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl text-white overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Mockup Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Mockup Preview (Left/Center Column) */}
            <div className="lg:col-span-8 bg-slate-950/80 rounded-2xl border border-slate-800/80 p-6 sm:p-8 space-y-6 shadow-inner relative">
              {/* Mockup Top Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-orange-500 p-[2px] shadow-lg shrink-0">
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-black text-xl text-white">
                      AI
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">YourTool AI</h3>
                      {/* Annotation 1: Verified Badge */}
                      <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        <ShieldCheck className="w-3 h-3" />
                        Editor&apos;s Verified
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Next-generation AI workflow automation platform
                    </p>
                  </div>
                </div>

                {/* Annotation 2: Dofollow Link CTA */}
                <div className="inline-flex items-center gap-1.5 bg-primary hover:bg-rose-600 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-md pointer-events-none">
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Mockup Body Content */}
              <div className="space-y-4 text-xs text-slate-300">
                <p className="leading-relaxed">
                  <strong>Editorial Summary:</strong> YourTool AI provides developer and marketing teams with autonomous LLM pipeline execution. In our independent benchmarks, it demonstrated 99.4% task completion with under 1.2s time-to-first-token.
                </p>

                {/* Feature Tags & Pricing */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-semibold">Pricing Model</span>
                    <span className="font-bold text-white text-xs">Freemium</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-semibold">Starting Price</span>
                    <span className="font-bold text-white text-xs">$29 / month</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-semibold">Category</span>
                    <span className="font-bold text-white text-xs">Developer Tools</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-semibold">API Access</span>
                    <span className="font-bold text-emerald-400 text-xs">Available</span>
                  </div>
                </div>

                {/* Mockup Comparison Matchup Pill */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <Swords className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-rose-300">Featured Matchup:</span>
                    <span className="text-slate-200">YourTool AI vs Industry Leader</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary hover:underline">View Matrix &rarr;</span>
                </div>
              </div>
            </div>

            {/* Annotations & Benefits (Right Column) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <Link2 className="w-4 h-4 shrink-0" />
                  <span>1. Editorial Dofollow Link</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Permanent contextual backlink transferring high-authority domain rating directly to your landing page.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>2. &quot;Editor&apos;s Verified&quot; Trust Badge</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Instantly differentiates your product from unvetted AI wrappers and builds enterprise buyer credibility.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <Globe className="w-4 h-4 shrink-0" />
                  <span>3. Semantic Schema.org Markup</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Formatted with SoftwareApplication structured data so Google indexes your features, pricing, and ratings.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Swords className="w-4 h-4 shrink-0" />
                  <span>4. Versus Arena Eligibility</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Included in head-to-head comparison pages, intercepting in-market searchers evaluating your competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
