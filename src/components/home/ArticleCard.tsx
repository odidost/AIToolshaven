import Link from "next/link";

export function ArticleCard({
    title,
    category,
    slug,
}: {
    title: string;
    category: string;
    slug: string;
}) {
    return (
        <Link href={`/blog/${slug}`}>
            <div className="bg-surface-container border border-outline rounded-2xl p-6 hover:border-primary transition-all hover:-translate-y-1 h-full">
                <span className="text-xs bg-primary-container px-3 py-1 rounded-full">
                    {category}
                </span>

                <h3 className="font-bold text-on-surface mt-4 mb-3">
                    {title}
                </h3>

                <div className="flex items-center gap-2 text-primary text-sm">
                    Read Article
                    <span className="material-symbols-outlined text-sm">
                        arrow_forward
                    </span>
                </div>
            </div>
        </Link>
    );
}