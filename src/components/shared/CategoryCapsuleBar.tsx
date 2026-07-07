import Link from 'next/link';
import { categories } from '@/lib/data/categories';

export function CategoryCapsuleBar({ activeSlug }: { activeSlug?: string }) {
  return (
    <div className="flex gap-4 overflow-x-auto py-2 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Link
        href="/"
        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 text-[13px] snap-start ${!activeSlug
          ? 'bg-foreground text-background shadow-md'
          : 'bg-surface border border-border text-foreground hover:bg-muted hover:border-border/80 shadow-xs hover:shadow-sm hover:-translate-y-[0.5px]'
          }`}
      >
        <span className={`material-symbols-outlined text-[16px] transition-all duration-200 ${!activeSlug ? 'text-background' : 'text-muted-foreground'}`}>home</span>
        All Tools
      </Link>
      {categories.map((category) => {
        return (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={`group flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 text-[13px] snap-start ${activeSlug === category.slug
              ? `bg-foreground text-background shadow-md`
              : `bg-surface border border-border text-foreground hover:bg-muted hover:border-border/80 shadow-xs hover:shadow-sm hover:-translate-y-[0.5px]`
              }`}
          >
            <span className={`material-symbols-outlined text-[16px] transition-all duration-200 ${activeSlug === category.slug ? 'text-background' : 'text-muted-foreground group-hover:text-foreground'}`}>
              {category.icon}
            </span>
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}