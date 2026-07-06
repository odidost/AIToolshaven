"use client";

import { useState, useEffect } from "react";
import { ToolCard } from "@/components/shared/ToolCard";
import { searchTools } from "@/lib/data/tools-service";
import type { AITool } from "@/lib/types/tool";

const ROLES = ["Developer", "Marketer", "Designer", "Founder", "Student"];
const GOALS = {
  Developer: ["Write Better Code", "Deploy Faster", "Debug Errors"],
  Marketer: ["Write SEO Content", "Create Ad Assets", "Analyze Data"],
  Designer: ["Generate Images", "Remove Backgrounds", "Build UI Mockups"],
  Founder: ["Automate Tasks", "Draft Pitch Decks", "Customer Support"],
  Student: ["Summarize Notes", "Research Topics", "Write Essays"],
} as const;

export function RecommendationEngine() {
  const [role, setRole] = useState<keyof typeof GOALS>("Marketer");
  const [goal, setGoal] = useState<string>(GOALS["Marketer"][0]);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedTools, setRecommendedTools] = useState<AITool[]>([]);

  useEffect(() => {
    // Reset goal when role changes
    setGoal(GOALS[role][0]);
  }, [role]);

  useEffect(() => {
    // Simulate loading to make it feel like an "Engine"
    setIsLoading(true);
    const timer = setTimeout(() => {
      const results = searchTools(`${role} ${goal}`);
      
      // If we don't have enough exact matches for the goal, fallback to some trending ones to fill the grid
      if (results.length < 3) {
        const fallback = searchTools("").sort(() => 0.5 - Math.random());
        const combined = Array.from(new Set([...results, ...fallback]));
        setRecommendedTools(combined.slice(0, 3));
      } else {
        setRecommendedTools(results.slice(0, 3));
      }
      
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [role, goal]);

  return (
    <section className="mb-24 mt-12 px-4 md:px-0">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#050816] p-8 md:p-12 shadow-[0_30px_120px_rgba(0,0,0,0.6)]">

        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-[560px] w-[560px] rounded-full bg-violet-500/15 blur-[160px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                `,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 90%)",
          }}
        />

        {/* Floating Particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-cyan-300/80 animate-ping" />

          <div className="absolute left-[28%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-violet-300/70 animate-pulse" />

          <div className="absolute right-[15%] top-[22%] h-1 w-1 rounded-full bg-sky-300/80 animate-ping [animation-delay:2s]" />

          <div className="absolute right-[20%] bottom-[18%] h-2 w-2 rounded-full bg-emerald-300/60 animate-pulse [animation-delay:1.5s]" />

          <div className="absolute left-1/2 top-[15%] h-1 w-1 rounded-full bg-white/70 animate-ping [animation-delay:3s]" />

        </div>

        {/* AI Network Nodes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <span className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,.8)] animate-pulse" />

          <span className="absolute left-[34%] top-[58%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(168,85,247,.8)] animate-pulse" />

          <span className="absolute right-[22%] top-[28%] h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,.8)] animate-pulse" />

          <span className="absolute right-[18%] bottom-[22%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,.8)] animate-pulse" />

          <span className="absolute left-1/2 top-[42%] h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.8)] animate-pulse" />

          {/* Connection Lines */}
          <div
            className="absolute left-[18%] top-[22%] h-px w-[180px] rotate-[18deg] bg-gradient-to-r from-cyan-400/40 to-transparent"
          />

          <div
            className="absolute left-[34%] top-[58%] h-px w-[160px] -rotate-[22deg] bg-gradient-to-r from-violet-400/40 to-transparent"
          />

          <div
            className="absolute right-[22%] top-[28%] h-px w-[150px] rotate-[135deg] bg-gradient-to-r from-sky-400/40 to-transparent"
          />

          <div
            className="absolute left-[48%] top-[42%] h-px w-[130px] rotate-[12deg] bg-gradient-to-r from-white/30 to-transparent"
          />
        </div>
        {/* AI Scanning Beam */}
        <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 overflow-hidden">

          <div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent blur-2xl animate-ai-scan" />

        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <div className="mb-6 flex items-center justify-center gap-2 text-primary">
            <span className="material-symbols-outlined animate-pulse">auto_awesome</span>
            <span className="text-sm font-bold tracking-widest uppercase">AI Recommendation Engine</span>
          </div>

          <h2 className="mb-10 text-3xl md:text-5xl font-black text-white leading-tight">
            I am a{" "}
            <div className="group relative mx-2 inline-flex">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as keyof typeof GOALS)}
                className="appearance-none h-14 rounded-2xl border border-white/10 bg-white/5 px-5 pr-12 font-semibold text-white backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-cyan-300 hover:bg-white/15 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/30 outline-none cursor-pointer"              >
                {ROLES.map(r => (
                  <option key={r} value={r} className="text-slate-900">{r}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-xl text-cyan-300/70 transition-all duration-300 group-hover:translate-y-[-45%] group-hover:text-cyan-300 pointer-events-none">
                expand_more
              </span>
            </div>
            <br className="hidden md:block" />
            looking to{" "}
            <div className="inline-block relative mx-2 mt-4 md:mt-0">
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 text-white rounded-2xl px-6 py-2 md:py-3 pr-12 cursor-pointer outline-none focus:border-primary transition-colors font-bold shadow-inner"
              >
                {GOALS[role].map(g => (
                  <option key={g} value={g} className="text-slate-900">{g}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                expand_more
              </span>
            </div>
          </h2>

          <div className="mt-12 min-h-[400px]">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-[350px] gap-4">
                <span className="material-symbols-outlined animate-spin text-4xl text-primary">
                  progress_activity
                </span>
                <p className="text-sm font-bold text-slate-400 tracking-widest uppercase animate-pulse">
                  Analyzing million data points...
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {recommendedTools.map((tool) => (
                  <div key={tool.id} className="text-left bg-white rounded-[24px] overflow-hidden">
                    {/* We reuse the ToolCard but in a dark context it might need tweaks, 
                        so we wrap it in a white container to match the light theme ToolCard design */}
                    <ToolCard tool={tool} />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
