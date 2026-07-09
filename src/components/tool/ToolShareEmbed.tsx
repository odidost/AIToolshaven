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
  const roundedRating = Math.round(tool.rating);
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
    badge: `<div style="display:inline-block;border:1px solid #E8ECF3;border-radius:16px;padding:16px;background-color:#FFFFFF;text-align:center;box-shadow:0 4px 20px rgba(15,23,42,0.04);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;width:200px;box-sizing:border-box;">
  <div style="display:flex;align-items:center;justify-content:center;gap:4px;color:#F59E0B;font-size:14px;margin-bottom:8px;line-height:1;">
    <span style="letter-spacing:1px;">${starsString}</span>
    <span style="color:#111827;font-weight:600;font-size:13px;margin-left:2px;">${tool.rating}</span>
  </div>
  <a href="${toolUrl}" target="_blank" style="text-decoration:none;display:block;">
    <h4 style="margin:0 0 6px 0;font-size:16px;font-weight:bold;color:#111827;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${tool.name}</h4>
  </a>
  <div style="font-size:11px;color:#6B7280;">
    Verified on <a href="${baseUrl}" target="_blank" style="color:#7C3AED;text-decoration:none;font-weight:600;">AIToolsHaven</a>
  </div>
</div>`,
  };

  return (
    <section className={cn("w-full my-12", className)}>
      <div className="bg-gradient-to-br from-[#F0EDFF] via-[#F5F7FB] to-[#E0EBFF] rounded-[24px] border border-primary/15 p-6 md:p-8 shadow-sm relative overflow-hidden">
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
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3">
                  Select Embed Format
                </label>
                <div className="flex flex-wrap gap-1.5 bg-surface-secondary/60 p-1.5 rounded-xl border border-border/50 max-w-max select-none">
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
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border/80 pt-6 lg:pt-0 lg:pl-8">
              <EmbedPreview format={embedFormat} tool={tool} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
