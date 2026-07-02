import Link from 'next/link';
import { categories } from '@/lib/data/categories';

export function CategoryCapsuleBar({ activeSlug }: { activeSlug?: string }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 pt-2 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Link
        href="/"
        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors text-sm border ${!activeSlug
            ? 'bg-primary text-primary-foreground border-primary'
            : 'bg-surface-container text-on-surface hover:bg-surface border-outline hover:border-primary'
          }`}
      >
        <span className="material-symbols-outlined text-sm">home</span>
        All Tools
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors text-sm border ${activeSlug === category.slug
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-surface-container text-on-surface hover:bg-surface border-outline hover:border-primary'
            }`}
        >
          <span className="material-symbols-outlined text-sm">{category.icon}</span>
          {category.name}
        </Link>
      ))}
    </div>
  );
}
