import { Workflow } from "@/lib/workflows";

export function WorkflowAlternatives({ workflow }: { workflow: Workflow }) {
    if (!workflow.budgetMode && !workflow.premiumMode) return null;

    return (
        <section className="mb-12">
            <h2 className="mb-6 text-2xl font-black text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">swap_horiz</span>
                Alternative Playbooks
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Budget Mode */}
                {workflow.budgetMode && (
                    <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all hover:shadow-md hover:border-green-500/30">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                                <span className="material-symbols-outlined text-xl">savings</span>
                            </div>
                            <h3 className="font-bold text-lg text-on-surface">Budget Mode</h3>
                        </div>
                        <p className="text-sm text-on-surface-variant mb-6 h-10">
                            {workflow.budgetMode.description}
                        </p>
                        
                        <div className="space-y-2 mb-6">
                            {workflow.budgetMode.tools.map((tool, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-on-surface bg-surface-secondary px-3 py-2 rounded-lg border border-border/50">
                                    <span className="text-on-surface-variant text-xs">{idx + 1}.</span> {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Premium Mode */}
                {workflow.premiumMode && (
                    <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all hover:shadow-md hover:border-amber-500/30 relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-[radial-gradient(circle,rgba(245,158,11,0.1)_0%,transparent_70%)] pointer-events-none" />
                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                                <span className="material-symbols-outlined text-xl">workspace_premium</span>
                            </div>
                            <h3 className="font-bold text-lg text-on-surface">Premium Mode</h3>
                        </div>
                        <p className="text-sm text-on-surface-variant mb-6 h-10 relative z-10">
                            {workflow.premiumMode.description}
                        </p>
                        
                        <div className="space-y-2 mb-6 relative z-10">
                            {workflow.premiumMode.tools.map((tool, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-on-surface bg-surface-secondary px-3 py-2 rounded-lg border border-border/50">
                                    <span className="text-on-surface-variant text-xs">{idx + 1}.</span> {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
