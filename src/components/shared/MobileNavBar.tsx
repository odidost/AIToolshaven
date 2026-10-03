"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export function MobileNavBar() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then((res: any) => setUser(res.data?.user || null));
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: any, session: any) => {
      setUser(session?.user || null);
    });
    
    return () => subscription.unsubscribe();
  }, [supabase]);

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: 'home',
    },
    {
      name: 'Explore',
      href: '/categories',
      icon: 'explore',
    },
    {
      name: 'Submit',
      href: '/submit',
      icon: 'add',
      highlight: true,
    },
    {
      name: 'Bookmarks',
      href: '/dashboard/bookmarks',
      icon: 'bookmark',
    },
    {
      name: user ? 'Profile' : 'Account',
      href: user ? '/dashboard' : '/login',
      icon: 'person',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden pb-3 px-4 flex justify-center pointer-events-none">
      {/* Clean restrained floating nav with 8px radius */}
      <div className="pointer-events-auto bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-sm rounded-lg px-2 py-1 flex items-center justify-between w-full max-w-[22rem] mb-[env(safe-area-inset-bottom)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          
          if (item.highlight) {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-center p-1"
                aria-label={item.name}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E11D48] text-white shadow-none">
                  <span className="material-symbols-outlined text-[20px]">
                    {item.icon}
                  </span>
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-12 h-11 rounded-md transition-colors ${
                isActive ? 'text-[#E11D48] bg-[#FFF1F2]' : 'text-[#4B5563] hover:text-[#0A0A0A]'
              }`}
            >
              <span 
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-medium tracking-tight">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
