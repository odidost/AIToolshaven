import Link from "next/link";
import type { CategoryTheme } from "@/lib/data/categoryThemes";

export function InternalLinks({ theme }: { theme: CategoryTheme }) {
  if (!theme.internalLinks || theme.internalLinks.length === 0) return null;

  return (
    <section className="mt-12 mb-12">
      <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-4">
        Related Resources
      </h3>
      <div className="flex flex-wrap gap-3">
        {theme.internalLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface border border-border rounded-xl text-[13px] font-medium text-on-surface hover:border-[rgba(var(--category-accent),0.5)] hover:text-[rgb(var(--category-accent))] hover:bg-[rgba(var(--category-accent),0.02)] transition-all duration-200 shadow-xs hover:shadow-sm"
          >
            {link.title}
            <span className="material-symbols-outlined text-[14px] opacity-70">arrow_forward</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
