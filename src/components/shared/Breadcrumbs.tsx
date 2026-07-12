import Link from 'next/link';
import React from 'react';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex flex-wrap items-center text-[13px] font-medium text-on-surface-variant mb-6 tracking-tight bg-primary/5 p-1.5 rounded-2xl border border-border/50">
      <Link href="/" className="px-2 py-1 rounded-xl hover:bg-surface hover:text-on-surface hover:shadow-sm transition-all duration-300 flex items-center">
        <span className="material-symbols-outlined text-[16px]">home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="material-symbols-outlined text-[14px] mx-0.5 opacity-40">chevron_right</span>
          {item.href ? (
            <Link href={item.href} className="px-2 py-1 rounded-xl hover:bg-surface hover:text-on-surface hover:shadow-sm transition-all duration-300">
              {item.label}
            </Link>
          ) : (
            <span className="px-2 py-1 text-on-surface font-semibold">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
