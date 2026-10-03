"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { createClient } from "@/lib/supabase/client";
import type { User, AuthChangeEvent, Session } from "@supabase/supabase-js";

export function HeaderAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();

    async function fetchUser() {
      try {
        const response = await supabase.auth.getUser();
        if (response.data?.user) {
          setUser(response.data.user);
        }
      } catch {
        // Ignore session lookup failures
      }
    }

    fetchUser();

    const { data } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
      setUser(session?.user ?? null);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  if (user) {
    return (
      <div className="hidden md:flex items-center gap-4">
        <Link 
          href="/dashboard/bookmarks" 
          className="text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors" 
          title="Bookmarks" 
          aria-label="Bookmarks"
        >
          <span className="material-symbols-outlined text-[22px]">favorite</span>
        </Link>
        <Link 
          href="/dashboard" 
          className="text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors" 
          title="Dashboard" 
          aria-label="Dashboard"
        >
          <span className="material-symbols-outlined text-[22px]">person</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-2">
      <Link 
        href="/login" 
        className="px-3 py-1.5 text-xs sm:text-sm font-medium text-[#4B5563] hover:text-[#E11D48] transition-colors"
      >
        Log In
      </Link>
      <Link 
        href="/signup" 
        className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md border border-[#E5E7EB] bg-white text-[#0A0A0A] hover:bg-[#FFF1F2] hover:border-[#FECDD3] hover:text-[#E11D48] transition-colors"
      >
        Sign Up
      </Link>
    </div>
  );
}
