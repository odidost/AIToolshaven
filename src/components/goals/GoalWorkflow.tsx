"use client";

import { useState } from "react";
import type { GoalDetails } from "@/lib/data/goal-details";
import { ToolLinkParser } from "@/components/shared/ToolLinkParser";

type GoalWorkflowProps = {
    steps: GoalDetails["workflowSteps"];
    allTools: { name: string; slug: string }[];
};

export function GoalWorkflow({ steps, allTools }: GoalWorkflowProps) {
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

    if (!steps || steps.length === 0) return null;

    const toggleStep = (index: number) => {
        setCompletedSteps(prev => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    const progressPercentage = Math.round((completedSteps.size / steps.length) * 100);

    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-fluid-h2 font-bold text-slate-900 tracking-tight">Your Action Roadmap</h2>
                    <p className="text-slate-500 mt-1">Check off steps as you go to track your momentum.</p>
                </div>
                <div className="hidden sm:flex items-center gap-4 bg-white px-4 py-2 rounded-2xl border border-black/5 shadow-sm">
                    <span className="text-sm font-bold text-slate-700">{progressPercentage}% Complete</span>
                    <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-primary transition-all duration-500 ease-out" 
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-6 space-y-8">
                {steps.map((step, index) => {
                    const isCompleted = completedSteps.has(index);

                    return (
                        <div key={index} className="relative pl-8 group">
                            {/* Interactive Timeline dot */}
                            <button 
                                onClick={() => toggleStep(index)}
                                className={`absolute -left-[17px] top-6 h-8 w-8 rounded-full flex items-center justify-center font-bold shadow-sm ring-4 ring-background transition-all duration-300 hover:scale-110 ${
                                    isCompleted 
                                        ? "bg-emerald-500 text-white" 
                                        : "bg-white border-2 border-slate-300 text-slate-400 hover:border-primary hover:text-primary"
                                }`}
                            >
                                {isCompleted ? (
                                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                                ) : (
                                    index + 1
                                )}
                            </button>

                            <div 
                                className={`bg-white rounded-3xl p-6 border transition-all duration-300 ${
                                    isCompleted 
                                        ? "border-emerald-500/30 shadow-sm bg-emerald-50/30 opacity-75" 
                                        : "border-black/5 shadow-sm hover:shadow-md hover:border-primary/20"
                                }`}
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div className="flex-1 cursor-pointer" onClick={() => toggleStep(index)}>
                                        <h3 className={`text-xl font-bold mb-2 transition-colors ${isCompleted ? "text-emerald-700 line-through decoration-emerald-300/50" : "text-slate-900"}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {step.purpose}
                                        </p>
                                    </div>
                                    <div className={`shrink-0 flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-bold border transition-colors ${
                                        isCompleted ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-primary/5 text-primary border-primary/10"
                                    }`}>
                                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
                                        <ToolLinkParser text={step.tool} allTools={allTools} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                                    <div className="flex gap-3 items-start p-4 rounded-2xl bg-slate-50 border border-slate-100/50">
                                        <span className={`material-symbols-outlined mt-0.5 ${isCompleted ? "text-emerald-500" : "text-slate-400"}`}>check_circle</span>
                                        <div>
                                            <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Expected Result</p>
                                            <p className={`font-semibold mt-1 text-sm ${isCompleted ? "text-slate-500" : "text-slate-700"}`}>{step.result}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start p-4 rounded-2xl bg-amber-50/50 border border-amber-100/50">
                                        <span className="material-symbols-outlined text-amber-500 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                                        <div>
                                            <p className="text-[11px] font-black uppercase tracking-widest text-amber-600/70">Pro Tip</p>
                                            <p className="text-sm mt-1 text-slate-700 font-medium">{step.tips}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
