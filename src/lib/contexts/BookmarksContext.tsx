"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface BookmarksContextType {
  bookmarkedToolIds: string[];
  toggleBookmark: (toolId: string) => void;
  isBookmarked: (toolId: string) => boolean;
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined);

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [bookmarkedToolIds, setBookmarkedToolIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("aith_bookmarks");
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBookmarkedToolIds(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse bookmarks", e);
      }
    }
  }, []);

  const toggleBookmark = (toolId: string) => {
    setBookmarkedToolIds((prev) => {
      let updated;
      if (prev.includes(toolId)) {
        updated = prev.filter((id) => id !== toolId);
      } else {
        updated = [...prev, toolId];
      }
      localStorage.setItem("aith_bookmarks", JSON.stringify(updated));
      return updated;
    });
  };

  const isBookmarked = (toolId: string) => bookmarkedToolIds.includes(toolId);

  return (
    <BookmarksContext.Provider value={{ bookmarkedToolIds, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarksContext);
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarksProvider");
  }
  return context;
}
