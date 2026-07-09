import type { GoalDetails } from "@/lib/data/goal-details";

type GoalMetricsProps = {
    details: GoalDetails;
};

export function GoalMetrics({ details }: GoalMetricsProps) {
    const metrics = [
        {
            label: "Estimated Time",
            value: details.estimatedTime,
            icon: "schedule"
        },
        {
            label: "Skill Level",
            value: details.difficulty,
            icon: "school"
        },
        {
            label: "Budget",
            value: details.estimatedCost,
            icon: "payments"
        },
        {
            label: "Quality",
            value: details.metrics.quality,
            icon: "high_quality"
        },
        {
            label: "Automation",
            value: details.metrics.automation,
            icon: "smart_toy"
        }
    ];

    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">At a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {metrics.map((metric, index) => (
                    <div key={index} className="flex flex-col p-5 rounded-2xl bg-surface border border-outline hover:border-primary/50 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-primary mb-3">{metric.icon}</span>
                        <span className="text-sm text-on-surface-variant mb-1 font-medium">{metric.label}</span>
                        <span className="text-base font-semibold">{metric.value}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
