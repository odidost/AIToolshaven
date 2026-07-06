export function WorkflowCard({
    title,
    tools,
    icon,
}: {
    title: string;
    tools: string[];
    icon: string;
}) {
    return (
        <div className="bg-surface-container border border-outline rounded-2xl p-6 hover:border-primary transition-all">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                {icon}
            </span>

            <h3 className="font-bold text-on-surface mb-3">
                {title}
            </h3>

            <p className="text-sm text-on-surface-variant">
                {tools.join(", ")}
            </p>
        </div>
    );
}