import { GoalBackground } from "@/components/goals/GoalBackground";
import type { GoalDetails } from "@/lib/data/goal-details";

type GoalHeroProps = {
    title: string;
    description: string;
    icon: string;
    toolCount: number;
    details: GoalDetails;
};

export function GoalHero({
    title,
    description,
    icon,
    toolCount,
    details,
}: GoalHeroProps) {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-surface-container/50 border border-outline/50 p-8 md:p-16 mb-12">
            <GoalBackground slug={details.slug} />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-fluid-h2 text-primary ring-1 ring-primary/20">
                            {icon}
                        </span>
                        <div className="inline-flex rounded-full bg-primary-container px-3 py-1 text-sm font-semibold text-on-primary-container">
                            {toolCount} Recommended Tools
                        </div>
                    </div>

                    <h1 className="text-fluid-h1 lg:text-6xl font-bold mb-6 tracking-tight text-on-surface">
                        {title}
                    </h1>

                    <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center gap-2 rounded-xl bg-surface px-4 py-2 border border-outline/50 shadow-sm">
                            <span className="material-symbols-outlined text-on-surface-variant text-lg">timer</span>
                            <span className="text-sm font-medium">{details.estimatedTime}</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-xl bg-surface px-4 py-2 border border-outline/50 shadow-sm">
                            <span className="material-symbols-outlined text-on-surface-variant text-lg">signal_cellular_alt</span>
                            <span className="text-sm font-medium">{details.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-xl bg-surface px-4 py-2 border border-outline/50 shadow-sm">
                            <span className="material-symbols-outlined text-on-surface-variant text-lg">group</span>
                            <span className="text-sm font-medium">{details.bestAudience}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="rounded-full bg-primary px-8 py-3.5 font-semibold text-on-primary shadow-md hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg">
                            Start Workflow
                        </button>
                        <button className="rounded-full bg-surface px-8 py-3.5 font-semibold border border-outline hover:bg-surface-variant transition-colors">
                            Explore Tools
                        </button>
                    </div>
                </div>

                <div className="hidden lg:block w-72 h-72 rounded-3xl bg-surface-container border border-outline/50 shadow-2xl relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                    <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-primary/40 drop-shadow-lg">
                        {icon}
                    </span>
                </div>
            </div>
        </section>
    );
}
