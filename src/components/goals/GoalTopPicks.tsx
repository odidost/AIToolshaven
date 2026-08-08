import type { GoalDetails } from "@/lib/data/goal-details";
import { ToolLinkParser } from "@/components/shared/ToolLinkParser";

type GoalTopPicksProps = {
    alternatives: GoalDetails["alternatives"];
    estimatedCost: string;
    allTools: { name: string; slug: string }[];
};

export function GoalTopPicks({ alternatives, estimatedCost, allTools }: GoalTopPicksProps) {
    if (!alternatives || alternatives.length === 0) return null;

    const primaryStack = alternatives[0];
    const secondaryStacks = alternatives.slice(1);

    return (
        <section id="compare" className="mb-16">
            <div className="mb-8 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full shadow-sm border border-amber-100 mb-4">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">Editor's Choice</span>
                </div>
                <h2 className="text-fluid-h2 font-bold text-slate-900 tracking-tight">The Ultimate Starter Stack</h2>
                <p className="text-slate-500 mt-2 text-lg">Don't want to overthink it? Use this battle-tested combination of tools.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-1 shadow-xl overflow-hidden relative">
                {/* Ambient glow in dark card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-[1.8rem] p-8 md:p-12 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-3">{primaryStack.name}</h3>
                            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                {primaryStack.description}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-3">
                                {primaryStack.stack.map((tool, idx) => (
                                    <div key={tool} className="flex items-center">
                                        <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
                                            <ToolLinkParser text={tool} allTools={allTools} />
                                        </span>
                                        {idx < primaryStack.stack.length - 1 && (
                                            <span className="material-symbols-outlined text-slate-500 mx-2">add</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0 w-full md:w-auto bg-black/30 rounded-2xl border border-white/10 p-6 text-center">
                            <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">Estimated Cost</p>
                            <p className="text-3xl font-black text-white">{estimatedCost}</p>
                            <p className="text-sm text-slate-400 mt-1">per month</p>
                            <button className="w-full mt-6 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {secondaryStacks.length > 0 && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {secondaryStacks.map((alt, index) => (
                        <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-slate-800">{alt.name}</h3>
                                <span className="material-symbols-outlined text-slate-300">alt_route</span>
                            </div>
                            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                                {alt.description}
                            </p>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Tech Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {alt.stack.map((tool) => (
                                        <span key={tool} className="inline-flex items-center rounded-lg bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600">
                                            <ToolLinkParser text={tool} allTools={allTools} />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
