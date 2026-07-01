type GoalHeroProps = {
    title: string;
    description: string;
    icon: string;
    toolCount: number;
};

export function GoalHero({
    title,
    description,
    icon,
    toolCount,
}: GoalHeroProps) {
    return (
        <section className="mb-12">
            <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
                {icon}
            </span>

            <h1 className="text-4xl font-bold mb-4">
                {title}
            </h1>

            <p className="text-lg text-on-surface-variant max-w-3xl">
                {description}
            </p>

            <div className="mt-6 inline-flex rounded-full bg-primary-container px-4 py-2 text-sm font-semibold">
                {toolCount} AI Tools
            </div>
        </section>
    );
}