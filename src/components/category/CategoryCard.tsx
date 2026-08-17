import Link from "next/link";
import type { ToolCategory } from "@/lib/types/category";

type CategoryCardProps = {
  category: ToolCategory;
  index: number;
};

const iconGradients = [
  'from-indigo-500 to-purple-500 shadow-indigo-500/20',
  'from-blue-500 to-cyan-500 shadow-blue-500/20',
  'from-emerald-500 to-teal-500 shadow-emerald-500/20',
  'from-rose-500 to-pink-500 shadow-rose-500/20',
  'from-amber-500 to-orange-500 shadow-amber-500/20',
  'from-violet-500 to-fuchsia-500 shadow-violet-500/20',
];

const hoverGradients = [
  'group-hover:from-indigo-500/5 group-hover:to-purple-500/5',
  'group-hover:from-blue-500/5 group-hover:to-cyan-500/5',
  'group-hover:from-emerald-500/5 group-hover:to-teal-500/5',
  'group-hover:from-rose-500/5 group-hover:to-pink-500/5',
  'group-hover:from-amber-500/5 group-hover:to-orange-500/5',
  'group-hover:from-violet-500/5 group-hover:to-fuchsia-500/5',
];

export function CategoryCard({ category, index }: CategoryCardProps) {
  const gradientClass = iconGradients[index % iconGradients.length];
  const hoverGradient = hoverGradients[index % hoverGradients.length];

  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative flex flex-col h-full bg-white rounded-[2rem] border border-black/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
    >
      {/* Dynamic Hover Background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${hoverGradient} transition-colors duration-500`} />

      {/* Decorative Blur Orb */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
            <span className="material-symbols-outlined text-[28px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
              {category.icon || "category"}
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-primary transition-colors">
              arrow_outward
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors tracking-tight">
          {category.name}
        </h3>
        
        {category.description && (
          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
            {category.description}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-black tracking-widest uppercase text-slate-400 group-hover:text-primary transition-colors">
            Explore Category
          </span>
          <div className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
}
