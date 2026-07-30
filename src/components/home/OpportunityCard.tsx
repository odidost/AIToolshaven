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
        <div className="group relative bg-white/70 backdrop-blur-2xl rounded-[2rem] p-6 hover:-translate-y-2 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden h-full flex flex-col justify-between border border-white/60 min-h-[280px]">
            
            {/* The Top Glowing Edge (Animated) */}
            <div className={`absolute top-0 left-0 w-[200%] h-1.5 bg-gradient-to-r ${color} opacity-80 group-hover:opacity-100 transition-opacity animate-pulse-slow`} />
            
            {/* The Background Hover Glow */}
            <div className={`absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br ${color} rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none group-hover:scale-150`} />

            <div className="relative z-10">
                {/* Top Header: Icon & Trending Badge */}
                <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-[1.5px] shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                        <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-[14px] flex items-center justify-center">
                            <span className={`material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-br ${color} text-3xl group-hover:scale-110 transition-transform duration-500`}>
                                {icon}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse-slow border border-white/20">
                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                        <span className="text-[10px] font-black uppercase tracking-wider">Hot</span>
                    </div>
                </div>

                {/* Main Content */}
                <h3 className="font-black text-2xl text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all leading-tight">
                    {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {description}
                </p>
            </div>

            {/* Bottom "Bounty Stats" & CTA */}
            <div className="relative z-10 mt-auto">
                <div className="grid grid-cols-2 gap-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:mb-14">
                    <div className="bg-gradient-to-br from-white to-slate-50 border border-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl p-3 group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.04)] transition-shadow">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Difficulty</p>
                        <p className="text-sm font-bold text-slate-800">{difficulty}</p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-emerald-50/30 border border-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl p-3 group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.04)] transition-shadow">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Potential ROI</p>
                        <p className="text-sm font-bold text-emerald-600">{roi}</p>
                    </div>
                </div>

                {/* Animated CTA */}
                <div className="absolute left-0 right-0 bottom-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                    <div className={`w-full py-3.5 px-4 rounded-xl bg-gradient-to-r ${color} text-white font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow`}>
                        <span className="text-sm tracking-wide">Unlock Blueprint</span>
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
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
