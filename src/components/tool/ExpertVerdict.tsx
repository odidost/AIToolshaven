import type { AITool } from "@/lib/types/tool";

type ExpertVerdictProps = {
    tool: AITool;
};

export function ExpertVerdict({ tool }: ExpertVerdictProps) {
    if (!tool.editorial?.verdict) {
        return null;
    }

    const scores = {
        easeOfUse: typeof tool.easeOfUse === 'number' && !isNaN(tool.easeOfUse) ? tool.easeOfUse : 4.6,
        features: typeof tool.featureRating === 'number' && !isNaN(tool.featureRating) ? tool.featureRating : 4.4,
        value: typeof tool.valueForMoney === 'number' && !isNaN(tool.valueForMoney) ? tool.valueForMoney : 4.2,
        support: typeof tool.support === 'number' && !isNaN(tool.support) ? tool.support : 4.0,
        ai: typeof tool.performance === 'number' && !isNaN(tool.performance) ? tool.performance : 4.7
    };

    const overallScore = ((scores.easeOfUse + scores.features + scores.value + scores.support + scores.ai) / 5).toFixed(1);

    let metrics = [
        { label: "Ease of Use", value: scores.easeOfUse },
        { label: "Features", value: scores.features },
        { label: "Value for Money", value: scores.value },
        { label: "Customer Support", value: scores.support },
        { label: "AI Capabilities", value: scores.ai },
    ];

    if (tool.slug === 'design-com') {
        metrics = [
            { label: "Ease of Use", value: scores.easeOfUse },
            { label: "Template Variety & Quality", value: scores.features },
            { label: "Brand Kit Integration", value: scores.ai },
            { label: "Value for Money", value: scores.value },
            { label: "Output Quality", value: scores.support },
        ];
    }

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
                        
                        <h2 className="text-fluid-h3 animate-in fade-in slide-in-from-bottom-4 duration-700 font-bold mb-6">Our Verdict on {tool.name}</h2>
                        
                        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-4" dangerouslySetInnerHTML={{ __html: tool.editorial.verdict }} />
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
                            {metrics.map(metric => (
                                <div key={metric.label}>
                                    <div className="flex justify-between text-sm mb-1.5">
                                        <span className="text-slate-300">{metric.label}</span>
                                        <span className="font-bold">{metric.value.toFixed(1)}</span>
                                    </div>
                                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" 
                                            style={{ width: `${(metric.value / 5) * 100}%` }}
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
