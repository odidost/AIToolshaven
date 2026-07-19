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
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
      {/* Soft gradient fade above the nav bar to seamlessly blend content */}
      <div className="absolute bottom-full left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none opacity-80" />
      
      {/* Glassmorphic edge-to-edge container */}
      <div className="bg-background/80 backdrop-blur-2xl border-t border-border/40 shadow-[0_-8px_32px_rgba(0,0,0,0.04)] px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3">
        <nav className="flex items-center justify-between max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            
            if (item.highlight) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative flex flex-col items-center justify-center -mt-8 px-2 transition-transform duration-300 active:scale-90"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent p-[2px] shadow-xl shadow-primary/25">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-background transition-colors group-hover:bg-background/90">
                      <span className="material-symbols-outlined text-[30px] text-primary transition-transform duration-300 group-hover:rotate-90">
                        {item.icon}
                      </span>
                    </div>
                  </div>
                  <span className="mt-1.5 text-[10px] font-bold tracking-widest text-primary uppercase">
                    {item.name}
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative flex flex-col items-center justify-center w-16 gap-1 group transition-all duration-300 active:scale-95"
              >
                {/* Active Indicator Glow/Pill */}
                {isActive && (
                  <div className="absolute inset-0 -z-10 bg-primary/10 rounded-xl scale-110" />
                )}
                
                <span 
                  className={`material-symbols-outlined text-[26px] transition-all duration-300 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground group-hover:text-foreground'
                  }`}
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {item.icon}
                </span>
                
                <span 
                  className={`text-[10px] font-semibold tracking-wide transition-all duration-300 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground group-hover:text-foreground'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
