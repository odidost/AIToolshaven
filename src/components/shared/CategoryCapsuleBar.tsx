import Link from 'next/link';
import { categories } from '@/lib/data/categories';
const pillColors = [
  {
    bg: "bg-cyan-500/10",
    border: "border-cyan-400/30",
    text: "text-cyan-400",
    hover: "hover:bg-cyan-500/15",
  },
  {
    bg: "bg-violet-500/10",
    border: "border-violet-400/30",
    text: "text-violet-400",
    hover: "hover:bg-violet-500/15",
  },
  {
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/30",
    text: "text-emerald-400",
    hover: "hover:bg-emerald-500/15",
  },
  {
    bg: "bg-orange-500/10",
    border: "border-orange-400/30",
    text: "text-orange-400",
    hover: "hover:bg-orange-500/15",
  },
  {
    bg: "bg-pink-500/10",
    border: "border-pink-400/30",
    text: "text-pink-400",
    hover: "hover:bg-pink-500/15",
  },
  {
    bg: "bg-blue-500/10",
    border: "border-blue-400/30",
    text: "text-blue-400",
    hover: "hover:bg-blue-500/15",
  },
];

export function CategoryCapsuleBar({ activeSlug }: { activeSlug?: string }) {
  return (
    <div className="flex gap-4 overflow-x-auto py-2 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Link
        href="/"
        className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 text-sm snap-start ${!activeSlug
          ? 'bg-slate-900 text-white shadow-md scale-105'
          : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5'
          }`}
      >
        <span className="material-symbols-outlined text-[18px]">home</span>
        All Tools
      </Link>
      {categories.map((category, index) => {
        const color = pillColors[index % pillColors.length];

        return (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={`group flex items-center gap-2 px-5 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 text-sm snap-start ${activeSlug === category.slug
              ? `bg-slate-900 text-white shadow-md scale-105`
              : `${color.bg} ${color.border} ${color.text} ${color.hover} border shadow-sm hover:shadow-lg hover:-translate-y-1`
              }`}
          >
            <span className={`material-symbols-outlined text-[18px] ${color.text} transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1`}>
              {category.icon}
            </span>
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}