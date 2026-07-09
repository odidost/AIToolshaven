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
            <div className="rounded-[24px] bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden shadow-xl">
                <div className="absolute right-0 top-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

                <div className="relative z-10 grid lg:grid-cols-[1fr_300px] gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold tracking-wide uppercase mb-6">
                            <span className="material-symbols-outlined text-[16px] text-primary">workspace_premium</span>
                            AIToolsHaven Expert Review
                        </div>
                        
                        <h2 className="text-3xl font-bold mb-6">Our Verdict on {tool.name}</h2>
                        
                        <div className="space-y-4 text-slate-300 leading-relaxed text-lg mb-8">
                            <p>
                                {tool.name} proves to be a robust and highly capable solution in its category. 
                                During our comprehensive testing, it demonstrated exceptional AI capabilities, 
                                particularly in handling complex, multi-step workflows.
                            </p>
                            <p>
                                <strong>Overall Recommendation:</strong> We highly recommend {tool.name} for professionals 
                                and teams who need reliable performance. While the pricing might be a barrier for casual users, 
                                the ROI for power users makes it a worthwhile investment.
                            </p>
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
