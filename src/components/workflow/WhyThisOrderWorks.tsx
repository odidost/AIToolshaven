import { Workflow } from "@/lib/workflows";

export function WhyThisOrderWorks({ workflow }: { workflow: Workflow }) {
    if (!workflow.whyThisOrder) return null;

    return (
        <section className="mb-12">
            <h2 className="mb-6 text-2xl font-black text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">account_tree</span>
                Architectural Logic: Why This Execution Order Works
            </h2>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                            <span className="material-symbols-outlined text-base">psychology</span>
                            <span>Pipeline Engineering</span>
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl text-on-surface mb-3">
                            Sequential Data Flow & Elimination of Rework
                        </h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                            {workflow.whyThisOrder.explanation}
                        </p>
                        
                        <div className="bg-surface/90 backdrop-blur-sm rounded-2xl p-5 border border-red-500/20 shadow-xs relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-2xl" />
                            <h4 className="font-bold text-sm text-red-600 dark:text-red-400 mb-1.5 flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[18px]">warning</span>
                                What Happens If You Skip or Reorder Steps
                            </h4>
                            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                                {workflow.whyThisOrder.impact}
                            </p>
                        </div>
                    </div>
                    
                    {/* Visual representation */}
                    <div className="w-full md:w-72 bg-surface rounded-2xl p-5 border border-border shadow-xs flex flex-col gap-2.5 justify-center shrink-0">
                        <div className="flex items-center justify-between pb-2 border-b border-border text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                            <span>Sequential Handoff</span>
                            <span className="text-primary font-black">{workflow.meta?.steps?.length || 0} Phases</span>
                        </div>
                        {workflow.meta?.steps?.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <a 
                                    href={`#step-${idx + 1}`}
                                    className="w-full group bg-surface-secondary/70 hover:bg-surface-secondary border border-border/80 hover:border-primary/50 rounded-xl py-2 px-3 text-left transition-all"
                                >
                                    <div className="flex items-center justify-between text-[11px] text-on-surface-variant mb-0.5">
                                        <span className="font-bold text-primary">Phase {idx + 1}</span>
                                        <span className="text-[10px] font-medium">{step.estimatedTime}</span>
                                    </div>
                                    <div className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                                        {step.tool}: <span className="font-medium text-on-surface-variant">{step.role}</span>
                                    </div>
                                </a>
                                {idx !== (workflow.meta?.steps?.length || 0) - 1 && (
                                    <span className="material-symbols-outlined text-primary/70 text-[18px] my-0.5">arrow_downward</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

