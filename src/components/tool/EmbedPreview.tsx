"use client";

import type { AITool } from "@/lib/types/tool";
import { categories } from "@/lib/data/categories";
import { cn } from "@/lib/utils";
import { ToolImage } from "@/components/shared/ToolImage";
import { BrandLogo } from "@/components/shared/BrandLogo";

interface EmbedPreviewProps {
  format: "html" | "markdown" | "iframe" | "badge";
  tool: AITool;
  className?: string;
}

export function EmbedPreview({ format, tool, className }: EmbedPreviewProps) {
  const toolUrl = `https://aitoolshaven.com/tool/${tool.slug}`;

  // Find human-readable category name
  const categoryName = (() => {
    const found = categories.find((c) => c.id === tool.category || c.slug === tool.category);
    return found ? found.name : tool.category;
  })();

  // Render the filled/empty star system
  const renderStars = (rating: number) => {
    const rounded = Math.round(rating);
    return "★".repeat(rounded) + "☆".repeat(Math.max(0, 5 - rounded));
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
          Live Preview
        </span>
        <span className="text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full">
          {format === "html" ? "HTML" : format === "markdown" ? "Markdown" : format}
        </span>
      </div>

      <div className="border border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center bg-surface-secondary/40 min-h-[220px] transition-all duration-300">
        {format === "html" && (
          <div className="text-center space-y-3">
            <a
              href={toolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:text-secondary font-bold underline transition-colors text-base"
            >
              <span>{tool.name} on AIToolsHaven</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
            <p className="text-[11px] text-on-surface-variant/80 italic">
              Rendered text link style. Links to the canonical tool page.
            </p>
          </div>
        )}

        {format === "markdown" && (
          <div className="text-center space-y-3">
            <a
              href={toolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:text-secondary font-bold underline transition-colors text-base"
            >
              <span>{tool.name} on AIToolsHaven</span>
            </a>
            <p className="text-[11px] text-on-surface-variant/80 italic">
              Standard markdown link rendering.
            </p>
          </div>
        )}

        {format === "iframe" && (
          <div className="w-full flex justify-center">
            {/* The Compact AIToolsHaven Tool Card resembling the iframe output */}
            <div className="w-full max-w-[420px] h-[180px] bg-card rounded-2xl border border-border shadow-sm flex gap-5 items-center p-5 relative overflow-hidden bg-gradient-to-b from-surface to-surface-secondary/30 box-border border-l-4 border-l-primary select-none">
              {/* Tool Logo */}
              <div className="w-[72px] h-[72px] rounded-xl overflow-hidden bg-outline flex-shrink-0 border border-border/80 flex items-center justify-center shadow-xs">
                <ToolImage
                  tool={tool}
                  type="logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tool Info & Details */}
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
                {/* Top Left: Tool name + verified */}
                <div className="flex justify-between items-start gap-1">
                  <h4 className="font-bold text-base text-on-surface flex items-center gap-1 leading-tight truncate">
                    {tool.name}
                    {tool.verified && (
                      <span
                        className="material-symbols-outlined text-primary text-sm align-middle"
                        title="Verified"
                      >
                        verified
                      </span>
                    )}
                  </h4>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 flex-shrink-0">
                    {tool.priceModel}
                  </span>
                </div>

                {/* Center: Categories */}
                <div className="flex justify-center items-center my-1">
                  <span className="text-[10px] text-on-surface-variant bg-surface-secondary/80 px-3 py-1 rounded-full font-medium border border-border/50">
                    {categoryName}
                  </span>
                </div>

                {/* Middle: Rating & Visit Tool */}
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                    <span className="text-[13px] font-bold text-on-surface">{tool.rating}</span>
                    <span className="text-[11px] text-on-surface-variant font-medium">
                      ({tool.reviewCount})
                    </span>
                  </div>

                  <a
                    href={toolUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white text-[11px] font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity shadow-xs"
                  >
                    Visit Tool
                  </a>
                </div>

                {/* Bottom: AI Tools Logo */}
                <div className="flex justify-center border-t border-border/50 pt-2 w-full mt-auto">
                  <BrandLogo size={0.4} className="origin-center" />
                </div>
              </div>
            </div>
          </div>
        )}

        {format === "badge" && (
          <div className="flex flex-col items-center justify-center gap-3">
            {/* The Badge Box */}
            <div className="w-[200px] bg-card rounded-2xl border border-border p-4 shadow-sm text-center flex flex-col items-center select-none bg-gradient-to-b from-surface to-surface-secondary/40 border-t-4 border-t-primary">
              <div className="flex items-center justify-center gap-1 text-[#F59E0B] text-xs font-bold mb-1">
                <span>{renderStars(tool.rating)}</span>
                <span className="text-on-surface ml-1">{tool.rating}</span>
              </div>
              <h4 className="font-bold text-sm text-on-surface mb-2 line-clamp-1">
                {tool.name}
              </h4>
              <div className="text-[10px] text-on-surface-variant border-t border-border w-full pt-2.5 flex flex-col items-center justify-center gap-1">
                <span>Verified on</span>
                <BrandLogo size={0.5} className="origin-top" />
              </div>
            </div>
            <p className="text-[11px] text-on-surface-variant/80 italic text-center">
              Small branded badge suitable for footers or sidebars.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
