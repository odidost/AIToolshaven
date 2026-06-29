export function OpportunityCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) {
    return (
        <div className="bg-surface-container border border-outline rounded-2xl p-6 hover:border-primary transition-all">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                {icon}
            </span>

            <h3 className="font-bold text-on-surface mb-2">
                {title}
            </h3>

            <p className="text-sm text-on-surface-variant">
                {description}
            </p>
        </div>
    );
}