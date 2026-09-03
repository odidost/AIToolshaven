"use client";

import { useState, useMemo } from "react";
import { Article } from "@/lib/articles";
import { ArticleCard } from "@/components/home/ArticleCard";

interface BlogGridWithFilterProps {
  articles: Article[];
}

type TopicFilter = "All" | "Coding" | "Video";

export function BlogGridWithFilter({ articles }: BlogGridWithFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<TopicFilter>("All");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        searchTerm === "" ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTopic =
        selectedTopic === "All" || article.category.toLowerCase() === selectedTopic.toLowerCase();

      return matchesSearch && matchesTopic;
    });
  }, [articles, searchTerm, selectedTopic]);

  const filterButtons: { label: string; value: TopicFilter; icon: string }[] = [
    { label: "All Guides", value: "All", icon: "menu_book" },
    { label: "Coding & AI Agents", value: "Coding", icon: "terminal" },
    { label: "Generative Video & Media", value: "Video", icon: "movie" },
  ];

  return (
    <div className="space-y-8">
      {/* Controls Container */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl bg-surface border border-outline shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
            search
          </span>
          <input
            type="text"
            placeholder="Search guides, tutorials & benchmarks (e.g. cursor, video, agent, vibe)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-surface-secondary/50 border border-border text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface p-1"
              aria-label="Clear search"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2">
          {filterButtons.map((btn) => {
            const isActive = selectedTopic === btn.value;
            return (
              <button
                key={btn.value}
                onClick={() => setSelectedTopic(btn.value)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm scale-102"
                    : "bg-surface-secondary text-on-surface-variant hover:text-on-surface hover:bg-border/60"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{btn.icon}</span>
                <span>{btn.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Counter Badge */}
      <div className="flex items-center justify-between px-2 text-xs font-semibold text-on-surface-variant">
        <span>
          Showing <span className="font-bold text-on-surface">{filteredArticles.length}</span> of {articles.length} Guides
        </span>
        {(searchTerm || selectedTopic !== "All") && (
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedTopic("All");
            }}
            className="text-primary hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              category={article.category}
              slug={article.slug}
              imageUrl={article.imageUrl}
              summary={article.summary}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-surface rounded-3xl border border-dashed border-outline">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
            search_off
          </span>
          <h3 className="text-lg font-bold text-on-surface mb-1">No Guides Found</h3>
          <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-4">
            We couldn&apos;t find any guides matching &quot;{searchTerm}&quot;. Try searching for &quot;video&quot;, &quot;cursor&quot;, or &quot;agent&quot;.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedTopic("All");
            }}
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
