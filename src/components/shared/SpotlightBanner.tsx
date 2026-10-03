import Link from "next/link";
import { HeroSearchBar } from "@/components/home/hero/HeroSearchBar";

export function SpotlightBanner() {
  return (
    <section className="relative w-full bg-white pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 border-b border-[#E5E7EB]">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Subtle, restrained status pill */}
        <div className="inline-flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs font-medium text-[#4B5563] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          <span>Independent &bull; Verified Pricing &bull; Updated Daily</span>
        </div>

        {/* Confident, large headline with tight readable line spacing & ONE understated pale tint highlight */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-[1.08] max-w-3xl font-heading">
          Find, compare, and chain the best{" "}
          <span className="bg-[#FFF1F2] text-[#E11D48] px-2 py-0.5 rounded-md border border-[#FECDD3]/70 font-bold inline-block my-1">
            AI tools
          </span>{" "}
          for real work.
        </h1>

        {/* Specific, human subheadline */}
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-[#4B5563] leading-relaxed font-sans">
          Objective side-by-side benchmarks, true freemium allowances, and multi-tool workflow recipes for developers, creators, and teams.
        </p>

        {/* Prominent, easy-to-use search box */}
        <HeroSearchBar />

        {/* Direct paths into tool categories or comparisons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-2xl">
          <span className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider mr-1">
            Direct routes:
          </span>
          <Link 
            href="/category/coding-assistants" 
            className="px-3 py-1.5 rounded-md text-xs font-medium bg-white border border-[#E5E7EB] text-[#4B5563] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2] transition-colors"
          >
            Coding Assistants
          </Link>
          <Link 
            href="/category/ai-video-generators" 
            className="px-3 py-1.5 rounded-md text-xs font-medium bg-white border border-[#E5E7EB] text-[#4B5563] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2] transition-colors"
          >
            AI Video Generators
          </Link>
          <Link 
            href="/compare-tools" 
            className="px-3 py-1.5 rounded-md text-xs font-medium bg-white border border-[#E5E7EB] text-[#4B5563] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2] transition-colors"
          >
            Head-to-Head Comparisons
          </Link>
          <Link 
            href="/freemium-ai-tools" 
            className="px-3 py-1.5 rounded-md text-xs font-medium bg-white border border-[#E5E7EB] text-[#4B5563] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2] transition-colors"
          >
            800+ Freemium Tools
          </Link>
          <Link 
            href="/category/productivity" 
            className="px-3 py-1.5 rounded-md text-xs font-medium bg-white border border-[#E5E7EB] text-[#4B5563] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2] transition-colors"
          >
            Productivity &amp; RAG
          </Link>
          <Link 
            href="/workflows" 
            className="px-3 py-1.5 rounded-md text-xs font-medium bg-white border border-[#E5E7EB] text-[#4B5563] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2] transition-colors"
          >
            Chained Workflows
          </Link>
        </div>

        {/* Real data signals - clean, flat metric row */}
        <div className="mt-12 pt-8 border-t border-[#E5E7EB] w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold text-[#0A0A0A] font-heading leading-tight">900+</span>
            <span className="text-xs text-[#4B5563] font-medium mt-0.5">Verified AI Tools</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold text-[#0A0A0A] font-heading leading-tight">110+</span>
            <span className="text-xs text-[#4B5563] font-medium mt-0.5">Versus Breakdowns</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold text-[#0A0A0A] font-heading leading-tight">24</span>
            <span className="text-xs text-[#4B5563] font-medium mt-0.5">Specialized Categories</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold text-[#0A0A0A] font-heading leading-tight">100%</span>
            <span className="text-xs text-[#4B5563] font-medium mt-0.5">Hands-On Tested</span>
          </div>
        </div>

      </div>
    </section>
  );
}