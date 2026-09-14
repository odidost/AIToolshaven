"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Copy, Download, Code } from "lucide-react";

export function EmbedBadgeCode() {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<"dark" | "light">("dark");

  const badgeSrc =
    selectedVariant === "dark"
      ? "https://aitoolshaven.com/badges/featured-on-aitoolshaven-dark.svg"
      : "https://aitoolshaven.com/badges/featured-on-aitoolshaven.svg";

  const htmlSnippet = `<a href="https://aitoolshaven.com" target="_blank" rel="noopener noreferrer">
  <img src="${badgeSrc}" alt="Featured on AIToolsHaven" width="220" height="54" />
</a>`;

  const markdownSnippet = `[![Featured on AIToolsHaven](${badgeSrc})](https://aitoolshaven.com)`;

  const handleCopy = (text: string, format: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => {
      setCopiedFormat(null);
    }, 2000);
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              FOUNDER EMBED WIDGETS
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              &ldquo;Featured on AIToolsHaven&rdquo; Badges
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Are you a founder featured in our directory? Embed our official vector badge on your landing page, footer, or GitHub README to showcase verification.
            </p>
          </div>

          {/* Variant Selector */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 self-start sm:self-center">
            <button
              type="button"
              onClick={() => setSelectedVariant("dark")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                selectedVariant === "dark"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Dark Theme
            </button>
            <button
              type="button"
              onClick={() => setSelectedVariant("light")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                selectedVariant === "light"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Light Theme
            </button>
          </div>
        </div>
      </div>

      {/* Preview Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-100 dark:border-slate-800">
        <div
          className={`lg:col-span-5 p-8 sm:p-12 flex flex-col items-center justify-center min-h-[220px] transition-colors ${
            selectedVariant === "dark"
              ? "bg-slate-950"
              : "bg-slate-50 dark:bg-slate-800/40"
          }`}
        >
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 flex items-center justify-center">
            <Image
              src={
                selectedVariant === "dark"
                  ? "/badges/featured-on-aitoolshaven-dark.svg"
                  : "/badges/featured-on-aitoolshaven.svg"
              }
              alt="Featured on AIToolsHaven Badge"
              width={220}
              height={54}
              className="h-auto w-auto max-h-14"
            />
          </div>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={
                selectedVariant === "dark"
                  ? "/badges/featured-on-aitoolshaven-dark.svg"
                  : "/badges/featured-on-aitoolshaven.svg"
              }
              download={`featured-on-aitoolshaven-${selectedVariant}.svg`}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Download SVG
            </a>
          </div>
        </div>

        {/* Snippet Code Tabs */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-900 text-slate-200 flex flex-col justify-between font-mono text-xs">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                <Code className="w-4 h-4 text-primary" /> HTML Embed Code
              </span>
              <button
                type="button"
                onClick={() => handleCopy(htmlSnippet, "html")}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
              >
                {copiedFormat === "html" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy HTML</span>
                  </>
                )}
              </button>
            </div>
            <pre className="overflow-x-auto text-[11px] sm:text-xs text-slate-300 bg-slate-950 p-3.5 rounded-xl border border-slate-800 leading-relaxed">
              <code>{htmlSnippet}</code>
            </pre>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center justify-between pb-2 mb-2">
              <span className="text-slate-400 font-semibold">Markdown (README.md)</span>
              <button
                type="button"
                onClick={() => handleCopy(markdownSnippet, "markdown")}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
              >
                {copiedFormat === "markdown" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Markdown</span>
                  </>
                )}
              </button>
            </div>
            <pre className="overflow-x-auto text-[11px] sm:text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800 leading-relaxed">
              <code>{markdownSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
