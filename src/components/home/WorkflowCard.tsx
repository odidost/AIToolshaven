import Link from "next/link";

export function WorkflowCard({
    title,
    tools,
    icon,
    slug,
}: {
    title: string;
    tools: string[];
    icon: string;
    slug?: string;
}) {
    const CardContent = (
        <div className="group bg-card border border-border rounded-[24px] p-6 hover:border-primary/30 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150 pointer-events-none" />

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined text-[28px]">
                    {icon}
                </span>
            </div>

            <h3 className="font-bold text-lg text-on-surface mb-3 group-hover:text-primary transition-colors relative z-10">
                {title}
            </h3>

            <p className="text-sm text-on-surface-variant leading-relaxed relative z-10">
                Includes: <span className="font-medium text-on-surface">{tools.join(", ")}</span>
            </p>
        </div>
    );

    if (slug) {
        return (
            <Link href={`/workflows/${slug}`} className="block h-full">
                {CardContent}
            </Link>
        );
    }

    return CardContent;
}