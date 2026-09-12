import Link from "next/link";
import { Table, ArrowRight } from "lucide-react";

interface MatrixRow {
  matchup: string;
  slug: string;
  category: string;
  tool1Name: string;
  tool2Name: string;
  primaryDifferentiator: string;
  recommendedForTool1: string;
  recommendedForTool2: string;
}

const MATRIX_DATA: MatrixRow[] = [
  {
    matchup: "ChatGPT vs Claude",
    slug: "chatgpt-vs-claude",
    category: "General Intelligence & Reasoning",
    tool1Name: "ChatGPT",
    tool2Name: "Claude",
    primaryDifferentiator: "Ecosystem breadth & web tools vs Nuanced writing & large context coding",
    recommendedForTool1: "General automation, custom GPTs, image input",
    recommendedForTool2: "Long-form writing, code refactoring, complex logic",
  },
  {
    matchup: "Cursor vs GitHub Copilot",
    slug: "cursor-vs-github-copilot",
    category: "AI Code Editors",
    tool1Name: "Cursor",
    tool2Name: "GitHub Copilot",
    primaryDifferentiator: "Standalone fork with Composer multi-file edits vs GitHub repository native sync",
    recommendedForTool1: "Full-stack builders, rapid prototyping, multi-file changes",
    recommendedForTool2: "Enterprise teams tied to Visual Studio & GitHub Enterprise",
  },
  {
    matchup: "Midjourney vs Flux.1",
    slug: "midjourney-vs-flux",
    category: "AI Image Generation",
    tool1Name: "Midjourney",
    tool2Name: "Flux.1",
    primaryDifferentiator: "Cinematic aesthetics & textures vs Open weights, legible text, and zero subscription",
    recommendedForTool1: "Concept artists, art directors, stylized photography",
    recommendedForTool2: "Developers, graphic designers needing legible signage & logos",
  },
  {
    matchup: "ElevenLabs vs Murf AI",
    slug: "elevenlabs-vs-murf-ai",
    category: "Voice & Speech Synthesis",
    tool1Name: "ElevenLabs",
    tool2Name: "Murf AI",
    primaryDifferentiator: "Hyper-realistic voice cloning & emotion vs Built-in video timeline sync editor & royalty music",
    recommendedForTool1: "Audiobook narration, game characters, emotive storytelling",
    recommendedForTool2: "Corporate e-learning, explainer videos, marketing slide voiceovers",
  },
  {
    matchup: "Jasper vs Writesonic",
    slug: "jasper-vs-writesonic",
    category: "AI Copywriting & SEO",
    tool1Name: "Jasper",
    tool2Name: "Writesonic",
    primaryDifferentiator: "Brand voice memory & enterprise campaigns vs Real-time Google search grounding (Article Writer 6.0)",
    recommendedForTool1: "Marketing agencies, multi-brand corporate copy teams",
    recommendedForTool2: "Affiliate bloggers, SEO content publishers needing real-time citations",
  },
  {
    matchup: "Fathom vs tl;dv",
    slug: "fathom-video-vs-tldv",
    category: "AI Meeting Assistants",
    tool1Name: "Fathom",
    tool2Name: "tl;dv",
    primaryDifferentiator: "100% free unlimited recording & CRM syncing vs Multi-meeting team coaching repository",
    recommendedForTool1: "Account executives, freelancers, high-frequency Zoom users",
    recommendedForTool2: "Sales managers, product researchers running cross-call analytics",
  },
];

export function ComparisonsSummaryMatrix() {
  return (
    <div className="w-full my-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:text-rose-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Table className="w-4 h-4" />
            Quick Reference Matrix
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Top AI Tool Matchups: Key Differentiators at a Glance
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Short on time? Here is our editorial benchmark summary showing the definitive use case winner for the most searched comparisons.
          </p>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300">
              <th className="py-4 px-4 font-bold">Matchup</th>
              <th className="py-4 px-4 font-bold">Category</th>
              <th className="py-4 px-4 font-bold">Core Differentiator</th>
              <th className="py-4 px-4 font-bold">Best Choice For You</th>
              <th className="py-4 px-4 font-bold text-right">Verdict</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
            {MATRIX_DATA.map((row) => (
              <tr key={row.slug} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                  {row.matchup}
                </td>
                <td className="py-4 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {row.category}
                </td>
                <td className="py-4 px-4 text-xs max-w-xs leading-relaxed">
                  {row.primaryDifferentiator}
                </td>
                <td className="py-4 px-4 text-xs leading-relaxed">
                  <div className="space-y-1">
                    <div>
                      <strong className="text-slate-800 dark:text-slate-200">{row.tool1Name}:</strong> {row.recommendedForTool1}
                    </div>
                    <div>
                      <strong className="text-slate-800 dark:text-slate-200">{row.tool2Name}:</strong> {row.recommendedForTool2}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-right whitespace-nowrap">
                  <Link
                    href={`/compare-tools/${row.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                  >
                    <span>Read Verdict</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Matrix Vendor Callout Footer */}
      <div className="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="text-slate-600 dark:text-slate-400 text-center sm:text-left">
          <span className="font-semibold text-slate-800 dark:text-slate-200">Are you an AI software maker?</span> Benchmark your tool against the category leader in our next audit.
        </div>
        <Link
          href="/submit"
          className="inline-flex items-center gap-1.5 font-bold text-primary dark:text-rose-400 hover:underline shrink-0"
        >
          <span>Request an Official Benchmark</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
