'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'My Library', href: '/dashboard/library', icon: 'collections_bookmark' },
  { label: 'Upvoted Tools', href: '/dashboard/favorites', icon: 'favorite' },
  { label: 'Settings', href: '/dashboard/settings', icon: 'settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-surface-container rounded-2xl border border-outline p-4 md:sticky md:top-24 shadow-sm">
            {/* Profile Section */}
            <div className="flex items-center gap-3 p-3 mb-4 border-b border-outline pb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                AE
              </div>
              <div>
                <p className="font-bold text-on-surface text-sm">Alex Engineer</p>
                <p className="text-xs text-on-surface-variant">alex@example.com</p>
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

            {/* Submit CTA */}
            <div className="mt-6 p-3 border-t border-outline pt-4">
              <Link
                href="/submit"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity w-full"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                Submit a Tool
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
