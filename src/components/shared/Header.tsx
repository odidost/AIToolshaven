import Link from 'next/link';
import { CommandPalette } from './CommandPalette';
import { MobileSearchTrigger } from './MobileSearchTrigger';
import { BrandLogo } from './BrandLogo';
import { PageContainer } from '../layout/PageContainer';
import { HeaderAuth } from './HeaderAuth';

export function Header() {
  return (
    <header className="w-full bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-40 transition-all">
      <PageContainer className="h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" aria-label="AIToolsHaven Home">
            <BrandLogo size={0.9} />
          </Link>
        </div>
        <div className="flex-1 max-w-md mx-8 relative hidden md:block">
          <CommandPalette />
        </div>
        <nav className="flex items-center gap-3 sm:gap-4">
          <MobileSearchTrigger />
          <Link
            href="/agency"
            className="hidden sm:flex text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary transition-colors items-center gap-1.5 px-2.5 py-1.5 rounded-xl hover:bg-slate-100/60"
          >
            <span>AI Agency</span>
            <span className="font-mono text-[10px] font-bold px-1.5 py-0.2 rounded bg-primary/10 text-primary uppercase">
              Studio
            </span>
          </Link>
          <HeaderAuth />
          <Link href="/submit" className="hidden md:block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-5 py-2.5 rounded-2xl font-medium text-sm shadow-glow hover:shadow-glow-primary hover:-translate-y-0.5 transition-all duration-300">
            Submit a Tool
          </Link>
        </nav>
      </PageContainer>
    </header>
  );
}
