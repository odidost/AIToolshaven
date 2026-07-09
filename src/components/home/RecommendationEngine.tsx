"use client";

import { useState, useEffect } from "react";
import { ToolCard } from "@/components/shared/ToolCard";
import { getRecommendationsByPersona, searchTools } from "@/lib/data/tools-service";
import type { AITool } from "@/lib/types/tool";
import { ROLES, GOALS } from "@/lib/data/goals";

export function RecommendationEngine() {
  const [role, setRole] = useState<keyof typeof GOALS>("Marketer");
  const [goal, setGoal] = useState<string>(GOALS["Marketer"][0]);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedTools, setRecommendedTools] = useState<AITool[]>([]);

  useEffect(() => {
    // Reset goal when role changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGoal(GOALS[role][0]);
  }, [role]);

  useEffect(() => {
    // Simulate loading to make it feel like an "Engine"
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    const timer = setTimeout(() => {
      const results = getRecommendationsByPersona(role, goal);
      
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
      <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface-elevated backdrop-blur-md p-8 md:p-12 shadow-md">

        {/* Neural Network Nodes Background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-nodes" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="5" fill="#7C3AED" />
                <circle cx="90" cy="90" r="8" fill="#A855F7" />
                <circle cx="90" cy="30" r="4" fill="#14B8A6" />
                <path d="M30 30 L90 90 M30 30 L90 30" stroke="#7C3AED" strokeWidth="2" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-nodes)" />
          </svg>
        </div>

        {/* AI Scanning Beam */}
        <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 overflow-hidden">
          <div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl animate-ai-scan" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <div className="mb-6 flex items-center justify-center gap-2 text-primary">
            <span className="material-symbols-outlined animate-pulse">auto_awesome</span>
            <span className="text-sm font-bold tracking-widest uppercase">AI Recommendation Engine</span>
          </div>

          <h2 className="mb-10 text-3xl md:text-5xl font-black text-on-surface leading-tight">
            I am a{" "}
            <div className="group relative mx-2 inline-flex">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as keyof typeof GOALS)}
                className="appearance-none h-14 rounded-2xl border border-border bg-surface px-5 pr-12 font-semibold text-primary shadow-sm transition-all duration-300 hover:border-primary hover:bg-surface focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none cursor-pointer"
              >
                {ROLES.map(r => (
                  <option key={r} value={r} className="text-on-surface">{r}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-xl text-primary/70 transition-all duration-300 group-hover:translate-y-[-45%] group-hover:text-primary pointer-events-none">
                expand_more
              </span>
            </div>
            <br className="hidden md:block" />
            looking to{" "}
            <div className="inline-block relative mx-2 mt-4 md:mt-0">
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="appearance-none h-14 rounded-2xl border border-border bg-surface px-5 pr-12 font-semibold text-secondary shadow-sm transition-all duration-300 hover:border-secondary hover:bg-surface focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none cursor-pointer"
              >
                {GOALS[role].map(g => (
                  <option key={g} value={g} className="text-on-surface">{g}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary/70 transition-all duration-300 group-hover:translate-y-[-45%] group-hover:text-secondary pointer-events-none">
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
                <p className="text-sm font-bold text-on-surface-variant tracking-widest uppercase animate-pulse">
                  Analyzing million data points...
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {recommendedTools.map((tool) => (
                  <div key={tool.id} className="text-left h-full">
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
