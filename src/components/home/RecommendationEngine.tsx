"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RecommendationResultCard } from "@/components/home/RecommendationResultCard";
import { fetchRecommendationsAction } from "@/app/actions/recommendations";
import type { AITool } from "@/lib/types/tool";
import { ROLES, GOALS, ROLE_METADATA } from "@/lib/data/goals";

export function RecommendationEngine() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Initializing Engine...");
  const [recommendedTools, setRecommendedTools] = useState<AITool[]>([]);

  useEffect(() => {
    if (step === 2) {
      let isMounted = true;
      setIsLoading(true);
      setLoadingText("Scanning 150+ verified AI models...");

      async function fetchRecommendations() {
        try {
          const results = await fetchRecommendationsAction(role, goal);
          
          if (isMounted) {
            setTimeout(() => {
              if (isMounted) setLoadingText(`Matching benchmarks for ${role}s...`);
            }, 600);

            setTimeout(() => {
              if (isMounted) setLoadingText("Synthesizing stack recommendations...");
            }, 1200);

            setTimeout(() => {
              if (isMounted) {
                setRecommendedTools(results.slice(0, 3));
                setIsLoading(false);
                setStep(3);
              }
            }, 1800);
          }
        } catch (e) {
          if (isMounted) {
            setIsLoading(false);
            setStep(3);
          }
        }
      }

      fetchRecommendations();

      return () => {
        isMounted = false;
      };
    }
  }, [step, role, goal]);

  const handleRoleSelect = (selectedRole: string) => {
    setRole(selectedRole);
    setStep(1);
  };

  const handleGoalSelect = (selectedGoal: string) => {
    setGoal(selectedGoal);
    setStep(2);
  };

  const resetQuiz = () => {
    setStep(0);
    setRole("");
    setGoal("");
    setRecommendedTools([]);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="bg-white rounded-lg border border-[#E5E7EB] p-6 sm:p-10 relative overflow-hidden flex flex-col items-center">
        
        <div className="relative z-10 mx-auto w-full max-w-5xl text-center flex-grow flex flex-col justify-center">

          {/* Badge & Section Header */}
          <div className="inline-flex items-center justify-center gap-1.5 bg-[#F9FAFB] text-[#4B5563] px-3 py-1 rounded-md mb-4 border border-[#E5E7EB] mx-auto text-xs font-medium">
            <span className="material-symbols-outlined text-[16px] text-[#E11D48]">auto_awesome</span>
            <span>AI Tool Matchmaker</span>
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="w-full"
              >
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0A0A0A] tracking-tight mb-2">
                  What best describes you?
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto mb-8 leading-relaxed">
                  Select your role to filter personalized tool recommendations that fit your exact workflow.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
                  {ROLES.map((r) => {
                    const meta = ROLE_METADATA[r];
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() => handleRoleSelect(r)}
                        className="bg-white border border-[#E5E7EB] hover:border-[#E11D48] hover:bg-[#FFF1F2]/20 rounded-lg p-5 flex flex-col items-center justify-center gap-3 transition-colors group"
                      >
                        <span className="text-3xl">{meta?.emoji || '👤'}</span>
                        <span className="font-medium text-sm text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors">{r}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="w-full"
              >
                <div className="mb-4 flex justify-center">
                  <button onClick={() => setStep(0)} className="text-xs font-medium text-[#4B5563] hover:text-[#0A0A0A] flex items-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                    Back to Roles
                  </button>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0A0A0A] tracking-tight mb-2">
                  What's your primary goal, <span className="text-[#E11D48]">{role}</span>?
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto mb-8 leading-relaxed">
                  Choose what you want to accomplish so we can find the exact tools for the job.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto text-left">
                  {(GOALS[role] || []).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => handleGoalSelect(g)}
                      className="bg-white border border-[#E5E7EB] hover:border-[#E11D48] hover:bg-[#FFF1F2]/20 rounded-lg p-4 flex items-center gap-3.5 transition-colors group"
                    >
                      <span className="w-8 h-8 rounded-md bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] group-hover:text-[#E11D48] transition-colors shrink-0">
                        <span className="material-symbols-outlined text-[18px]">target</span>
                      </span>
                      <span className="font-medium text-[#0A0A0A] text-sm flex-1">{g}</span>
                      <span className="material-symbols-outlined text-[#9CA3AF] text-[18px] group-hover:text-[#E11D48] transition-colors">
                        arrow_forward
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -15 }}
                className="w-full flex flex-col items-center justify-center py-16"
              >
                <div className="relative flex items-center justify-center w-16 h-16 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-[#E11D48] border-t-transparent animate-spin"></div>
                  <span className="material-symbols-outlined text-[#E11D48] text-2xl">psychology</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0A0A0A] mb-2">Analyzing Profile &amp; Tools</h3>
                <p className="font-mono text-xs font-semibold text-[#E11D48] tracking-wider uppercase">
                  {loadingText}
                </p>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 px-2 text-left">
                  <div>
                    <span className="text-xs font-medium text-[#4B5563] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Matches Found
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0A0A0A]">
                      Top Matches for: <span className="text-[#E11D48]">{goal}</span>
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="text-xs font-medium text-[#4B5563] hover:text-[#0A0A0A] transition-colors bg-white border border-[#E5E7EB] hover:border-gray-300 px-3 py-1.5 rounded-md flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px]">refresh</span>
                      Start Over
                    </button>
                    <Link
                      href={`/categories`}
                      className="text-xs font-medium text-white bg-[#E11D48] hover:bg-[#BE123C] transition-colors px-3 py-1.5 rounded-md flex items-center gap-1 shadow-none"
                    >
                      Explore Categories
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                  {recommendedTools.length > 0 ? (
                    recommendedTools.map((tool, index) => (
                      <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="h-full"
                      >
                        <RecommendationResultCard tool={tool} role={role} goal={goal} />
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-12 text-center text-[#4B5563] font-medium bg-[#F9FAFB] rounded-lg border border-dashed border-[#E5E7EB]">
                      <span className="material-symbols-outlined text-3xl mb-2 text-gray-400">search_off</span>
                      <p className="text-sm">No tools found matching your selection. Try exploring another combination.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </div>
  );
}
