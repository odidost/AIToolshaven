"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ToolImage } from "@/components/shared/ToolImage";
import { searchCommandPaletteAction, getInitialCommandPaletteSuggestionsAction, type CommandPaletteItem } from "@/lib/actions/search";

export type CommandPaletteTool = CommandPaletteItem;

type CommandPaletteProps = {
  tools?: CommandPaletteItem[];
};

export function CommandPalette({ tools: initialToolsProp }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [results, setResults] = useState<CommandPaletteItem[]>(initialToolsProp || []);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Load initial suggestions when palette opens
  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);

      if (!initialToolsProp || initialToolsProp.length === 0) {
        let isMounted = true;
        setIsLoading(true);
        getInitialCommandPaletteSuggestionsAction().then((items) => {
          if (isMounted) {
            setResults(items);
            setIsLoading(false);
          }
        }).catch(() => {
          if (isMounted) setIsLoading(false);
        });
        return () => {
          isMounted = false;
        };
      }
    }
  }, [isOpen, initialToolsProp]);

  // Debounced search
  useEffect(() => {
    setSelectedIndex(0);
    if (!isOpen) return;

    if (!search.trim()) {
      if (initialToolsProp && initialToolsProp.length > 0) {
        setResults(initialToolsProp.slice(0, 8));
      } else {
        getInitialCommandPaletteSuggestionsAction().then(setResults).catch(() => {});
      }
      return;
    }

    let isMounted = true;
    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const found = await searchCommandPaletteAction(search);
        if (isMounted) {
          setResults(found);
          setIsLoading(false);
        }
      } catch {
        if (isMounted) setIsLoading(false);
      }
    }, 150);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [search, isOpen, initialToolsProp]);

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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev < results.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        const selected = results[selectedIndex];
        if (selected.type === "category" || selected.url) {
          router.push(selected.url || `/category/${selected.slug}`);
        } else {
          router.push(`/tool/${selected.slug}`);
        }
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, router]);

  const quickPills = [
    { label: "🤖 AI Agents", query: "agents" },
    { label: "✉️ Email", query: "email" },
    { label: "📊 Project Management", query: "project management" },
    { label: "🎬 Video Creation", query: "video" },
    { label: "🎨 Image Generation", query: "image" },
    { label: "💻 Coding Assistants", query: "coding" },
  ];

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full h-10 px-4 rounded-full border border-border bg-surface hover:bg-muted hover:border-border/80 shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-between text-[13px] font-medium text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xl">search</span>
          <span>Search AI tools, categories &amp; guides...</span>
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
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 pointer-events-none">
        <div 
          className="w-full max-w-2xl bg-card rounded-2xl shadow-2xl shadow-primary/10 border border-border overflow-hidden pointer-events-auto flex flex-col max-h-[85vh] ring-1 ring-border/50"
          onClick={e => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center px-4 py-4 border-b border-outline gap-3 bg-surface">
            <span className="material-symbols-outlined text-primary text-2xl">search</span>
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent text-lg focus:outline-none placeholder:text-slate-400"
              placeholder="Search tools, categories, or guides..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {isLoading && (
              <span className="material-symbols-outlined text-sm text-primary animate-spin">
                progress_activity
              </span>
            )}
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
            >
              <kbd className="px-2 py-1 bg-surface-container rounded-md text-xs font-mono border border-outline text-slate-500">ESC</kbd>
            </button>
          </div>

          {/* Quick Suggestion Chips (when search is empty) */}
          {search === "" && (
            <div className="px-4 py-3 bg-surface-container-low border-b border-outline/40">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Popular Categories &amp; Workflows
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickPills.map((pill) => (
                  <button
                    key={pill.label}
                    onClick={() => setSearch(pill.query)}
                    className="px-2.5 py-1 rounded-lg bg-surface hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-outline/60 text-xs font-semibold text-on-surface-variant transition-all duration-200"
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div className="overflow-y-auto p-2">
            {search !== "" && results.length === 0 && !isLoading ? (
              <div className="p-8 text-center text-on-surface-variant">
                No results found for &quot;{search}&quot;. Try searching for a category like &quot;video&quot; or &quot;email&quot;.
              </div>
            ) : (
              <div className="space-y-1">
                {results.map((item, index) => {
                  const isCategory = item.type === "category";

                  return (
                    <div
                      key={item.id || item.slug}
                      className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors ${
                        index === selectedIndex 
                          ? "bg-primary-container border border-primary/20" 
                          : "hover:bg-surface border border-transparent"
                      }`}
                      onClick={() => {
                        if (isCategory || item.url) {
                          router.push(item.url || `/category/${item.slug}`);
                        } else {
                          router.push(`/tool/${item.slug}`);
                        }
                        setIsOpen(false);
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      {isCategory ? (
                        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-xl">{item.icon || "auto_awesome"}</span>
                        </div>
                      ) : (
                        <ToolImage tool={item as any} type="logo" className="w-8 h-8 rounded border border-border object-contain bg-surface shrink-0" />
                      )}

                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center gap-2">
                          <h4 className={`font-bold truncate ${index === selectedIndex ? "text-primary" : "text-on-surface"}`}>
                            {item.name}
                          </h4>
                          {isCategory ? (
                            <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-md text-[10px] uppercase font-extrabold tracking-wider border border-indigo-500/20">
                              Guide &amp; Directory
                            </span>
                          ) : item.priceModel ? (
                            <span className="px-2 py-0.5 bg-surface rounded-md text-[10px] uppercase font-bold text-slate-500 border border-outline">
                              {item.priceModel}
                            </span>
                          ) : null}
                        </div>
                        <p className="text-xs text-on-surface-variant truncate">
                          {item.tagline}
                        </p>
                      </div>

                      {index === selectedIndex && (
                        <span className="material-symbols-outlined text-primary text-sm">
                          keyboard_return
                        </span>
                      )}
                    </div>
                  );
                })}
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
