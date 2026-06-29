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
            <div className="bg-surface-container border border-outline rounded-2xl p-5 hover:border-primary transition-all hover:-translate-y-1">
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