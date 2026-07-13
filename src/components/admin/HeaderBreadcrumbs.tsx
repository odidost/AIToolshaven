"use client";

import { usePathname } from 'next/navigation';

export function HeaderBreadcrumbs() {
  const pathname = usePathname();
  const pageName = pathname.split('/').pop() || 'Dashboard';
  
  // Clean up page name for display
  const title = pageName === 'cms' ? 'Dashboard' : pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 shrink-0 shadow-sm z-10">
      <div className="text-sm text-slate-500 font-medium">
        AIToolsHaven / <span className="text-slate-900">{title}</span>
      </div>
    </header>
  );
}
