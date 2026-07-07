"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { AITool } from "@/lib/types/tool";

type CommandPaletteProps = {
  tools: AITool[];
};

export function CommandPalette({ tools }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Flatten categories/tags into searchable text
  const filteredTools = useMemo(() => {
    return search
      ? tools.filter((tool) => {
          const query = search.toLowerCase();
          return (
            tool.name.toLowerCase().includes(query) ||
            tool.tagline.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.category.toLowerCase().includes(query) ||
            tool.tags.some(tag => tag.toLowerCase().includes(query))
          );
        }).sort((a, b) => {
          const aBoost = (a.featured ? 100 : 0) + (a.popularity || 0);
          const bBoost = (b.featured ? 100 : 0) + (b.popularity || 0);
          return bBoost - aBoost;
        }).slice(0, 8)
      : [];
  }, [search, tools]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearch("");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev < filteredTools.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter" && filteredTools[selectedIndex]) {
        e.preventDefault();
        router.push(`/tool/${filteredTools[selectedIndex].slug}`);
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredTools, selectedIndex, router]);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full h-10 px-4 rounded-full border border-border bg-surface hover:bg-muted hover:border-border/80 shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-between text-[13px] font-medium text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xl">search</span>
          <span>Search AI tools...</span>
        </div>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-surface-container rounded-md text-xs font-mono font-medium border border-outline">
          <span className="text-sm">⌘</span>K
        </kbd>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 pointer-events-none">
        <div 
          className="w-full max-w-2xl bg-card rounded-2xl shadow-2xl shadow-primary/10 border border-border overflow-hidden pointer-events-auto flex flex-col max-h-[80vh] ring-1 ring-border/50"
          onClick={e => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center px-4 py-4 border-b border-outline gap-3 bg-surface">
            <span className="material-symbols-outlined text-primary text-2xl">search</span>
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent text-lg focus:outline-none placeholder:text-slate-400"
              placeholder="Search tools, categories, or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-slate-100 rounded-md transition-colors"
            >
              <kbd className="px-2 py-1 bg-surface-container rounded-md text-xs font-mono border border-outline text-slate-500">ESC</kbd>
            </button>
          </div>

          {/* Results */}
          <div className="overflow-y-auto p-2">
            {search === "" ? (
              <div className="p-8 text-center text-on-surface-variant flex flex-col items-center gap-3">
                <span className="material-symbols-outlined text-4xl opacity-50">magic_button</span>
                <p>Type to search for amazing AI tools.</p>
              </div>
            ) : filteredTools.length === 0 ? (
              <div className="p-8 text-center text-on-surface-variant">
                No results found for &quot;{search}&quot;.
              </div>
            ) : (
              <div className="space-y-1">
                {filteredTools.map((tool, index) => (
                  <div
                    key={tool.id}
                    className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors ${
                      index === selectedIndex 
                        ? "bg-primary-container border border-primary/20" 
                        : "hover:bg-surface border border-transparent"
                    }`}
                    onClick={() => {
                      router.push(`/tool/${tool.slug}`);
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <img 
                      src={tool.logoUrl} 
                      alt={tool.name} 
                      className="w-10 h-10 rounded-lg border border-outline"
                    />
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center gap-2">
                        <h4 className={`font-bold truncate ${index === selectedIndex ? "text-primary" : "text-on-surface"}`}>
                          {tool.name}
                        </h4>
                        <span className="px-2 py-0.5 bg-surface rounded-md text-[10px] uppercase font-bold text-slate-500 border border-outline">
                          {tool.priceModel}
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant truncate">
                        {tool.tagline}
                      </p>
                    </div>
                    {index === selectedIndex && (
                      <span className="material-symbols-outlined text-primary">
                        keyboard_return
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="px-4 py-3 bg-surface border-t border-outline flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded border border-outline bg-surface-container font-sans">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded border border-outline bg-surface-container font-sans">↓</kbd>
                to navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded border border-outline bg-surface-container font-sans">↵</kbd>
                to select
              </span>
            </div>
            <div className="font-medium text-slate-400">
              AIToolsHaven Search
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
