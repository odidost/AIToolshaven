export function FloatingCards() {
    return (
        <div className="absolute inset-0 z-30 pointer-events-none">

            {/* 1. Search (Sky) - Top Left */}
            <div
                className="
                    pointer-events-auto
                    absolute
                    top-[12%]
                    left-[18%]
                    animate-float-medium
                    w-56
                    h-36
                    rounded-3xl
                    border border-sky-500/20
                    bg-slate-900/80
                    backdrop-blur-xl
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(14,165,233,0.15)]
                    p-5
                    hover:scale-105
                    hover:-translate-y-2
                    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_60px_rgba(0,0,0,0.6),0_0_60px_rgba(14,165,233,0.3)]
                    transition-all
                    duration-500
                    group
                ">

                {/* Glow */}
                <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl transition-all duration-500 group-hover:bg-sky-400/30" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                            <span className="material-symbols-outlined text-xl text-sky-400">
                                search
                            </span>
                        </div>
                        <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-1 text-[10px] font-bold tracking-widest text-sky-400 uppercase">
                            500+
                        </span>
                    </div>
                    <div>
                        <h4 className="font-bold text-white">
                            Search AI Tools
                        </h4>
                        <p className="mt-1 text-[11px] text-slate-400">
                            Find the perfect AI tool instantly.
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. Trending (Orange) - Top Right */}
            <div
                className="
                    pointer-events-auto
                    absolute
                    top-[18%]
                    right-[15%]
                    animate-float-slow
                    w-60
                    h-52
                    rounded-3xl
                    border border-orange-500/20
                    bg-slate-900/80
                    backdrop-blur-xl
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(249,115,22,0.15)]
                    p-5
                    hover:scale-105
                    hover:-translate-y-2
                    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_60px_rgba(0,0,0,0.6),0_0_60px_rgba(249,115,22,0.3)]
                    transition-all
                    duration-500
                    group
                ">

                {/* Glow */}
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl transition-all duration-500 group-hover:bg-orange-400/30" />

                <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white">
                            Trending
                        </h4>
                        <div className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">
                                LIVE
                            </span>
                        </div>
                    </div>
                    <div className="mt-5 space-y-2.5">
                        {[
                            ["ChatGPT", "+18%"],
                            ["Claude", "+12%"],
                            ["Gemini", "+8%"],
                        ].map(([tool, growth]) => (
                            <div
                                key={tool}
                                className="flex items-center justify-between rounded-lg bg-white/5 border border-white/5 px-3 py-2 transition-colors group-hover:bg-white/10"
                            >
                                <span className="text-xs font-semibold text-slate-200">
                                    {tool}
                                </span>
                                <span className="text-[10px] font-bold text-orange-400">
                                    {growth}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Workflow (Emerald) - Bottom Right */}
            <div
                className="
                    pointer-events-auto
                    absolute
                    bottom-[20%]
                    right-[12%]
                    animate-float-fast
                    w-56
                    h-64
                    rounded-3xl
                    border border-emerald-500/20
                    bg-slate-900/80
                    backdrop-blur-xl
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(16,185,129,0.15)]
                    p-5
                    hover:scale-105
                    hover:-translate-y-2
                    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_60px_rgba(0,0,0,0.6),0_0_60px_rgba(16,185,129,0.3)]
                    transition-all
                    duration-500
                    group
                ">

                {/* Glow */}
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/30" />

                <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between mb-5">
                        <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                            <span className="material-symbols-outlined text-emerald-400 text-xl">
                                account_tree
                            </span>
                        </div>
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                            ACTIVE
                        </span>
                    </div>
                    <h4 className="font-bold text-white">
                        AI Workflow
                    </h4>
                    <div className="mt-4 flex-1 space-y-3">
                        {[
                            "Ideation",
                            "ChatGPT Script",
                            "Midjourney Art",
                        ].map((step, index) => (
                            <div key={step} className="flex items-center gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-400 border border-emerald-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                    {index + 1}
                                </div>
                                <span className="text-xs font-medium text-slate-300">
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Compare (Violet) - Bottom Left */}
            <div
                className="
                pointer-events-auto
                absolute
                bottom-[15%]
                left-[15%]
                animate-float-slow
                w-56
                h-44
                rounded-3xl
                border border-violet-500/20
                bg-slate-900/80
                backdrop-blur-xl
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(139,92,246,0.15)]
                p-5
                hover:scale-105
                hover:-translate-y-2
                hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_60px_rgba(0,0,0,0.6),0_0_60px_rgba(139,92,246,0.3)]
                transition-all
                duration-500
                group" >

                {/* Glow */}
                <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl transition-all duration-500 group-hover:bg-violet-400/30" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-xl bg-violet-500/20 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                            <span className="material-symbols-outlined text-violet-400 text-xl">
                                balance
                            </span>
                        </div>
                        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-1 text-[10px] font-bold tracking-widest text-violet-400 uppercase">
                            VS
                        </span>
                    </div>
                    <div>
                        <h4 className="font-bold text-white">
                            Compare Tools
                        </h4>
                        <p className="mt-1 text-[11px] text-slate-400">
                            ChatGPT vs Claude
                        </p>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Accuracy Match
                        </span>
                        <span className="text-xs font-black text-violet-400">
                            96%
                        </span>
                    </div>
                </div>
            </div>

            {/* 5. Categories (Pink/Cyan) - Left Middle */}
            <div className="
                pointer-events-auto 
                absolute 
                top-[42%] 
                left-[5%] 
                animate-float-medium 
                w-64 
                rounded-3xl 
                border border-pink-500/20 
                bg-slate-900/80 
                backdrop-blur-xl 
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(236,72,153,0.15)] 
                p-5 
                hover:scale-105 
                hover:-translate-y-2 
                hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_60px_rgba(0,0,0,0.6),0_0_60px_rgba(236,72,153,0.3)] 
                transition-all 
                duration-500
                group">

                {/* Glow */}
                <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-pink-500/20 blur-3xl transition-all duration-500 group-hover:bg-pink-400/30" />

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-8 w-8 rounded-lg bg-pink-500/20 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                            <span className="material-symbols-outlined text-pink-400 text-sm">
                                grid_view
                            </span>
                        </div>
                        <span className="font-bold text-white">
                            Categories
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {[
                            { name: "Chatbots", bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
                            { name: "Writing", bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
                            { name: "Coding", bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400" },
                            { name: "Design", bg: "bg-pink-500/10", border: "border-pink-500/20", text: "text-pink-400" },
                            { name: "Video", bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400" },
                        ].map(tag => (
                            <span key={tag.name} className={`rounded-full border ${tag.bg} ${tag.border} ${tag.text} px-3 py-1 text-[10px] font-bold uppercase tracking-wider`}>
                                {tag.name}
                            </span>
                        ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                            24 Total
                        </span>
                        <span className="text-[10px] font-bold tracking-widest text-pink-400 uppercase group-hover:text-pink-300 transition-colors cursor-pointer">
                            Browse →
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
