type Feature = {
    title: string;
    description: string;
    icon: string;
};

type FeatureCardProps = {
    feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <div className="group flex flex-col justify-between rounded-[24px] border border-border/50 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-primary/30 hover:shadow-md relative overflow-hidden">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150 pointer-events-none" />
            
            <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">
                        {feature.icon || 'auto_awesome'}
                    </span>
                </div>

                <h3 className="mb-4 text-xl font-bold tracking-tight text-on-surface">
                    {feature.title}
                </h3>

                <p className="leading-relaxed text-on-surface-variant mb-6">
                    {feature.description || `Enhance your workflow with ${feature.title.toLowerCase()}. This feature simplifies complex tasks, ensuring better accuracy and faster results without requiring extensive technical knowledge.`}
                </p>
            </div>

            <div className="mt-auto border-t border-border/50 pt-5">
                <p className="text-sm font-medium text-primary flex items-start gap-2">
                    <span className="material-symbols-outlined text-[18px] shrink-0">check_circle</span>
                    <span>Real-world benefit: Saves hours of manual work and improves overall efficiency.</span>
                </p>
            </div>
        </div>
    );
}