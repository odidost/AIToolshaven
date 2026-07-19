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
        <Link href={`/blog/${slug}`} className="group h-full block">
            <div className="bg-white rounded-[2rem] border border-black/5 p-4 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col relative overflow-hidden">
                
                {/* Background Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Thumbnail Image Wrapper */}
                <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-slate-100 mb-6 shadow-inner">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Glowing Floating Badge */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="inline-block bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-white">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow px-2 pb-2 z-10">
                    <h3 className="font-black text-xl text-slate-900 mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {title}
                    </h3>

                    {summary && (
                        <p className="text-sm text-slate-500 line-clamp-3 mb-6 leading-relaxed font-medium">
                            {summary}
                        </p>
                    )}

                    {/* Animated CTA */}
                    <div className="flex items-center gap-2 text-slate-900 text-sm font-bold mt-auto group-hover:text-primary transition-colors">
                        Read Article
                        <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-2">
                            arrow_forward
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
