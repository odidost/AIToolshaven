"use client";

import React, { useState, useEffect } from "react";
import { List, ChevronDown, AlignLeft } from "lucide-react";
import type { TableOfContentsItem } from "@/lib/blog-archetypes";

interface ArticleTableOfContentsProps {
  items: TableOfContentsItem[];
  variant?: "sidebar" | "inline";
}

export function ArticleTableOfContents({
  items,
  variant = "sidebar",
}: ArticleTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  if (items.length === 0) return null;

  // Mobile / Inline Accordion Variant
  if (variant === "inline") {
    return (
      <details className="lg:hidden mb-8 bg-surface-container-low border border-outline/70 rounded-2xl p-4 group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between cursor-pointer font-bold text-sm text-on-surface list-none">
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-primary" />
            Table of Contents ({items.length} sections)
          </span>
          <ChevronDown className="w-4 h-4 text-on-surface-variant transition-transform group-open:rotate-180" />
        </summary>
        <nav className="mt-3 pt-3 border-t border-outline/50 space-y-2">
          {items.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToAnchor(e, item.id)}
              className="block text-xs font-medium text-on-surface-variant hover:text-primary transition-colors py-1 pl-2 border-l-2 border-transparent hover:border-primary"
            >
              <span className="text-muted-foreground font-mono mr-1.5">{index + 1}.</span>
              {item.title}
            </a>
          ))}
        </nav>
      </details>
    );
  }

  // Desktop Sidebar Variant
  return (
    <div className="bg-surface-container border border-outline rounded-3xl p-6 shadow-xs">
      <h3 className="text-xs font-black uppercase tracking-wider text-on-surface mb-4 flex items-center gap-2">
        <AlignLeft className="w-4 h-4 text-primary" />
        Table of Contents
      </h3>
      <nav className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
        {items.map((item, index) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToAnchor(e, item.id)}
              className={`block text-xs font-medium py-1.5 px-2.5 rounded-lg transition-all line-clamp-1 ${
                isActive
                  ? "bg-primary/10 text-primary font-bold border-l-2 border-primary"
                  : "text-on-surface-variant hover:bg-surface hover:text-on-surface"
              }`}
            >
              <span className="font-mono opacity-60 mr-1.5">{index + 1}.</span>
              {item.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
