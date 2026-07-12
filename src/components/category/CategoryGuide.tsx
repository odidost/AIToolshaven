import type { CategoryTheme } from "@/lib/data/categoryThemes";

export function CategoryGuide({ theme }: { theme: CategoryTheme }) {
  if (!theme.guide || theme.guide.length === 0) return null;

  return (
    <article className="mt-16 mb-16 prose prose-slate dark:prose-invert max-w-none">
      <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm">
        <header className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-fluid-h2 font-bold text-on-surface mb-4">
            The Ultimate Guide to {theme.slug.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
          </h2>
          <p className="text-on-surface-variant text-lg">
            Everything you need to know to choose, implement, and succeed with {theme.slug.replace("-", " ")} tools.
          </p>
        </header>

        <div className="space-y-12">
          {theme.guide.map((section, index) => (
            <section key={index} className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-on-surface mb-4 border-b border-border/50 pb-2 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(var(--category-accent),0.1)] text-[rgb(var(--category-accent))] text-sm font-bold">
                  {index + 1}
                </span>
                {section.title}
              </h3>
              <div className="text-on-surface-variant leading-relaxed text-[15px]">
                {/* Normally this would render markdown from a CMS, but we use simple text/paragraphs for now */}
                {section.content.split('\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
