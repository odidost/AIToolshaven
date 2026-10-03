import Link from 'next/link';
import { CommandPalette } from './CommandPalette';
import { MobileSearchTrigger } from './MobileSearchTrigger';
import { BrandLogo } from './BrandLogo';
import { PageContainer } from '../layout/PageContainer';
import { HeaderAuth } from './HeaderAuth';

export function Header() {
  return (
    <header className="w-full bg-white border-b border-[#E5E7EB] sticky top-0 z-40 transition-colors">
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
            className="hidden sm:flex text-xs sm:text-sm font-medium text-[#4B5563] hover:text-[#0A0A0A] transition-colors items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-[#F9FAFB] border border-transparent hover:border-[#E5E7EB]"
          >
            <span>AI Agency</span>
            <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#FFF1F2] text-[#E11D48] uppercase border border-[#FECDD3]/50">
              Studio
            </span>
          </Link>
          <HeaderAuth />
          <Link href="/submit" className="hidden md:inline-flex items-center justify-center bg-[#E11D48] hover:bg-[#BE123C] text-white px-4 py-2 rounded-md font-medium text-sm transition-colors shadow-none">
            Submit a Tool
          </Link>
        </nav>
      </PageContainer>
    </header>
  );
}
