import type { AITool } from "@/lib/types/tool";

type HandsOnExperienceProps = {
    tool: AITool;
};

export function HandsOnExperience({ tool }: HandsOnExperienceProps) {
    if (tool.slug !== 'design-com') {
        return null;
    }

    return (
        <section className="my-16">
            <div className="rounded-[32px] bg-[#0A0F1C] p-6 sm:p-10 relative overflow-hidden shadow-2xl border border-white/10">
                {/* Premium glowing background effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold text-white tracking-widest uppercase mb-6 shadow-xl backdrop-blur-md">
                            <span className="material-symbols-outlined text-[16px] text-primary">science</span>
                            Real-World Lab Test
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            The Brand-From-Zero Test
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                            To test <span className="text-white font-bold">{tool.name}</span>, we attempted to build a complete brand identity for a fictional coffee company, <span className="text-white italic">"Midnight Brew,"</span> tracking the time from blank canvas to finished logo, social templates, and a published website.
                        </p>
                    </div>

                    {/* Bento Box Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* The Workflow (Span 2) */}
                        <div className="md:col-span-2 group rounded-[24px] bg-white/5 border border-white/10 p-8 backdrop-blur-md hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                                    <span className="material-symbols-outlined text-[24px]">account_tree</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">The Workflow</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-lg flex-grow">
                                After entering "Midnight Brew" and a few keywords, the AI generated thousands of logo options in seconds. We selected a free template and were immediately taken to the drag-and-drop editor. There, we customized it using both the AI chat assistant and manual tools. Upon downloading, the logo was <strong className="text-white font-semibold">already synced</strong> to other templates—business cards, letterheads, social assets, and more.
                            </p>
                        </div>

                        {/* The Result (Span 1) - Highly Emphasized */}
                        <div className="md:col-span-1 rounded-[24px] bg-gradient-to-br from-amber-500 to-orange-600 p-8 shadow-lg shadow-amber-500/20 flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6 text-white">
                                    <span className="material-symbols-outlined text-[32px]">emoji_events</span>
                                    <h3 className="text-2xl font-bold">The Result</h3>
                                </div>
                                <p className="text-white/90 leading-relaxed text-lg font-medium">
                                    We got a fully branded identity in <strong className="text-white font-extrabold bg-black/20 px-2 py-1 rounded-md mx-1">under 20 minutes</strong>. The automatic template seeding was the standout feature—it just worked without any extra prompting.
                                </p>
                            </div>
                        </div>

                        {/* The Friction Note (Span 1) */}
                        <div className="md:col-span-1 group rounded-[24px] bg-white/5 border border-white/10 p-8 backdrop-blur-md hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500/50 to-transparent" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400 border border-rose-500/30">
                                    <span className="material-symbols-outlined text-[20px]">warning</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">Friction Note</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                Generating thousands of options means choosing one can take longer than editing. First-time users should expect a longer browsing stage. Using the built-in polling feature helps teams vote on concepts efficiently.
                            </p>
                        </div>

                        {/* Learning Curve (Span 2) */}
                        <div className="md:col-span-2 group rounded-[24px] bg-white/5 border border-white/10 p-8 backdrop-blur-md hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-emerald-500/50 to-transparent" />
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30 flex-shrink-0">
                                    <span className="material-symbols-outlined text-[32px]">school</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">The Learning Curve Observation</h3>
                                    <p className="text-slate-300 leading-relaxed text-lg">
                                        Design.com is genuinely one of the easiest branding tools to pick up. The workflow is straightforward, and having your brand colors and fonts automatically applied to asset templates right on the download page removes almost all complexity.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
