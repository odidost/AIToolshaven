import Link from 'next/link';
import { CommandPalette } from './CommandPalette';
import { getAllTools } from '@/lib/queries/tools';
import { BrandLogo } from './BrandLogo';
import { PageContainer } from '../layout/PageContainer';

export function Header() {
  const tools = getAllTools();
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
          <Link href="/dashboard/favorites" className="text-on-surface-variant hover:text-primary hidden md:block">
            <span className="material-symbols-outlined">favorite</span>
          </Link>
          <Link href="/dashboard" className="text-on-surface-variant hover:text-primary hidden md:block">
            <span className="material-symbols-outlined">person</span>
          </Link>
          <Link href="/submit" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-5 py-2.5 rounded-2xl font-medium text-sm shadow-glow hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-300">
            Submit a Tool
          </Link>
        </nav>
      </PageContainer>
    </header>
  );
}
