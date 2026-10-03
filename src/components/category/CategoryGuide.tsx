import type { CategoryTheme } from "@/lib/data/categoryThemes";
import { categoryGuides } from "@/content/categories";

export function CategoryGuide({ theme }: { theme: CategoryTheme }) {
  // Check if we have a long-form guide component for this slug
  const LongFormGuide = categoryGuides[theme.slug];
  
  // If we do, render the long-form React component directly
  if (LongFormGuide) {
    return (
      <div className="category-deep-dive-content w-full">
        <LongFormGuide />
      </div>
    );
  }

  // Fallback to the array-based theme.guide if it exists
  if (!theme.guide || theme.guide.length === 0) return null;

  return (
    <article className="my-12 category-deep-dive-content">
      <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 md:p-8 shadow-xs">
        <header className="mb-8 border-b border-[#E5E7EB] pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[16px] text-[#E11D48]">auto_stories</span>
            <span>Category Editorial Guide</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight mb-2">
            The Definitive Guide to {theme.slug.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
          </h2>
          <p className="font-sans text-sm text-[#4B5563] max-w-2xl leading-relaxed">
            Everything you need to know to choose, implement, and succeed with {theme.slug.replace("-", " ")} tools.
          </p>
        </header>

        <div className="space-y-8">
          {theme.guide.map((section, index) => (
            <section key={index} className="max-w-4xl">
              <h3 className="font-heading font-bold text-base sm:text-lg text-[#0A0A0A] mb-3 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-md bg-[#FFF1F2] border border-[#FECDD3] text-[#E11D48] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <span>{section.title}</span>
              </h3>
              <div className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed space-y-2.5 pl-9.5">
                {section.content.split('\n').map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
