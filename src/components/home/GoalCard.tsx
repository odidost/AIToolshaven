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
}: GoalProps) {
    return (
        <Link 
            href={`/goals/${slug}`} 
            prefetch={false} 
            className="group relative flex flex-col items-center p-4 bg-white rounded-lg border border-[#E5E7EB] hover:border-[#E11D48] hover:shadow-xs transition-all shadow-none h-full w-full text-center"
        >
            <div className="w-10 h-10 rounded-md bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center mb-3 text-[#0A0A0A] group-hover:text-[#E11D48] group-hover:bg-[#FFF1F2] group-hover:border-[#FECDD3] transition-colors shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                    {icon}
                </span>
            </div>

            <h3 className="font-semibold text-xs sm:text-sm text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors line-clamp-2 mb-3 min-h-[36px] flex items-center justify-center">
                {title}
            </h3>

            <span className="mt-auto text-[11px] font-mono text-[#4B5563] bg-[#F9FAFB] border border-[#E5E7EB] px-2 py-0.5 rounded-md group-hover:border-[#FECDD3] group-hover:bg-[#FFF1F2] group-hover:text-[#E11D48] transition-colors">
                {typeof count === 'number' && !isNaN(count) ? count : 12} tools
            </span>
        </Link>
    );
}
