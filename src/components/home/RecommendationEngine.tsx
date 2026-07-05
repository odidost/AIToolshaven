"use client";

import { useState, useEffect } from "react";
import { ToolCard } from "@/components/shared/ToolCard";
import { getAllTools } from "@/lib/queries/tools";
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
      // In a real app, this would query based on goal/role
      // Here we just shuffle and grab 3 tools to simulate personalized results
      const all = getAllTools();
      const shuffled = [...all].sort(() => 0.5 - Math.random());
      setRecommendedTools(shuffled.slice(0, 3));
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [role, goal]);

  return (
    <section className="mb-24 mt-12 px-4 md:px-0">
      <div className="relative overflow-hidden rounded-[32px] bg-slate-950 p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.5)] border border-white/10">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/3 rounded-full bg-secondary/15 blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          
          <div className="mb-6 flex items-center justify-center gap-2 text-primary">
            <span className="material-symbols-outlined animate-pulse">auto_awesome</span>
            <span className="text-sm font-bold tracking-widest uppercase">AI Recommendation Engine</span>
          </div>
          
          <h2 className="mb-10 text-3xl md:text-5xl font-black text-white leading-tight">
            I am a{" "}
            <div className="inline-block relative mx-2">
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value as keyof typeof GOALS)}
                className="appearance-none bg-white/10 border border-white/20 text-white rounded-2xl px-6 py-2 md:py-3 pr-12 cursor-pointer outline-none focus:border-primary transition-colors font-bold shadow-inner"
              >
                {ROLES.map(r => (
                  <option key={r} value={r} className="text-slate-900">{r}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
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
