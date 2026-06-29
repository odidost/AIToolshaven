import Link from 'next/link';
import React from 'react';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center text-sm text-on-surface-variant mb-6">
      <Link href="/" className="hover:text-primary transition-colors flex items-center">
        <span className="material-symbols-outlined text-sm">home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="material-symbols-outlined text-sm mx-1 opacity-50">chevron_right</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-on-surface font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
