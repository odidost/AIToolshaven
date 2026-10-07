import Link from "next/link";
import type { ToolCategory } from "@/lib/types/category";
import { getCategoryVisuals } from "@/lib/data/category-visuals";

type CategoryCardProps = {
  category: ToolCategory;
  index?: number;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const isSubcategory = category.type === "subcategory" || Boolean(category.parentId);
  const visuals = getCategoryVisuals(category);

  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex items-center justify-between p-3.5 sm:px-4 sm:py-3.5 bg-white rounded-xl border border-[#E5E7EB] hover:border-gray-400 hover:bg-[#F9FAFB] transition-all shadow-none"
    >
      {/* Left Section: Colored Icon + Title & Description */}
      <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 pr-2">
        {/* Square Colored Icon Container */}
        <div
          className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105 shadow-2xs ${visuals.containerClass}`}
        >
          <span className="material-symbols-outlined text-[20px] select-none">
            {visuals.icon}
          </span>
        </div>

        {/* Text Container */}
        <div className="min-w-0 flex flex-col justify-center">
          {/* Header Line: Name + Badges */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-semibold text-sm sm:text-base text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors truncate">
              {category.name}
            </span>

            {isSubcategory ? (
              <span className="text-[10px] font-medium uppercase tracking-wider text-[#6B7280] bg-[#F3F4F6] px-1.5 py-0.5 rounded border border-[#E5E7EB] shrink-0">
                Subcategory
              </span>
            ) : (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E11D48] bg-[#FFF1F2] px-1.5 py-0.5 rounded border border-[#FECDD3] shrink-0">
                Core Hub
              </span>
            )}

            <span className="text-xs font-mono text-[#6B7280] shrink-0 whitespace-nowrap">
              {category.count || "10+"} tools
            </span>
          </div>

          {/* Subtitle / Description Line */}
          <p className="text-xs sm:text-sm text-[#4B5563] truncate mt-0.5">
            {category.description ||
              `Compare verified tools, pricing models, feature matrices, and user reviews in ${category.name}.`}
          </p>
        </div>
      </div>

      {/* Right Section: Minimalist Chevron Arrow */}
      <div className="flex items-center shrink-0 ml-2 text-[#9CA3AF] group-hover:text-[#0A0A0A] group-hover:translate-x-0.5 transition-all">
        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
      </div>
    </Link>
  );
}
