"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { logout } from '@/app/admin/login/actions';

const cmsNavItems = [
  { label: 'Dashboard', href: '/admin/cms', icon: 'dashboard' },
  { label: 'AI Tools', href: '/admin/cms/tools', icon: 'smart_toy' },
  { label: 'Categories', href: '/admin/cms/categories', icon: 'category' },
  { label: 'Workflows', href: '/admin/cms/workflows', icon: 'account_tree' },
  { label: 'Goals', href: '/admin/cms/goals', icon: 'flag' },
  { label: 'Comparisons', href: '/admin/cms/comparisons', icon: 'compare_arrows' },
  { label: 'Companies', href: '/admin/cms/companies', icon: 'domain' },
  { label: 'Media Library', href: '/admin/cms/media', icon: 'photo_library' },
  { label: 'SEO', href: '/admin/cms/seo', icon: 'search' },
  { label: 'Editorial', href: '/admin/cms/editorial', icon: 'edit_document' },
  { label: 'Users', href: '/admin/cms/users', icon: 'group' },
  { label: 'Analytics', href: '/admin/cms/analytics', icon: 'bar_chart' },
  { label: 'Settings', href: '/admin/cms/settings', icon: 'settings' },
];

export function Sidebar({ userEmail, role }: { userEmail: string; role: string }) {
  const pathname = usePathname();

  // Extract initials
  const initials = userEmail ? userEmail.substring(0, 2).toUpperCase() : 'AD';

  return (
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
        <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-2 mb-2 text-sm text-slate-400 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          View Live Site
        </Link>
        
        <div className="mt-2 flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-800/50">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white truncate" title={userEmail}>{userEmail}</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{role?.replace('_', ' ')}</p>
          </div>
        </div>

        <form action={logout} className="px-4 mt-2">
          <button className="w-full flex items-center justify-center gap-2 text-xs font-medium text-slate-400 hover:text-white py-2 transition-colors">
            <span className="material-symbols-outlined text-[16px]">logout</span>
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
