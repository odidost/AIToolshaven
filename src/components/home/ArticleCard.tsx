import Link from "next/link";

export function ArticleCard({
    title,
    category,
    slug,
    imageUrl,
    summary,
}: {
    title: string;
    category: string;
    slug: string;
    imageUrl: string;
    summary?: string;
}) {
    return (
        <Link href={`/blog/${slug}`}>
            <div className="bg-surface-container border border-outline rounded-2xl overflow-hidden hover:border-primary transition-all hover:-translate-y-1 h-full flex flex-col group">
                {/* Thumbnail Image */}
                <div className="relative w-full h-48 overflow-hidden bg-muted border-b border-outline">
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 text-xs font-bold bg-background text-on-surface border border-outline px-3 py-1.5 rounded-full shadow-sm">
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2 text-lg leading-snug">
                        {title}
                    </h3>

                    {summary && (
                        <p className="text-sm text-on-surface-variant line-clamp-2 mb-4 leading-relaxed">
                            {summary}
                        </p>
                    )}

                    <div className="flex items-center gap-1.5 text-primary text-sm font-semibold mt-auto">
                        Read Article
                        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                            arrow_forward
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
