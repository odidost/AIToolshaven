"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cmsNavItems = [
  { label: 'Dashboard', href: '/admin/cms', icon: 'dashboard' },
  { label: 'AI Tools', href: '/admin/cms/tools', icon: 'smart_toy' },
  { label: 'Categories', href: '/admin/cms/categories', icon: 'category' },
  { label: 'Workflows', href: '/admin/cms/workflows', icon: 'account_tree' },
  { label: 'Comparisons', href: '/admin/cms/comparisons', icon: 'compare_arrows' },
  { label: 'Goals', href: '/admin/cms/goals', icon: 'flag' },
  { label: 'SEO & Quality', href: '/admin/cms/quality', icon: 'health_and_safety' },
  { label: 'Media Library', href: '/admin/cms/media', icon: 'photo_library' },
  { label: 'Settings', href: '/admin/cms/settings', icon: 'settings' },
  { label: 'Launch Checklist', href: '/admin/cms/launch', icon: 'rocket_launch' },
];

import { BrandLogo } from '@/components/shared/BrandLogo';

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950">
          <Link href="/admin/cms" className="font-black text-xl tracking-tight text-white flex items-center gap-2">
            <BrandLogo variant="white" layout="icon" size={0.7} />
            Editorial OS
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {cmsNavItems.map(item => {
            const isActive = pathname === item.href || (item.href !== '/admin/cms' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-primary' : 'text-slate-500'}`}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            View Live Site
          </Link>
          <div className="mt-4 flex items-center gap-3 px-4">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs font-bold">
              ED
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">Editor In Chief</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header / Breadcrumbs */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 shrink-0 shadow-sm z-10">
          <div className="text-sm text-slate-500 font-medium">
            {/* Super simple breadcrumb for now */}
            AIToolsHaven / <span className="text-slate-900">{pathname.split('/').pop() || 'Dashboard'}</span>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
