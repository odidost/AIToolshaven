"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Swords, ArrowRight } from "lucide-react";

interface ToolOption {
  name: string;
  slug: string;
  logoUrl?: string;
}

interface ComparisonCustomMatchupProps {
  availableTools: ToolOption[];
}

export function ComparisonCustomMatchup({ availableTools }: ComparisonCustomMatchupProps) {
  const router = useRouter();
  const [tool1Slug, setTool1Slug] = useState(availableTools[0]?.slug || "chatgpt");
  const [tool2Slug, setTool2Slug] = useState(availableTools[1]?.slug || "claude");

  const tool1 = availableTools.find((t) => t.slug === tool1Slug) || availableTools[0];
  const tool2 = availableTools.find((t) => t.slug === tool2Slug) || availableTools[1];

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tool1Slug || !tool2Slug) return;
    if (tool1Slug === tool2Slug) {
      alert("Please select two different AI tools to compare.");
      return;
    }
    router.push(`/compare-tools/${tool1Slug}-vs-${tool2Slug}`);
  };

  const popularMatchups = [
    { name: "ChatGPT vs Claude", slug: "chatgpt-vs-claude" },
    { name: "Cursor vs Copilot", slug: "cursor-vs-github-copilot" },
    { name: "Midjourney vs Flux.1", slug: "midjourney-vs-flux" },
    { name: "ElevenLabs vs Murf AI", slug: "elevenlabs-vs-murf-ai" },
    { name: "Jasper vs Writesonic", slug: "jasper-vs-writesonic" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/40 dark:shadow-none relative overflow-hidden mb-16">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/10 via-rose-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:text-rose-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
          <Swords className="w-4 h-4" />
          Custom Versus Matchup
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
          Compare Any Two AI Tools Side-by-Side
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
          Select any two tools from our verified database to generate a real-time feature matrix, pricing comparison, and workflow verdict.
        </p>

        <form onSubmit={handleCompare} className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6 bg-white dark:bg-slate-900/80 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Tool 1 Selector */}
          <div className="w-full md:w-5/12 flex items-center gap-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-3">
            {tool1?.logoUrl ? (
              <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-white p-1 border border-slate-200 dark:border-slate-700">
                <Image src={tool1.logoUrl} alt={tool1.name} width={32} height={32} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-black text-sm flex-shrink-0">
                {tool1?.name?.[0] || "1"}
              </div>
            )}
            <div className="flex-1 text-left">
              <label htmlFor="tool1-select" className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 block tracking-wider">
                First Tool
              </label>
              <select
                id="tool1-select"
                aria-label="First AI Tool to compare"
                value={tool1Slug}
                onChange={(e) => setTool1Slug(e.target.value)}
                className="w-full bg-transparent font-bold text-slate-900 dark:text-white text-sm focus:outline-none cursor-pointer"
              >
                {availableTools.map((t) => (
                  <option key={t.slug} value={t.slug} className="dark:bg-slate-900">
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Versus Orb */}
          <div className="flex-shrink-0 relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-orange-500 text-white font-black text-xs italic tracking-wider flex items-center justify-center shadow-md shadow-primary/20">
              VS
            </div>
          </div>

          {/* Tool 2 Selector */}
          <div className="w-full md:w-5/12 flex items-center gap-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-3">
            {tool2?.logoUrl ? (
              <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-white p-1 border border-slate-200 dark:border-slate-700">
                <Image src={tool2.logoUrl} alt={tool2.name} width={32} height={32} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-black text-sm flex-shrink-0">
                {tool2?.name?.[0] || "2"}
              </div>
            )}
            <div className="flex-1 text-left">
              <label htmlFor="tool2-select" className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 block tracking-wider">
                Second Tool
              </label>
              <select
                id="tool2-select"
                aria-label="Second AI Tool to compare"
                value={tool2Slug}
                onChange={(e) => setTool2Slug(e.target.value)}
                className="w-full bg-transparent font-bold text-slate-900 dark:text-white text-sm focus:outline-none cursor-pointer"
              >
                {availableTools.map((t) => (
                  <option key={t.slug} value={t.slug} className="dark:bg-slate-900">
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-600 text-white font-bold text-sm rounded-xl shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 flex-shrink-0 whitespace-nowrap"
          >
            <span>Compare Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Popular Matchup Pills */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-slate-500 dark:text-slate-400 font-semibold mr-1">Trending Matchups:</span>
          {popularMatchups.map((pm) => (
            <button
              key={pm.slug}
              type="button"
              onClick={() => router.push(`/compare-tools/${pm.slug}`)}
              className="bg-white dark:bg-slate-800 hover:bg-primary/5 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 transition-colors font-medium shadow-2xs"
            >
              {pm.name}
            </button>
          ))}
        </div>

        {/* Vendor Fast-Track Lead Trigger */}
        <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
          Building an AI tool not listed in our matchup selector?{" "}
          <Link
            href="/submit"
            className="text-primary dark:text-rose-400 font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>Submit your product for our next benchmark cycle</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
