"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RecommendationResultCard } from "@/components/home/RecommendationResultCard";
import { fetchRecommendationsAction } from "@/app/actions/recommendations";
import type { AITool } from "@/lib/types/tool";
import { ROLES, GOALS, QUICK_PERSONAS, ROLE_METADATA } from "@/lib/data/goals";

function CustomSelect({ 
  value, 
  options, 
  onChange, 
  colorClass,
  isRole = false
}: { 
  value: string; 
  options: string[]; 
  onChange: (val: string) => void; 
  colorClass: string;
  isRole?: boolean;
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

  const meta = isRole && ROLE_METADATA[value];

  return (
    <div ref={containerRef} className="relative inline-flex group z-30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 sm:h-16 rounded-2xl sm:rounded-[24px] border ${isOpen ? 'border-[#FF5F6D]/40 shadow-md ring-2 ring-[#FF5F6D]/20' : 'border-black/10 shadow-xs'} bg-white px-5 sm:px-6 pr-12 sm:pr-14 font-heading font-black ${colorClass} transition-all duration-200 hover:border-black/20 hover:shadow-md outline-none text-xl sm:text-2xl md:text-3xl flex items-center gap-2 whitespace-nowrap`}
      >
        {meta && <span className="text-xl sm:text-2xl">{meta.emoji}</span>}
        <span>{value}</span>
        <span className={`material-symbols-outlined absolute right-4 sm:right-5 text-[20px] sm:text-[24px] transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-180 text-primary' : ''}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2.5 left-0 w-max min-w-[260px] sm:min-w-[300px] max-h-[360px] overflow-y-auto bg-white/95 backdrop-blur-3xl border border-black/10 rounded-2xl sm:rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] z-50 p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
          {options.map((opt) => {
            const optMeta = isRole && ROLE_METADATA[opt];
            const isSelected = opt === value;
            return (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`text-left px-4 py-2.5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all duration-150 flex items-center gap-2.5 ${
                  isSelected 
                    ? `bg-[#FF5F6D]/10 text-primary font-black` 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {optMeta && <span className="text-lg">{optMeta.emoji}</span>}
                <span>{opt}</span>
              </button>
            );
          })}
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

  // When role changes, set default goal if current goal is not available for this role
  useEffect(() => {
    const roleGoals = GOALS[role] || [];
    if (!roleGoals.includes(goal)) {
      setGoal(roleGoals[0] || "");
    }
  }, [role]);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setLoadingText("Scanning 150+ verified AI models...");

    async function fetchRecommendations() {
      try {
        const results = await fetchRecommendationsAction(role, goal);
        
        if (isMounted) {
          setTimeout(() => {
            if (isMounted) setLoadingText(`Matching benchmarks for ${role}s...`);
          }, 300);

          setTimeout(() => {
            if (isMounted) setLoadingText("Synthesizing stack recommendations...");
          }, 600);

          setTimeout(() => {
            if (isMounted) {
              setRecommendedTools(results.slice(0, 3));
              setIsLoading(false);
            }
          }, 900);
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

  const handleQuickPersonaSelect = (selectedRole: string, selectedGoal: string) => {
    setRole(selectedRole);
    setGoal(selectedGoal);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Receiving Data Stream Line from Trusted By */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent pointer-events-none hidden xl:block z-0" />

      <section className="bg-gradient-to-b from-white via-white to-[#FF5F6D]/5 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.02)] border border-black/5 p-6 sm:p-10 md:p-14 relative overflow-hidden mt-8">
        
        {/* Subtle Ambient Radial Top Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF5F6D]/10 rounded-full blur-3xl pointer-events-none" />

        {/* AI Scanning Beam */}
        <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 overflow-hidden">
          <div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl animate-ai-scan" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          {/* Badge & Section Header */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-4 shadow-xs border border-primary/20">
            <span className="material-symbols-outlined text-[16px] animate-pulse">auto_awesome</span>
            <span className="text-[11px] font-black uppercase tracking-[0.18em]">AI Tool Recommender</span>
          </div>

          <h2 className="text-fluid-h2 font-heading font-black text-gray-900 tracking-tight mb-3">
            Find Your Perfect AI Tech Stack
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Select your persona and goal below to generate an instant, benchmark-backed 3-tool recommendation stack.
          </p>

          {/* 1-Click Quick Persona Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">
              Quick Personas:
            </span>
            {QUICK_PERSONAS.map((p) => {
              const isActive = role === p.role && goal === p.goal;
              return (
                <button
                  key={p.label}
                  onClick={() => handleQuickPersonaSelect(p.role, p.goal)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#FF5F6D] via-[#FF7A6E] to-[#FF8C69] text-white shadow-md shadow-[#FF5F6D]/20 scale-105"
                      : "bg-white hover:bg-gray-50 text-gray-700 border border-black/5 hover:border-black/15 shadow-2xs hover:scale-102"
                  }`}
                >
                  <span>{p.emoji}</span>
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Sentence Builder */}
          <div className="mb-12 text-2xl sm:text-3xl md:text-4xl font-heading font-black text-gray-900 leading-[1.4] sm:leading-[1.5]">
            <span>I am a </span>
            <div className="mx-1.5 inline-flex align-middle">
              <CustomSelect
                value={role}
                options={ROLES}
                onChange={setRole}
                colorClass="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FF8C69]"
                isRole={true}
              />
            </div>
            <br className="hidden md:block" />
            <span> looking to </span>
            <div className="inline-block relative mx-1.5 mt-3 md:mt-0 align-middle">
              <CustomSelect
                value={goal}
                options={GOALS[role] || []}
                onChange={setGoal}
                colorClass="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C69] to-[#FFC371]"
                isRole={false}
              />
            </div>
          </div>

          {/* Recommendation Results Area */}
          <div className="mt-8 min-h-[380px]">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-[320px] gap-5">
                <div className="relative flex items-center justify-center w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                  <span className="material-symbols-outlined text-primary text-xl animate-pulse">psychology</span>
                </div>
                <p className="font-mono text-xs font-bold text-gray-500 tracking-widest uppercase animate-pulse">
                  {loadingText}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Status Bar */}
                <div className="flex items-center justify-between px-2 text-left">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Top 3 Verified Matches for {role}s
                  </span>
                  <Link
                    href={`/categories`}
                    className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                  >
                    Explore All AI Categories ➔
                  </Link>
                </div>

                {/* 3-Card Stack Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-6 duration-500">
                  {recommendedTools.length > 0 ? (
                    recommendedTools.map((tool) => (
                      <div key={tool.id} className="text-left h-full">
                        <RecommendationResultCard tool={tool} role={role} goal={goal} />
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full py-12 text-center text-gray-500 font-medium bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                      <span className="material-symbols-outlined text-4xl mb-3 text-gray-300">search_off</span>
                      <p>No tools found that perfectly match your selection. Try exploring another combination!</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
