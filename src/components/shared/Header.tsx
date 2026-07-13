import Link from 'next/link';
import { CommandPalette } from './CommandPalette';
import { getAllTools } from '@/lib/queries/tools';
import { BrandLogo } from './BrandLogo';
import { PageContainer } from '../layout/PageContainer';

import { createClient } from '@/lib/supabase/server';
import { Button } from '../ui/button';

export async function Header() {
  const tools = await getAllTools();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return (
    <header className="w-full bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-40 transition-all">
      <PageContainer className="h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="AIToolsHaven Home">
          <BrandLogo size={0.9} />
        </Link>
        <div className="flex-1 max-w-md mx-8 relative hidden md:block">
          <CommandPalette tools={tools} />
        </div>
        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <Link href="/dashboard/bookmarks" className="text-on-surface-variant hover:text-primary hidden md:block">
                <span className="material-symbols-outlined">favorite</span>
              </Link>
              <Link href="/dashboard" className="text-on-surface-variant hover:text-primary hidden md:block">
                <span className="material-symbols-outlined">person</span>
              </Link>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" className="text-on-surface-variant">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button variant="default" className="rounded-2xl">Sign Up</Button>
              </Link>
            </div>
          )}
          <Link href="/submit" className="hidden md:block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-5 py-2.5 rounded-2xl font-medium text-sm shadow-glow hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-300">
            Submit a Tool
          </Link>
        </nav>
      </PageContainer>
    </header>
  );
}
