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
            href={`/goal/${slug}`}
            className="group block"
        >
            <div className="bg-surface-container border border-outline rounded-2xl p-6 hover:border-primary transition-all hover:-translate-y-1">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                    {icon}
                </span>

                <h3 className="font-bold text-on-surface mb-2">
                    {title}
                </h3>

                <p className="text-sm text-on-surface-variant">
                    {count} tools
                </p>
            </div>
        </Link>
    );
}