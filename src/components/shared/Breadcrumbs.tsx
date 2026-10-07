import Link from "next/link";
import React from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  // Guard against callers accidentally passing a duplicate root item
  const sanitizedItems = items.filter(
    (item) => item.href !== "/" && item.label !== "Home" && item.label !== "AI Tools Directory"
  );

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center text-xs font-medium text-[#4B5563] mb-6 gap-1.5">
      <Link 
        href="/" 
        title="AIToolsHaven AI Tools Directory"
        className="hover:text-[#E11D48] transition-colors flex items-center gap-1 text-[#6B7280]"
      >
        <span className="material-symbols-outlined text-[15px]">home</span>
        <span>Directory</span>
      </Link>
      
      {sanitizedItems.map((item, index) => (
        <React.Fragment key={index}>
          <span className="material-symbols-outlined text-[14px] text-gray-400">chevron_right</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-[#E11D48] transition-colors text-[#6B7280]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#0A0A0A] font-semibold">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
