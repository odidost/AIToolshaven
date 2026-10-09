import Link from "next/link";
import { categories } from "@/lib/data/categories";

export function CategoryCapsuleBar({ activeSlug }: { activeSlug?: string }) {
  const mainCategories = categories.filter((c) => c.type !== "subcategory" && !c.parentId);

  return (
    <div className="flex gap-2 overflow-x-auto py-2 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Link
        href="/"
        className={`group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-200 text-xs snap-start border shadow-2xs ${
          !activeSlug
            ? "bg-[#E11D48] text-white border-[#E11D48] shadow-xs font-semibold"
            : "bg-white border-black/[0.07] text-[#44403C] hover:border-[#FECDD3] hover:text-[#E11D48] hover:bg-[#FFF1F2] hover:-translate-y-0.5 hover:shadow-xs"
        }`}
      >
        <span
          className={`material-symbols-outlined text-[15px] transition-colors ${
            !activeSlug ? "text-white" : "text-[#78716C] group-hover:text-[#E11D48]"
          }`}
        >
          home
        </span>
        <span>All Tools</span>
      </Link>
      {mainCategories.map((category) => {
        const isActive = activeSlug === category.slug;
        return (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={`group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-200 text-xs snap-start border shadow-2xs ${
              isActive
                ? "bg-[#E11D48] text-white border-[#E11D48] shadow-xs font-semibold"
                : "bg-white border-black/[0.07] text-[#44403C] hover:border-[#FECDD3] hover:text-[#E11D48] hover:bg-[#FFF1F2] hover:-translate-y-0.5 hover:shadow-xs"
            }`}
          >
            <span
              aria-hidden="true"
              className={`material-symbols-outlined text-[15px] transition-colors ${
                isActive ? "text-white" : "text-[#78716C] group-hover:text-[#E11D48]"
              }`}
            >
              {category.icon || "category"}
            </span>
            <span>{category.name}</span>
          </Link>
        );
      })}
    </div>
  );
}