"use client";

import { useState, useMemo } from "react";
import { Article } from "@/lib/articles";
import { ArticleCard } from "@/components/home/ArticleCard";

interface BlogGridWithFilterProps {
  articles: Article[];
}

type TopicFilter = "All" | "Productivity" | "Coding" | "Video" | "Research" | "Design" | "Writing";

const INITIAL_VISIBLE_COUNT = 9;
const INCREMENT_COUNT = 9;

export function BlogGridWithFilter({ articles }: BlogGridWithFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<TopicFilter>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

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

  // Handle filter changes and reset pagination
  const handleTopicChange = (topic: TopicFilter) => {
    setSelectedTopic(topic);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedTopic("All");
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + INCREMENT_COUNT);
  };

  const visibleArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  const filterButtons: { label: string; value: TopicFilter; icon: string }[] = [
    { label: "All Guides", value: "All", icon: "menu_book" },
    { label: "Productivity & Slides", value: "Productivity", icon: "slideshow" },
    { label: "Coding & AI Agents", value: "Coding", icon: "terminal" },
    { label: "Video & Media", value: "Video", icon: "movie" },
    { label: "Deep Research", value: "Research", icon: "travel_explore" },
    { label: "Design & UI", value: "Design", icon: "palette" },
    { label: "Writing & Content", value: "Writing", icon: "edit_note" },
  ];

  const hasMore = visibleCount < filteredArticles.length;
  const remainingCount = Math.max(0, filteredArticles.length - visibleCount);

  return (
    <div className="space-y-8">
      {/* Controls Container */}
      <div className="flex flex-col gap-4 p-4 sm:p-5 rounded-3xl bg-surface border border-outline shadow-xs">
        {/* Search Input */}
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
            search
          </span>
          <input
            type="text"
            placeholder="Search 49+ guides, tutorials & benchmarks (e.g. gamma, cursor, video, agent, pitch)..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-surface-secondary/50 border border-border text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => handleSearchChange("")}
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
                onClick={() => handleTopicChange(btn.value)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
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
          Showing <span className="font-bold text-on-surface">{visibleArticles.length}</span> of{" "}
          <span className="font-bold text-on-surface">{filteredArticles.length}</span> Guides
          {filteredArticles.length !== articles.length && (
            <span className="text-on-surface-variant/70"> (filtered from {articles.length} total)</span>
          )}
        </span>
        {(searchTerm || selectedTopic !== "All") && (
          <button
            onClick={handleResetFilters}
            className="text-primary hover:underline font-bold flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            Reset Filters
          </button>
        )}
      </div>

      {/* Articles Grid */}
      {visibleArticles.length > 0 ? (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleArticles.map((article) => (
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

          {/* View More Button Section */}
          {hasMore && (
            <div className="flex flex-col items-center justify-center pt-6 pb-2 gap-3">
              <button
                onClick={handleViewMore}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm shadow-md hover:shadow-lg hover:bg-primary/95 transition-all transform active:scale-98"
              >
                <span>View More Articles</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-primary-foreground/20 text-xs font-bold">
                  +{Math.min(remainingCount, INCREMENT_COUNT)}
                </span>
                <span className="material-symbols-outlined text-lg group-hover:translate-y-0.5 transition-transform">
                  expand_more
                </span>
              </button>
              <p className="text-xs text-on-surface-variant font-medium">
                {remainingCount} more {remainingCount === 1 ? "article" : "articles"} available
              </p>
            </div>
          )}

          {/* End of results indicator */}
          {!hasMore && filteredArticles.length > INITIAL_VISIBLE_COUNT && (
            <div className="text-center py-6 text-xs font-medium text-on-surface-variant/70 border-t border-outline/50 mt-8">
              ✨ You&apos;ve viewed all {filteredArticles.length} guides in this collection
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-surface rounded-3xl border border-dashed border-outline">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
            search_off
          </span>
          <h3 className="text-lg font-bold text-on-surface mb-1">No Guides Found</h3>
          <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-4">
            We couldn&apos;t find any guides matching &quot;{searchTerm}&quot;. Try searching for &quot;gamma&quot;, &quot;cursor&quot;, or &quot;agent&quot;.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

