import type { GoalDetails } from "@/lib/data/goal-details";

type GoalAlternativesProps = {
    alternatives: GoalDetails["alternatives"];
};

export function GoalAlternatives({ alternatives }: GoalAlternativesProps) {
    if (!alternatives || alternatives.length === 0) return null;

    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Alternative Workflows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {alternatives.map((alt, index) => (
                    <div key={index} className="rounded-2xl border border-outline bg-surface p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-secondary text-2xl">alt_route</span>
                            <h3 className="text-lg font-bold">{alt.name}</h3>
                        </div>
                        <p className="text-on-surface-variant mb-6 text-sm">
                            {alt.description}
                        </p>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-3">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {alt.stack.map((tool) => (
                                    <span key={tool} className="inline-flex items-center rounded-md bg-secondary-container/30 px-2.5 py-1 text-xs font-medium text-on-secondary-container">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
