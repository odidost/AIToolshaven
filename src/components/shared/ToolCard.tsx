import Link from "next/link";
import type { AITool } from "@/lib/types/tool";

export function ToolCard({ tool }: { tool: AITool }) {
  return (
    <Link href={`/tool/${tool.slug}`} className="block group h-full">
      <article className="bg-surface-container rounded-3xl p-7 border border-outline hover:border-primary transition-colors h-full flex flex-col shadow-sm hover:shadow-md">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-outline flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.imageUrl}
              alt={tool.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-2">
            {tool.featured && (
              <div className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">star</span>
                Featured
              </div>
            )}
            <div className="bg-primary-container text-on-primary-container text-xs font-semibold px-2 py-1 rounded-md flex items-center">
              {tool.priceModel}
            </div>
          </div>
        </div>

        <h3 className="font-bold text-lg text-on-surface mb-1 group-hover:text-primary transition-colors">
          {tool.name}

          {tool.verified && (
            <span
              className="material-symbols-outlined text-primary text-sm ml-1 align-middle"
              title="Verified"
            >
              verified
            </span>
          )}
        </h3>

        <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 flex-grow">
          {tool.tagline}
        </p>

        <div className="flex items-center gap-1 mb-4 text-accent">
          <span className="material-symbols-outlined text-base">
            star
          </span>

          <span className="text-sm font-semibold text-on-surface">
            {tool.rating}
          </span>

          <span className="text-xs text-on-surface-variant ml-1">
            ({tool.reviewCount})
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-on-surface-variant bg-surface px-2 py-1 rounded-md border border-outline"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
