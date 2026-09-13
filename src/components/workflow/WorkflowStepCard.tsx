import Link from "next/link";
import { WorkflowStep } from "@/lib/workflows";
import { getToolBySlug } from "@/lib/data/tools-service";
import { resolveToolSlug } from "@/lib/workflow-relations";

export async function WorkflowStepCard({ step, index }: { step: WorkflowStep; index: number }) {
    const primarySlug = resolveToolSlug(step.tool);
    const toolData = await getToolBySlug(primarySlug);

    const isFreeOrFreemium = toolData?.priceModel === "Free" || toolData?.priceModel === "Freemium" || (typeof toolData?.price === 'string' && toolData.price.toLowerCase().includes("free"));

    return (
        <div id={`step-${index + 1}`} className="relative group scroll-mt-24">
            {/* Number Badge */}
            <div className="absolute -left-[54px] top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-glow font-black text-white text-lg border-[4px] border-surface group-hover:scale-110 transition-all group-hover:shadow-glow-primary z-10">
                {index + 1}
            </div>

            {/* Step Card */}
            <div className="rounded-[32px] border border-border bg-surface p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-[1px]">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-border/50 pb-6 mb-6">
                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full inline-block">
                                {step.role}
                            </span>
                            {toolData?.category && (
                                <Link 
                                    href={`/category/${toolData.category}`}
                                    className="text-xs font-semibold text-on-surface-variant hover:text-primary bg-surface-secondary px-2.5 py-0.5 rounded-full border border-border transition-colors flex items-center gap-1"
                                >
                                    <span className="material-symbols-outlined text-[13px]">category</span>
                                    <span>{toolData.category.replace(/-/g, ' ')}</span>
                                </Link>
                            )}
                        </div>
                        <h3 className="text-2xl font-black text-on-surface mt-1 flex items-center gap-2">
                            {step.goal}
                        </h3>
                        <p className="text-base sm:text-lg text-on-surface-variant mt-2 font-normal leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                    
                    {/* Tool Badge */}
                    <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                        {toolData ? (
                            <Link 
                                href={`/tool/${toolData.slug}`} 
                                className="group/tool flex items-center gap-3 bg-surface-secondary hover:bg-surface-secondary/80 border border-border hover:border-primary/50 rounded-2xl p-3 pr-4 transition-all"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold group-hover/tool:scale-105 transition-transform">
                                    <span className="material-symbols-outlined text-xl">auto_awesome</span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                                        <span>Primary Tool</span>
                                        {isFreeOrFreemium && (
                                            <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                                Free Tier
                                            </span>
                                        )}
                                    </div>
                                    <div className="font-bold text-on-surface text-base group-hover/tool:text-primary transition-colors flex items-center gap-1">
                                        <span>{step.tool}</span>
                                        <span className="material-symbols-outlined text-[14px] opacity-0 group-hover/tool:opacity-100 transition-opacity">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div className="flex items-center gap-3 bg-surface-secondary border border-border rounded-2xl p-3 pr-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold">
                                    <span className="material-symbols-outlined text-xl">auto_awesome</span>
                                </div>
                                <div>
                                    <div className="text-xs text-on-surface-variant font-medium">Primary Tool</div>
                                    <div className="font-bold text-on-surface text-base">{step.tool}</div>
                                </div>
                            </div>
                        )}
                        <div className="flex items-center gap-4 text-xs font-semibold text-on-surface-variant mt-1 px-1">
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">schedule</span> {step.estimatedTime}</span>
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">fitness_center</span> {step.difficulty}</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Why This Comes Now */}
                    <div>
                        <h4 className="text-sm font-bold text-on-surface mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary">psychology</span>
                            Why this step comes now
                        </h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed pl-7 border-l-2 border-primary/30 ml-[9px]">
                            {step.whyNow}
                        </p>
                    </div>

                    {/* Editorials: Tips and Mistakes */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {step.expertTip && (
                            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
                                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                                    <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                                    ⚡ Pro Tip
                                </div>
                                <p className="text-sm text-on-surface-variant leading-relaxed">{step.expertTip}</p>
                            </div>
                        )}
                        
                        {step.commonMistake && (
                            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-4">
                                <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-2">
                                    <span className="material-symbols-outlined text-[18px]">warning</span>
                                    Common Mistake
                                </div>
                                <p className="text-sm text-on-surface-variant leading-relaxed">{step.commonMistake}</p>
                            </div>
                        )}
                    </div>

                    {/* Expected Output */}
                    <div className="bg-surface-secondary/50 rounded-2xl p-5 border border-border flex items-start gap-3">
                        <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                        <div>
                            <div className="text-xs font-bold text-on-surface uppercase tracking-wider mb-1">Expected Output</div>
                            <div className="text-sm font-medium text-on-surface-variant">{step.expectedOutput}</div>
                        </div>
                    </div>

                    {/* Alternatives */}
                    {step.alternatives && step.alternatives.length > 0 && (
                        <div className="pt-2">
                            <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3">Alternative Compatible Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {step.alternatives.map((alt) => {
                                    const altSlug = resolveToolSlug(alt);
                                    return (
                                        <Link 
                                            key={alt} 
                                            href={`/tool/${altSlug}`}
                                            className="text-xs font-medium text-on-surface-variant hover:text-primary bg-surface px-3 py-1.5 rounded-lg border border-border hover:border-primary/40 hover:-translate-y-[0.5px] transition-all shadow-xs flex items-center gap-1"
                                        >
                                            <span>{alt}</span>
                                            <span className="material-symbols-outlined text-[12px] opacity-60">arrow_forward</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

