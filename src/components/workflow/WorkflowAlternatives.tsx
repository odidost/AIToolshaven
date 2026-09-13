import Link from "next/link";
import { Workflow } from "@/lib/workflows";
import { resolveToolSlug } from "@/lib/workflow-relations";

export function WorkflowAlternatives({ workflow }: { workflow: Workflow }) {
    if (!workflow.budgetMode && !workflow.premiumMode) return null;

    return (
        <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">swap_horiz</span>
                    Alternative Playbooks: Free vs. Pro
                </h2>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant bg-surface-secondary px-3 py-1 rounded-full border border-border">
                    Dual-Stack Cost Model
                </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Budget Mode */}
                {workflow.budgetMode && (
                    <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.03] to-surface p-8 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/40 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                                        <span className="material-symbols-outlined text-xl">savings</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-on-surface">Budget Mode</h3>
                                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">100% Free / Freemium Stack</span>
                                    </div>
                                </div>
                                <span className="text-xs font-black text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                                    $0 Upfront
                                </span>
                            </div>
                            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                                {workflow.budgetMode.description}
                            </p>
                            
                            <div className="space-y-2.5 mb-6">
                                {workflow.budgetMode.tools.map((tool, idx) => {
                                    const slug = resolveToolSlug(tool);
                                    return (
                                        <div key={idx} className="flex items-center justify-between text-sm font-medium text-on-surface bg-surface-secondary/70 hover:bg-surface-secondary px-3.5 py-2.5 rounded-xl border border-border/60 transition-colors">
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-5 h-5 rounded-full bg-surface border border-border flex items-center justify-center text-on-surface-variant text-[11px] font-bold">
                                                    {idx + 1}
                                                </span>
                                                <span className="font-semibold">{tool}</span>
                                            </div>
                                            {slug && (
                                                <Link 
                                                    href={`/tool/${slug}`}
                                                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 flex items-center gap-0.5"
                                                >
                                                    <span>Review</span>
                                                    <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                                                </Link>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Freemium Silo Bridge */}
                        <div className="mt-4 pt-4 border-t border-emerald-500/15">
                            <Link
                                href="/freemium-ai-tools"
                                className="group flex items-center justify-between bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 rounded-2xl p-3.5 transition-all text-xs"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-emerald-600 text-base">verified</span>
                                    <span className="font-bold text-on-surface">Need more $0 AI tools?</span>
                                </div>
                                <span className="font-extrabold text-emerald-600 group-hover:underline flex items-center gap-1">
                                    Browse Freemium Hub
                                    <span className="material-symbols-outlined text-[13px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                )}

                {/* Premium Mode */}
                {workflow.premiumMode && (
                    <div className="rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/[0.03] to-surface p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/40 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute right-0 top-0 w-36 h-36 bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none" />
                        <div>
                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-xl">workspace_premium</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-on-surface">Premium Mode</h3>
                                        <span className="text-xs font-semibold text-primary">Studio & Enterprise Stack</span>
                                    </div>
                                </div>
                                <span className="text-xs font-black text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                    Max Speed
                                </span>
                            </div>
                            <p className="text-sm text-on-surface-variant mb-6 relative z-10 leading-relaxed">
                                {workflow.premiumMode.description}
                            </p>
                            
                            <div className="space-y-2.5 mb-6 relative z-10">
                                {workflow.premiumMode.tools.map((tool, idx) => {
                                    const slug = resolveToolSlug(tool);
                                    return (
                                        <div key={idx} className="flex items-center justify-between text-sm font-medium text-on-surface bg-surface-secondary/70 hover:bg-surface-secondary px-3.5 py-2.5 rounded-xl border border-border/60 transition-colors">
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-5 h-5 rounded-full bg-surface border border-border flex items-center justify-center text-on-surface-variant text-[11px] font-bold">
                                                    {idx + 1}
                                                </span>
                                                <span className="font-semibold">{tool}</span>
                                            </div>
                                            {slug && (
                                                <Link 
                                                    href={`/tool/${slug}`}
                                                    className="text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-0.5"
                                                >
                                                    <span>Review</span>
                                                    <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                                                </Link>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Pro Stack Badge */}
                        <div className="mt-4 pt-4 border-t border-primary/15 relative z-10">
                            <div className="flex items-center justify-between bg-primary/5 border border-primary/15 rounded-2xl p-3.5 text-xs">
                                <div className="flex items-center gap-2 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-primary text-base">bolt</span>
                                    <span>High-Volume Output</span>
                                </div>
                                <span className="font-bold text-primary">
                                    Priority GPU & API Access
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

