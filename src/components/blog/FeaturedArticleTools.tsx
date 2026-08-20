import React from "react";
import Link from "next/link";
import { ToolImage } from "@/components/shared/ToolImage";
import type { AITool } from "@/lib/types/tool";

interface FeaturedArticleToolsProps {
  tools: AITool[];
  title?: string;
  subtitle?: string;
}

export function FeaturedArticleTools({
  tools,
  title = "Featured Tools Mentioned in this Guide",
  subtitle = "Directly compare pricing, verified ratings, and capabilities in our directory."
}: FeaturedArticleToolsProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="bg-surface-container border border-outline/70 rounded-3xl p-6 sm:p-8 mt-12 mb-12 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-outline/50">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">verified</span>
            <h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">{title}</h3>
          </div>
          {subtitle && (
            <p className="text-sm text-on-surface-variant mt-1">{subtitle}</p>
          )}
        </div>
        <span className="text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full self-start sm:self-center">
          {tools.length} Tools Reviewed
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tool/${tool.slug}`}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-surface border border-outline/60 hover:border-primary/50 transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="w-12 h-12 rounded-xl bg-surface-container border border-outline/40 flex items-center justify-center p-2 shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
              <ToolImage
                tool={tool}
                type="logo"
                alt={`${tool.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors text-base truncate">
                  {tool.name}
                </h4>
                {tool.rating && (
                  <span className="flex items-center gap-0.5 text-xs font-bold text-amber-500 shrink-0">
                    <span className="material-symbols-outlined text-[14px]">star</span>
                    {tool.rating.toFixed(1)}
                  </span>
                )}
              </div>
              
              <p className="text-xs text-on-surface-variant line-clamp-2 mt-1 leading-relaxed">
                {tool.tagline || tool.description}
              </p>

              <div className="flex items-center justify-between mt-3 pt-2 border-t border-outline/30 text-[11px]">
                <span className="font-semibold text-primary">{tool.price || "Freemium"}</span>
                <span className="text-on-surface-variant group-hover:text-primary flex items-center gap-0.5 font-medium transition-colors">
                  View Specs
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
