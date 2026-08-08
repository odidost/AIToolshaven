"use client";

import { useState } from "react";
import type { AITool } from "@/lib/types/tool";
import { ShareButton } from "./ShareButton";
import { CopyButton } from "./CopyButton";
import { CodeBlock } from "./CodeBlock";
import { EmbedPreview } from "./EmbedPreview";
import { cn } from "@/lib/utils";

interface ToolShareEmbedProps {
  tool: AITool;
  className?: string;
}

export function ToolShareEmbed({ tool, className }: ToolShareEmbedProps) {
  const [activeTab, setActiveTab] = useState<"share" | "embed">("embed");
  const [embedFormat, setEmbedFormat] = useState<"html" | "markdown" | "iframe" | "badge">("html");

  const baseUrl = "https://aitoolshaven.com";
  const toolUrl = `${baseUrl}/tool/${tool.slug}`;
  const embedUrl = `${baseUrl}/embed/${tool.slug}`;

  // Generate dynamic embed snippets
  const roundedRating = Math.round(tool.rating || 0);
  const starsString = "★".repeat(roundedRating) + "☆".repeat(Math.max(0, 5 - roundedRating));

  const snippets = {
    html: `<a href="${toolUrl}">
  ${tool.name} on AIToolsHaven
</a>`,
    markdown: `[${tool.name} on AIToolsHaven](${toolUrl})`,
    iframe: `<iframe
  src="${embedUrl}"
  width="420"
  height="180"
  style="border:none;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);"
  loading="lazy">
</iframe>`,
    badge: (() => {
      const rating = Math.min(5, Math.max(0, tool.rating || 0));
      const starsString = "★".repeat(Math.round(tool.rating || 0)) + "☆".repeat(5 - Math.round(tool.rating || 0));
      return `<div style="font-family: system-ui, -apple-system, sans-serif; max-width: 320px; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; background: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
    ${tool.logoUrl ? `<img src="${tool.logoUrl}" alt="${tool.name} logo" style="width: 48px; height: 48px; border-radius: 8px;" />` : ''}
    <div>
      <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: #111827;">${tool.name}</h3>
      <div style="display: flex; align-items: center; gap: 4px; margin-top: 4px;">
        <span style="color: #f59e0b; font-size: 14px;">${starsString}</span>
        <span style="font-size: 12px; color: #6b7280;">(${tool.rating?.toFixed(1) || "0.0"})</span>
      </div>
    </div>
  </div>
  <p style="margin: 0 0 16px 0; font-size: 14px; color: #4b5563; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${tool.description}</p>
  <a href="https://aitoolshaven.com/tool/${tool.slug}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; padding: 8px 0; text-align: center; background: #6366f1; color: white; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 500;">View on AIToolsHaven</a>
</div>`;
    })(),
  };

  return (
    <section className={cn("w-full my-12", className)}>
      <div className="bg-gradient-to-br from-[#F0EDFF] via-[#F5F7FB] to-[#E0EBFF] rounded-[24px] border border-primary/15 p-6 sm:p-8 shadow-sm relative overflow-hidden">
        {/* Soft decorative glow */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 pb-6 border-b border-border/60">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-on-surface mb-1">
              Share & Embed
            </h2>
            <p className="text-sm text-on-surface-variant">
              Promote {tool.name} or embed utility cards and verification badges.
            </p>
          </div>

          {/* Smooth Sliding Pill Tabs */}
          <div className="relative flex bg-surface-secondary p-1 rounded-2xl border border-border/60 w-full sm:w-[240px] h-11 shrink-0 select-none">
            <div
              className="absolute top-1 bottom-1 bg-white rounded-xl shadow-xs transition-all duration-300 ease-out"
              style={{
                left: activeTab === "embed" ? "4px" : "calc(50% + 2px)",
                width: "calc(50% - 6px)",
              }}
            />
            <button
              onClick={() => setActiveTab("embed")}
              className={cn(
                "relative z-10 w-1/2 text-center text-sm font-bold rounded-xl transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                activeTab === "embed" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              Embed
            </button>
            <button
              onClick={() => setActiveTab("share")}
              className={cn(
                "relative z-10 w-1/2 text-center text-sm font-bold rounded-xl transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                activeTab === "share" ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              Share
            </button>
          </div>
        </div>

        {/* Tab 1: Share Section */}
        {activeTab === "share" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Canonical Link Copy Input */}
            <div className="max-w-2xl">
              <label htmlFor="share-url" className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                Tool Page URL
              </label>
              <div className="relative flex items-center">
                <input
                  id="share-url"
                  type="text"
                  readOnly
                  value={toolUrl}
                  className="w-full bg-surface-secondary/70 border border-border rounded-xl pl-4 pr-24 py-3 text-sm font-mono text-on-surface-variant select-all outline-none focus:border-primary/40 focus:bg-white transition-all duration-300"
                />
                <CopyButton
                  textToCopy={toolUrl}
                  size="sm"
                  className="absolute right-1.5 top-1.5 h-8 bg-white"
                />
              </div>
            </div>

            {/* Sharing Platform Row */}
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4">
                Share on Social Networks
              </label>
              <div className="flex flex-wrap gap-4">
                <ShareButton platform="x" url={toolUrl} title={tool.name} tagline={tool.tagline} />
                <ShareButton platform="linkedin" url={toolUrl} title={tool.name} tagline={tool.tagline} />
                <ShareButton platform="facebook" url={toolUrl} title={tool.name} tagline={tool.tagline} />
                <ShareButton platform="whatsapp" url={toolUrl} title={tool.name} tagline={tool.tagline} />
                <ShareButton platform="email" url={toolUrl} title={tool.name} tagline={tool.tagline} />
                <ShareButton platform="native" url={toolUrl} title={tool.name} tagline={tool.tagline} />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Embed Section */}
        {activeTab === "embed" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Left Column: Embed Options & Code Block */}
            <div className="lg:col-span-7 space-y-6 min-w-0">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3">
                  Select Embed Format
                </label>
                <div className="flex flex-wrap gap-1.5 bg-surface-secondary/60 p-1.5 rounded-xl border border-border/50 select-none">
                  {([
                    { id: "html", label: "HTML Link" },
                    { id: "markdown", label: "Markdown" },
                    { id: "iframe", label: "Iframe Card" },
                    { id: "badge", label: "Branded Badge" },
                  ] as const).map((format) => (
                    <button
                      key={format.id}
                      onClick={() => setEmbedFormat(format.id)}
                      className={cn(
                        "px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 outline-none",
                        embedFormat === format.id
                          ? "bg-white text-primary shadow-xs"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-white/40"
                      )}
                    >
                      {format.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Copy Embed Code
                  </label>
                  <span className="text-[10px] text-on-surface-variant/80 font-mono">
                    {embedFormat === "markdown" ? "markdown" : "html"}
                  </span>
                </div>
                <CodeBlock
                  code={snippets[embedFormat]}
                  language={embedFormat === "markdown" ? "md" : "html"}
                  key={embedFormat} // Reset state/height on tab changes
                />
              </div>
            </div>

            {/* Right Column: Live Preview */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border/80 pt-6 lg:pt-0 lg:pl-8 min-w-0">
              <EmbedPreview format={embedFormat} tool={tool} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
