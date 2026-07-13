"use client";

import { usePathname } from 'next/navigation';
import { Search, Bell, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GlobalSearch } from './GlobalSearch';

export function TopToolbar({ userEmail }: { userEmail: string }) {
  const pathname = usePathname();
  
  // Format the breadcrumb text nicely
  const pathSegments = pathname.split('/').filter(p => p && p !== 'admin' && p !== 'cms');
  const currentPage = pathSegments.length > 0 
    ? pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1) 
    : 'Dashboard';

  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    }
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 shrink-0 z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <h1 className="text-sm font-semibold text-slate-800">{currentPage}</h1>
        {pathSegments.length > 1 && (
          <>
            <span className="text-slate-400">/</span>
            <span className="text-sm text-slate-600 truncate max-w-[200px]">
              {pathSegments.slice(1).join(' / ')}
            </span>
          </>
        )}
      </div>

      <div className="flex items-center gap-3">
        {/* Global Search Trigger (to be connected to cmdk) */}
        <button 
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors min-w-[240px]"
        >
          <Search size={16} />
          <span>Search anywhere...</span>
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-300 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-500 opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>

        <div className="w-px h-6 bg-slate-200 mx-1" />

        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
        </button>
        
        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <Settings size={18} />
        </button>
      </div>

      <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
