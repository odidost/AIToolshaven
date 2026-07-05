import Link from 'next/link';
import { categories } from '@/lib/data/categories';

export function CategoryCapsuleBar({ activeSlug }: { activeSlug?: string }) {
  return (
    <div className="flex gap-4 overflow-x-auto py-2 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Link
        href="/"
        className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 text-sm snap-start ${
          !activeSlug
            ? 'bg-slate-900 text-white shadow-md scale-105'
            : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5'
        }`}
      >
        <span className="material-symbols-outlined text-[18px]">home</span>
        All Tools
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 text-sm snap-start ${
            activeSlug === category.slug
              ? 'bg-slate-900 text-white shadow-md scale-105'
              : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">{category.icon}</span>
          {category.name}
        </Link>
      ))}
    </div>
  );
}
