"use client";

import React from "react";
import { Search } from "lucide-react";

export function MobileSearchTrigger() {
  const handleOpen = () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  return (
    <button
      type="button"
      onClick={handleOpen}
      className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors border border-slate-200 dark:border-slate-700"
      aria-label="Search tools"
    >
      <Search className="w-4 h-4" />
    </button>
  );
}
