import Link from "next/link";

export function ComparisonCard({
    title,
    slug,
}: {
    title: string;
    slug: string;
}) {
    return (
        <Link
            href={`/compare/${slug}`}
            className="block"
        >
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-hover">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-on-surface">
                        {title}
                    </h3>

                    <span className="material-symbols-outlined text-primary">
                        compare_arrows
                    </span>
                </div>
            </div>
        </Link>
    );
}