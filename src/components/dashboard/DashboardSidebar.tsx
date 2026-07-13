'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '@/app/actions/auth';

const navItems = [
  { label: 'My Library', href: '/dashboard/library', icon: 'collections_bookmark' },
  { label: 'Bookmarks', href: '/dashboard/bookmarks', icon: 'favorite' },
  { label: 'Reviews', href: '/dashboard/reviews', icon: 'star' },
  { label: 'Settings', href: '/dashboard/settings', icon: 'settings' },
];

export function DashboardSidebar({ profile, email }: { profile: any, email: string }) {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="bg-surface-container rounded-2xl border border-outline p-4 md:sticky md:top-24 shadow-sm">
        {/* Profile Section */}
        <div className="flex items-center gap-3 p-3 mb-4 border-b border-outline pb-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm uppercase overflow-hidden">
            {profile?.avatar_url ? (
               <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
               profile?.username?.substring(0, 2) || email?.substring(0, 2) || 'US'
            )}
          </div>
          <div className="overflow-hidden">
            <p className="font-bold text-on-surface text-sm truncate">{profile?.username || 'Anonymous User'}</p>
            <p className="text-xs text-on-surface-variant truncate">{email}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:bg-surface hover:text-on-surface'
                }`}
              >
                <span className={`material-symbols-outlined text-lg ${isActive ? 'text-primary' : ''}`}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout CTA */}
        <div className="mt-6 p-3 border-t border-outline pt-4">
          <form action={logout}>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-destructive/10 text-destructive hover:bg-destructive/20 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors w-full"
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
