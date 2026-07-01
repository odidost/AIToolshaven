import Link from "next/link";

type GoalProps = {
    title: string;
    icon: string;
    count: number;
    slug: string;
};

export function GoalCard({
    title,
    icon,
    count,
    slug,
}: GoalProps) {
    return (
        <Link
            href={`/goals/${slug}`}
            className="group block h-full"
        >
            <div className="h-full bg-surface-container border border-outline rounded-2xl p-6 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all">

                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                    {icon}
                </span>

                <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="mt-2 text-sm text-on-surface-variant">
                    {count} AI tools
                </p>

            </div>
        </Link>
    );
}