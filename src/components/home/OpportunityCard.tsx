import Link from "next/link";

export function OpportunityCard({
    title,
    description,
    icon,
    slug,
    difficulty = "Beginner",
    roi = "High",
    color = "from-primary to-orange-500",
}: {
    title: string;
    description: string;
    icon: string;
    slug?: string;
    difficulty?: string;
    roi?: string;
    color?: string;
}) {
    const CardContent = (
        <div className="group relative bg-white rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden h-full flex flex-col justify-between border border-black/5">
            
            {/* The Top Glowing Edge */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-80 group-hover:opacity-100 transition-opacity`} />
            
            {/* The Background Hover Glow */}
            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${color} rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none`} />

            <div className="relative z-10">
                {/* Top Header: Icon & Trending Badge */}
                <div className="flex items-start justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-[1px] shadow-sm`}>
                        <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center">
                            <span className={`material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-br ${color} text-3xl`}>
                                {icon}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-red-50 text-red-500 px-3 py-1 rounded-full border border-red-100 shadow-sm animate-pulse-slow">
                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                        <span className="text-[10px] font-black uppercase tracking-wider">Hot</span>
                    </div>
                </div>

                {/* Main Content */}
                <h3 className="font-black text-2xl text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all leading-tight">
                    {title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                    {description}
                </p>
            </div>

            {/* Bottom "Bounty Stats" & CTA */}
            <div className="relative z-10 mt-auto">
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Difficulty</p>
                        <p className="text-sm font-semibold text-slate-900">{difficulty}</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Potential ROI</p>
                        <p className="text-sm font-semibold text-emerald-600">{roi}</p>
                    </div>
                </div>

                {/* Animated CTA */}
                <div className="flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-bold text-slate-900">Unlock Blueprint</span>
                    <span className={`material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-r ${color}`}>arrow_forward</span>
                </div>
            </div>
        </div>
    );

    if (slug) {
        return (
            <Link href={`/goals/${slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2rem]">
                {CardContent}
            </Link>
        );
    }

    return CardContent;
}
