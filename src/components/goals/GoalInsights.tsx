import type { GoalDetails } from "@/lib/data/goal-details";

type GoalInsightsProps = {
    bestPractices: GoalDetails["bestPractices"];
    mistakes: GoalDetails["mistakes"];
};

export function GoalInsights({ bestPractices, mistakes }: GoalInsightsProps) {
    const hasPractices = bestPractices && bestPractices.length > 0;
    const hasMistakes = mistakes && mistakes.length > 0;

    if (!hasPractices && !hasMistakes) return null;

    return (
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hasPractices && (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500">verified</span>
                        Best Practices
                    </h2>
                    <div className="space-y-4">
                        {bestPractices.map((practice, index) => (
                            <div key={index} className="rounded-2xl bg-surface border border-outline p-6">
                                <h3 className="font-bold text-lg mb-2">{practice.title}</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">{practice.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {hasMistakes && (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-error">warning</span>
                        Common Mistakes
                    </h2>
                    <div className="space-y-4">
                        {mistakes.map((mistake, index) => (
                            <div key={index} className="rounded-2xl bg-error-container/20 border border-error/20 p-6">
                                <h3 className="font-bold text-lg text-error mb-2">{mistake.title}</h3>
                                <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{mistake.description}</p>
                                <div className="rounded-xl bg-surface p-4 border border-outline/50 flex gap-3">
                                    <span className="material-symbols-outlined text-green-600 shrink-0 text-[20px]">check_circle</span>
                                    <p className="text-sm font-medium text-on-surface">{mistake.howToAvoid}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
