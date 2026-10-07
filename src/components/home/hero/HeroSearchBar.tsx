"use client";

import { Search } from "lucide-react";

export function HeroSearchBar() {
  const triggerCommandPalette = () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      {/* Prominent, clean search box with 8px corners and thin border */}
      <button 
        type="button"
        onClick={triggerCommandPalette}
        className="w-full flex items-center justify-between bg-white border border-[#E5E7EB] hover:border-gray-400 focus:border-[#E11D48] rounded-lg p-2 pl-4 pr-2 shadow-xs transition-colors text-left group"
        aria-label="Search a tool, comparison or goal"
      >
        <div className="flex items-center gap-3 text-[#4B5563] min-w-0 flex-1 mr-3">
          <Search className="w-5 h-5 text-[#4B5563] shrink-0 group-hover:text-[#0A0A0A] transition-colors" />
          <span className="text-sm sm:text-base font-normal text-[#4B5563] truncate">
            Search a tool, comparison or goal
          </span>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-[#F9FAFB] rounded-md border border-[#E5E7EB] text-xs font-mono text-[#4B5563]">
            <span>⌘</span>
            <span>K</span>
          </div>
          <div className="bg-[#E11D48] hover:bg-[#BE123C] text-white rounded-md px-4 py-2 font-medium text-sm transition-colors shadow-none">
            Search
          </div>
        </div>
      </button>
    </div>
  );
}
