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
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden pb-4 px-4 flex justify-center pointer-events-none">
      {/* Soft gradient fade behind the pill to ensure readability against complex backgrounds */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none -z-10" />
      
      {/* Glassmorphic Floating Capsule */}
      <div className="pointer-events-auto bg-white/80 backdrop-blur-2xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[2rem] px-2 py-2 flex items-center justify-between w-full max-w-[24rem] mb-[env(safe-area-inset-bottom)] ring-1 ring-black/5 transition-all">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          
          if (item.highlight) {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group relative flex items-center justify-center transition-transform duration-300 active:scale-90 px-1"
                aria-label={item.name}
              >
                <div className="relative flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-gradient-to-tr from-rose-400 via-primary to-orange-400 shadow-[0_8px_20px_rgba(255,95,109,0.4)] overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="material-symbols-outlined text-[28px] text-white transition-transform duration-500 group-hover:rotate-180 drop-shadow-sm">
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
              className="relative flex flex-col items-center justify-center w-14 h-[3.25rem] rounded-[1.25rem] group transition-all duration-300 active:scale-90"
            >
              {/* Active Indicator Glow */}
              <div 
                className={`absolute inset-0 bg-primary/10 rounded-[1.25rem] -z-10 transition-all duration-500 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`} 
              />
              
              <span 
                className={`material-symbols-outlined text-[24px] transition-all duration-500 ease-out ${
                  isActive 
                    ? 'text-primary -translate-y-2' 
                    : 'text-slate-400 group-hover:text-slate-600 group-hover:-translate-y-1'
                }`}
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              
              <span 
                className={`absolute bottom-2 text-[10px] font-bold tracking-wide uppercase transition-all duration-500 ease-out ${
                  isActive 
                    ? 'text-primary opacity-100 translate-y-0' 
                    : 'text-slate-400 opacity-0 translate-y-4'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
