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
            <div className="h-full bg-card border border-border rounded-[20px] p-5 hover:border-primary/30 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150 pointer-events-none" />

                <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white shrink-0">
                        <span className="material-symbols-outlined text-[24px]">
                            {icon}
                        </span>
                    </div>
                    
                    <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                </div>

                <div className="mt-auto border-t border-border/50 pt-4 relative z-10">
                    <p className="text-sm font-medium text-primary flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">build</span>
                        {count} AI tools available
                    </p>
                </div>
            </div>
        </Link>
    );
}
