"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileNavBar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: 'home',
    },
    {
      name: 'Explore',
      href: '/category/all',
      icon: 'explore',
    },
    {
      name: 'Submit',
      href: '/submit',
      icon: 'add_circle',
      highlight: true,
    },
    {
      name: 'Favorites',
      href: '/dashboard/favorites',
      icon: 'favorite',
    },
    {
      name: 'Profile',
      href: '/dashboard',
      icon: 'person',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
      <div className="bg-surface/80 backdrop-blur-xl border-t border-border shadow-[0_-4px_24px_rgba(0,0,0,0.04)] px-2 sm:px-6 py-2 pb-4">
        <nav className="flex items-center justify-between">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative flex flex-col items-center gap-1 flex-1 min-w-0 transition-all duration-300"
              >
                {/* Active Indicator Dot */}
                {isActive && !item.highlight && (
                  <span className="absolute -top-3 w-1.5 h-1.5 rounded-full bg-primary" />
                )}

                {item.highlight ? (
                  <div className="flex flex-col items-center justify-center -mt-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary p-0.5 shadow-lg shadow-primary/30">
                      <div className="w-full h-full bg-surface rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-[32px] text-primary">
                          {item.icon}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <span 
                      className={`material-symbols-outlined text-[24px] transition-all duration-300 ${
                        isActive ? 'text-primary scale-110 drop-shadow-sm' : 'text-on-surface-variant/70'
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span 
                      className={`text-[10px] font-semibold tracking-wide transition-all duration-300 ${
                        isActive ? 'text-primary' : 'text-on-surface-variant/70'
                      }`}
                    >
                      {item.name}
                    </span>
                  </>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
