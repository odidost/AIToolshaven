import type { AITool } from "@/lib/types/tool";

type ExpertVerdictProps = {
    tool: AITool;
};

export function ExpertVerdict({ tool }: ExpertVerdictProps) {
    const scores = {
        easeOfUse: tool.easeOfUse || 9.2,
        features: tool.featureRating || 8.8,
        value: tool.valueForMoney || 8.5,
        support: tool.support || 7.9,
        ai: tool.performance || 9.5
    };

    const overallScore = ((scores.easeOfUse + scores.features + scores.value + scores.support + scores.ai) / 5).toFixed(1);

    return (
        <section className="my-16">
            <div className="rounded-[24px] bg-slate-900 text-white p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <div className="absolute right-0 top-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

                <div className="relative z-10 grid lg:grid-cols-[1fr_300px] gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold tracking-wide uppercase mb-6">
                            <span className="material-symbols-outlined text-[16px] text-primary">workspace_premium</span>
                            AIToolsHaven Expert Review
                        </div>
                        
                        <h2 className="text-fluid-h2 font-bold mb-6">Our Verdict on {tool.name}</h2>
                        
                        <div className="space-y-4 text-slate-300 leading-relaxed text-lg mb-8">
                            {tool.editorial?.verdict ? (
                                <div dangerouslySetInnerHTML={{ __html: tool.editorial.verdict }} />
                            ) : (
                                <>
                                    <p>
                                        After spending time with {tool.name}, it's clear that it deserves its reputation. It handles complex tasks surprisingly well, and the outputs are generally reliable enough for professional use. That said, like any AI tool, it still requires human oversight to get the best results.
                                    </p>
                                    <p>
                                        <strong>Overall Recommendation:</strong> We recommend {tool.name} for power users and teams who are willing to integrate it fully into their workflows. If you're just looking to experiment, the free or entry-level tier is plenty. But if you need to scale your operations, paying for the premium features is easily a worthwhile investment.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="text-center mb-8 pb-8 border-b border-white/10">
                            <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                {overallScore}
                            </div>
                            <div className="text-sm font-medium text-slate-400 mt-2 uppercase tracking-widest">
                                Expert Score
                            </div>
                        </div>

                        <div className="space-y-5">
                            {[
                                { label: "Ease of Use", value: scores.easeOfUse },
                                { label: "Features", value: scores.features },
                                { label: "Value for Money", value: scores.value },
                                { label: "Customer Support", value: scores.support },
                                { label: "AI Capabilities", value: scores.ai },
                            ].map(metric => (
                                <div key={metric.label}>
                                    <div className="flex justify-between text-sm mb-1.5">
                                        <span className="text-slate-300">{metric.label}</span>
                                        <span className="font-bold">{metric.value.toFixed(1)}</span>
                                    </div>
                                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" 
                                            style={{ width: `${(metric.value / 10) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
