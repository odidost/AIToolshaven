import { Workflow } from "@/lib/workflows";

export function WhyThisOrderWorks({ workflow }: { workflow: Workflow }) {
    if (!workflow.whyThisOrder) return null;

    return (
        <section className="mb-12">
            <h2 className="mb-6 text-2xl font-black text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">account_tree</span>
                Why This Order Works
            </h2>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <h3 className="font-bold text-lg text-primary mb-3">The Logic Behind the Workflow</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                            {workflow.whyThisOrder.explanation}
                        </p>
                        
                        <div className="bg-surface/85 backdrop-blur-sm rounded-2xl p-5 border border-border/50 shadow-xs relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-2xl" />
                            <h4 className="font-bold text-sm text-on-surface mb-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-red-500 text-[18px]">warning</span>
                                What Happens If You Skip Steps
                            </h4>
                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                {workflow.whyThisOrder.impact}
                            </p>
                        </div>
                    </div>
                    
                    {/* Visual representation */}
                    <div className="w-full md:w-64 bg-surface rounded-2xl p-5 border border-border/50 shadow-xs flex flex-col gap-3 justify-center shrink-0">
                        <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider text-center mb-1">Data Flow</div>
                        {workflow.meta.steps?.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-full bg-surface-secondary border border-border rounded-xl py-2 px-3 text-center text-xs font-semibold text-on-surface">
                                    {step.role}
                                </div>
                                {idx !== (workflow.meta.steps?.length || 0) - 1 && (
                                    <span className="material-symbols-outlined text-primary text-[20px] my-1">arrow_drop_down</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
