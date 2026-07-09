"use client";

import { useState } from "react";
import { CopyButton } from "./CopyButton";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: "html" | "md" | "text";
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Simple syntax highlighter for presentation
  const highlightCode = (rawCode: string, lang: string) => {
    // Escape HTML characters first
    let escaped = rawCode
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    if (lang === "html") {
      // Highlight attributes (e.g. href=, src=, width=, loading=)
      escaped = escaped.replace(
        /\b(href|src|width|height|loading|style|target|rel|class)\b=/g,
        '<span class="text-[#60a5fa]">$1</span>='
      );

      // Highlight string literals
      escaped = escaped.replace(
        /&quot;([\s\S]*?)&quot;/g,
        '<span class="text-[#34d399]">&quot;$1&quot;</span>'
      );

      // Highlight tags: opening <tag or </tag>
      escaped = escaped.replace(
        /&lt;([a-zA-Z0-9]+)/g,
        '&lt;<span class="text-[#c084fc] font-medium">$1</span>'
      );
      escaped = escaped.replace(
        /&lt;\/([a-zA-Z0-9]+)&gt;/g,
        '&lt;/<span class="text-[#c084fc] font-medium">$1</span>&gt;'
      );

      // Highlight opening / closing angle brackets
      escaped = escaped.replace(/&lt;/g, '<span class="text-[#94a3b8]">&lt;</span>');
      escaped = escaped.replace(/&gt;/g, '<span class="text-[#94a3b8]">&gt;</span>');
    } else if (lang === "md") {
      // Highlight Markdown link text: [Text]
      escaped = escaped.replace(
        /\[([\s\S]*?)\]/g,
        '<span class="text-[#94a3b8]">[</span><span class="text-[#c084fc] font-semibold">$1</span><span class="text-[#94a3b8]">]</span>'
      );
      // Highlight Markdown link URL: (url)
      escaped = escaped.replace(
        /\(([\s\S]*?)\)/g,
        '<span class="text-[#94a3b8]">(</span><span class="text-[#60a5fa] underline">$1</span><span class="text-[#94a3b8]">)</span>'
      );
    }

    return escaped;
  };

  const highlightedHtml = highlightCode(code, language);
  const linesCount = code.split("\n").filter((line) => line.trim() !== "").length;
  const isCollapsible = linesCount > 4;

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-slate-800 bg-slate-950 text-slate-300 font-mono text-[13px] shadow-sm overflow-hidden flex flex-col transition-all duration-300",
        className
      )}
    >
      {/* Code Header / Action */}
      <div className="absolute top-3 right-3 z-20">
        <CopyButton
          textToCopy={code}
          size="sm"
          className="bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 h-8"
        />
      </div>

      {/* Code Content */}
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          isCollapsible && !isExpanded ? "max-h-[135px]" : "max-h-[800px]"
        )}
      >
        <pre className="p-5 pr-16 overflow-x-auto leading-relaxed select-text">
          <code
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            className="block whitespace-pre select-text"
          />
        </pre>

        {/* Shadow Overlay for Collapsed State */}
        {isCollapsible && !isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Expand/Collapse Toggle Button */}
      {isCollapsible && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center gap-1 w-full py-2 bg-slate-900 hover:bg-slate-800/80 text-xs font-semibold text-slate-400 hover:text-white border-t border-slate-900 transition-colors cursor-pointer select-none"
        >
          <span className="material-symbols-outlined text-[16px]">
            {isExpanded ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </span>
          {isExpanded ? "Collapse Code" : "Expand Code"}
        </button>
      )}
    </div>
  );
}
