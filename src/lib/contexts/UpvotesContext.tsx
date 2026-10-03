"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type UpvotesContextType = {
  upvotes: Record<string, number>;
  hasUpvoted: (id: string) => boolean;
  toggleUpvote: (id: string) => void;
};

const UpvotesContext = createContext<UpvotesContextType | undefined>(undefined);

// In a real app, this would be fetched from your database
const MOCK_INITIAL_UPVOTES: Record<string, number> = {
  "chatgpt": 12450,
  "claude": 11200,
  "midjourney": 9800,
  "notion": 8450,
  "github-copilot": 7200,
};

export function UpvotesProvider({ children }: { children: ReactNode }) {
  const [userUpvotes, setUserUpvotes] = useState<Set<string>>(new Set());
  const [upvotes, setUpvotes] = useState<Record<string, number>>(MOCK_INITIAL_UPVOTES);

  useEffect(() => {
    // Load user's past upvotes from localStorage
    try {
      const saved = localStorage.getItem("aith_upvotes");
      if (saved) {
        setUserUpvotes(new Set(JSON.parse(saved)));
      }
    } catch (e) {
      console.warn("Could not load upvotes", e);
    }
    
    // Simulate "Live Activity" by randomly incrementing upvotes every few seconds
    const interval = setInterval(() => {
      setUpvotes(prev => {
        const next = { ...prev };
        const keys = Object.keys(next);
        if (keys.length > 0) {
          const randomKey = keys[Math.floor(Math.random() * keys.length)];
          // Only increment 20% of the time to make it feel organic
          if (Math.random() > 0.8) {
            next[randomKey] = (next[randomKey] || 0) + 1;
          }
        }
        return next;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const hasUpvoted = (id: string) => userUpvotes.has(id);

  const toggleUpvote = (id: string) => {
    setUserUpvotes((prev) => {
      const next = new Set(prev);
      const isUpvoting = !next.has(id);
      
      if (isUpvoting) {
        next.add(id);
      } else {
        next.delete(id);
      }
      
      try {
        localStorage.setItem("aith_upvotes", JSON.stringify(Array.from(next)));
      } catch (e) {
        console.warn("Could not save upvotes", e);
      }

      // Optimistic UI update
      setUpvotes(prevUpvotes => {
        // If not in our mock, give it a random starting base
        const currentCount = prevUpvotes[id] || (Math.floor(Math.random() * 500) + 100);
        return {
          ...prevUpvotes,
          [id]: currentCount + (isUpvoting ? 1 : -1)
        };
      });

      return next;
    });
  };

  return (
    <UpvotesContext.Provider value={{ upvotes, hasUpvoted, toggleUpvote }}>
      {children}
    </UpvotesContext.Provider>
  );
}

export function useUpvotes() {
  const context = useContext(UpvotesContext);
  if (context === undefined) {
    throw new Error("useUpvotes must be used within an UpvotesProvider");
  }
  return context;
}
