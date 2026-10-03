import Link from "next/link";
import Image from "next/image";

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
        <Link href={`/blog/${slug}`} prefetch={false} className="group h-full block">
            <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 hover:border-[#E11D48]/50 hover:shadow-xs transition-all shadow-none h-full flex flex-col">
                
                {/* Thumbnail Image Wrapper */}
                <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden bg-gray-50 mb-4 border border-[#E5E7EB]">
                    <Image 
                        src={imageUrl} 
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 z-20">
                        <span className="inline-block bg-white text-[#4B5563] group-hover:text-[#E11D48] group-hover:bg-[#FFF1F2] group-hover:border-[#FECDD3] text-[11px] font-mono font-medium px-2 py-0.5 rounded border border-[#E5E7EB] transition-colors">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow">
                    <h3 className="font-bold text-sm sm:text-base text-[#0A0A0A] mb-2 group-hover:text-[#E11D48] transition-colors leading-snug line-clamp-2 font-heading">
                        {title}
                    </h3>

                    {summary && (
                        <p className="text-xs text-[#4B5563] line-clamp-2 mb-4 leading-relaxed">
                            {summary}
                        </p>
                    )}

                    {/* Action link */}
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#E11D48] group-hover:text-[#BE123C] transition-colors mt-auto">
                        <span>Read guide</span>
                        <span className="material-symbols-outlined text-[13px] group-hover:translate-x-0.5 transition-transform">
                            arrow_forward
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
