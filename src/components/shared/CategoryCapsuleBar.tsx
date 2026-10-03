import Link from 'next/link';
import { categories } from '@/lib/data/categories';

export function CategoryCapsuleBar({ activeSlug }: { activeSlug?: string }) {
  const mainCategories = categories.filter(c => c.type !== 'subcategory' && !c.parentId);

  return (
    <div className="flex gap-2 overflow-x-auto py-1 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Link
        href="/"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors text-xs snap-start border ${!activeSlug
          ? 'bg-[#E11D48] text-white border-[#E11D48]'
          : 'bg-white border-[#E5E7EB] text-[#4B5563] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2]'
          }`}
      >
        <span className={`material-symbols-outlined text-[15px] ${!activeSlug ? 'text-white' : 'text-[#6B7280]'}`}>home</span>
        All Tools
      </Link>
      {mainCategories.map((category) => {
        const isActive = activeSlug === category.slug;
        return (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors text-xs snap-start border ${isActive
              ? 'bg-[#E11D48] text-white border-[#E11D48]'
              : 'bg-white border-[#E5E7EB] text-[#4B5563] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2]'
              }`}
          >
            <span aria-hidden="true" className={`material-symbols-outlined text-[15px] ${isActive ? 'text-white' : 'text-[#6B7280] group-hover:text-[#E11D48]'}`}>
              {category.icon || "category"}
            </span>
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}