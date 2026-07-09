import type { GoalDetails } from "@/lib/data/goal-details";

type GoalWorkflowProps = {
    steps: GoalDetails["workflowSteps"];
};

export function GoalWorkflow({ steps }: GoalWorkflowProps) {
    if (!steps || steps.length === 0) return null;

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Recommended AI Workflow</h2>
            <div className="relative border-l-2 border-outline ml-6 space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute -left-[17px] top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold shadow-md ring-4 ring-background">
                            {index + 1}
                        </div>

                        <div className="bg-surface rounded-2xl p-6 border border-outline shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-on-surface-variant leading-relaxed">
                                        {step.purpose}
                                    </p>
                                </div>
                                <div className="shrink-0 flex items-center gap-2 rounded-lg bg-secondary-container text-on-secondary-container px-3 py-1.5 text-sm font-medium">
                                    <span className="material-symbols-outlined text-[18px]">build</span>
                                    {step.tool}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-outline/50">
                                <div className="flex gap-3 items-start">
                                    <span className="material-symbols-outlined text-green-600 mt-0.5">check_circle</span>
                                    <div>
                                        <p className="text-sm font-semibold text-on-surface-variant">Expected Result</p>
                                        <p className="font-medium mt-1">{step.result}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="material-symbols-outlined text-amber-500 mt-0.5">lightbulb</span>
                                    <div>
                                        <p className="text-sm font-semibold text-on-surface-variant">Pro Tip</p>
                                        <p className="text-sm mt-1">{step.tips}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
