import Link from "next/link";
import type { CategoryTheme } from "@/lib/data/categoryThemes";

export function InternalLinks({ theme }: { theme: CategoryTheme }) {
  if (!theme.internalLinks || theme.internalLinks.length === 0) return null;

  return (
    <section className="mt-10 mb-10">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
        <span className="material-symbols-outlined text-[16px] text-[#E11D48]">link</span>
        <span>Related Resources</span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {theme.internalLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-[#E5E7EB] rounded-md text-xs font-medium text-[#0A0A0A] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2] transition-colors shadow-xs"
          >
            <span>{link.title}</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
