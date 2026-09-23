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
      <Link href="/login">
        <Button variant="ghost" className="text-on-surface-variant">Log In</Button>
      </Link>
      <Link href="/signup">
        <Button variant="default" className="rounded-2xl">Sign Up</Button>
      </Link>
    </div>
  );
}
