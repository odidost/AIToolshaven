"use client";

import { useState, useEffect } from "react";
import { RecommendationResultCard } from "@/components/home/RecommendationResultCard";
import { getRecommendationsByPersona } from "@/lib/data/tools-service";
import type { AITool } from "@/lib/types/tool";
import { ROLES, GOALS } from "@/lib/data/goals";
import { useRef } from "react";

function CustomSelect({ 
  value, 
  options, 
  onChange, 
  colorClass 
}: { 
  value: string; 
  options: string[]; 
  onChange: (val: string) => void;
  colorClass: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-flex group z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-16 rounded-[24px] border ${isOpen ? 'border-black/20 shadow-md' : 'border-black/10 shadow-sm'} bg-white px-6 pr-14 font-black ${colorClass} transition-all duration-300 hover:border-black/20 hover:shadow-md outline-none text-2xl md:text-3xl flex items-center whitespace-nowrap`}
      >
        {value}
        <span className={`material-symbols-outlined absolute right-5 transition-transform duration-300 opacity-70 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-3 left-0 w-max min-w-[280px] bg-white/95 backdrop-blur-3xl border border-black/10 rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.08)] z-50 overflow-hidden p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`text-left px-5 py-3 rounded-2xl text-lg font-bold transition-all duration-200 ${
                opt === value 
                  ? `bg-slate-50 ${colorClass}` 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function RecommendationEngine() {
  const defaultRole = ROLES[0] || "Developer";
  const [role, setRole] = useState<string>(defaultRole);
  const [goal, setGoal] = useState<string>(GOALS[defaultRole]?.[0] || "");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Initializing Engine...");
  const [recommendedTools, setRecommendedTools] = useState<AITool[]>([]);

  useEffect(() => {
    // Reset goal when role changes
    if (GOALS[role] && GOALS[role].length > 0) {
      setGoal(GOALS[role][0]);
    } else {
      setGoal("");
    }
  }, [role]);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setLoadingText("Analyzing 2,500+ AI Tools...");

    async function fetchRecommendations() {
      try {
        const results = await getRecommendationsByPersona(role, goal);
        
        if (isMounted) {
          setTimeout(() => {
            if (isMounted) setLoadingText(`Finding matches for ${role}s...`);
          }, 400);

          setTimeout(() => {
            if (isMounted) setLoadingText("Synthesizing insights...");
          }, 800);

          setTimeout(() => {
            if (isMounted) {
              setRecommendedTools(results.slice(0, 3));
              setIsLoading(false);
            }
          }, 1200); // 1.2s total "AI thinking" duration
        }
      } catch (e) {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchRecommendations();

    return () => {
      isMounted = false;
    };
  }, [role, goal]);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Receiving Data Stream Line from Trusted By */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent pointer-events-none hidden xl:block z-0" />

      <section className="bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[inset_0_2px_40px_rgba(0,0,0,0.04)] border border-black/5 p-6 sm:p-10 md:p-16 relative overflow-hidden mt-16">
        <div className="w-full relative z-10">

        {/* Neural Network Nodes Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-nodes" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="5" fill="#0F172A" />
                <circle cx="90" cy="90" r="8" fill="#0F172A" />
                <circle cx="90" cy="30" r="4" fill="#0F172A" />
                <path d="M30 30 L90 90 M30 30 L90 30" stroke="#0F172A" strokeWidth="2" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-nodes)" />
          </svg>
        </div>

        {/* AI Scanning Beam */}
        <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 overflow-hidden">
          <div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl animate-ai-scan" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full mb-10 mx-auto shadow-md">
            <span className="material-symbols-outlined animate-pulse text-[18px] text-primary">auto_awesome</span>
            <span className="text-[11px] font-black tracking-[0.2em] uppercase">Insight Engine</span>
          </div>

          <h2 className="mb-12 text-fluid-h2 font-black text-slate-900 leading-[1.3]">
            I am a{" "}
            <div className="mx-2 inline-flex align-middle">
              <CustomSelect
                value={role}
                options={ROLES}
                onChange={setRole}
                colorClass="text-primary"
              />
            </div>
            <br className="hidden md:block" />
            looking to{" "}
            <div className="inline-block relative mx-2 mt-4 md:mt-0 align-middle">
              <CustomSelect
                value={goal}
                options={GOALS[role] || []}
                onChange={setGoal}
                colorClass="text-secondary"
              />
            </div>
          </h2>

          <div className="mt-16 min-h-[420px]">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-[350px] gap-6">
                <div className="relative flex items-center justify-center w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                  <span className="material-symbols-outlined text-primary text-2xl animate-pulse">psychology</span>
                </div>
                <p className="text-sm font-bold text-slate-500 tracking-widest uppercase animate-pulse">
                  {loadingText}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {recommendedTools.length > 0 ? (
                  recommendedTools.map((tool) => (
                    <div key={tool.id} className="text-left h-full">
                      <RecommendationResultCard tool={tool} role={role} goal={goal} />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center text-slate-500 font-medium bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                    <span className="material-symbols-outlined text-4xl mb-3 text-slate-300">search_off</span>
                    <p>No tools found that perfectly match your selection. Try exploring another combination!</p>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
        </div>
      </section>
    </div>
  );
}
