import Link from "next/link";

type GoalProps = {
    title: string;
    icon: string;
    count: number;
    slug: string;
    index?: number;
};

const iconGradients = [
  'from-rose-400 to-orange-400 text-rose-600',
  'from-blue-400 to-indigo-400 text-blue-600',
  'from-emerald-400 to-teal-400 text-emerald-600',
  'from-purple-400 to-pink-400 text-purple-600',
  'from-amber-400 to-orange-500 text-amber-600',
  'from-cyan-400 to-blue-500 text-cyan-600',
];

const badgeColors = [
  'bg-rose-50 text-rose-600 border-rose-100',
  'bg-blue-50 text-blue-600 border-blue-100',
  'bg-emerald-50 text-emerald-600 border-emerald-100',
  'bg-purple-50 text-purple-600 border-purple-100',
  'bg-amber-50 text-amber-600 border-amber-100',
  'bg-cyan-50 text-cyan-600 border-cyan-100',
];

export function GoalCard({
    title,
    icon,
    count,
    slug,
    index = 0,
}: GoalProps) {
    const bgClass = badgeColors[index % badgeColors.length];
    const gradientClass = iconGradients[index % iconGradients.length];

    return (
        <Link href={`/goals/${slug}`} className="group relative flex flex-col items-center p-6 bg-white rounded-[2rem] border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full w-full">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientClass} bg-opacity-10 flex items-center justify-center mb-4 relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shrink-0`}>
                <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm" />
                <span className="material-symbols-outlined text-[32px] text-white relative z-10 drop-shadow-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {icon}
                </span>
            </div>

            <h3 className="font-bold text-slate-900 text-center mb-2 group-hover:text-primary transition-colors relative z-10 line-clamp-2 min-h-[40px] flex items-center">
                {title}
            </h3>

            <span className={`mt-auto text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${bgClass} relative z-10`}>
                {count} Tools
            </span>

            {/* Hover ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Link>
    );
}
