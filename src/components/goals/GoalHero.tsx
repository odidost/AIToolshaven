import { GoalBackground } from "@/components/goals/GoalBackground";
import type { GoalDetails } from "@/lib/data/goal-details";
import type { AITool } from "@/lib/types/tool";
import Link from "next/link";
import { ToolImage } from "@/components/shared/ToolImage";

type GoalHeroProps = {
    title: string;
    description: string;
    icon: string;
    toolCount: number;
    details: GoalDetails;
    tools?: AITool[];
};

export function GoalHero({
    title,
    description,
    icon,
    toolCount,
    details,
    tools = [],
}: GoalHeroProps) {
    return (
        <section className="relative overflow-hidden rounded-[3rem] bg-surface-container/30 backdrop-blur-xl border border-outline/50 p-8 md:p-16 mb-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <GoalBackground slug={details.slug} />

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full shadow-sm border border-primary/10">
                            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Learn</span>
                        </div>
                        
                        {/* Social Proof Pill */}
                        <div className="inline-flex items-center gap-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/60 px-2.5 py-1.5 shadow-sm text-sm font-semibold text-slate-800 hidden sm:flex">
                            {tools.length > 0 && (
                                <div className="flex -space-x-2 mr-1">
                                    {tools.slice(0, 3).map((tool, i) => (
                                        <div key={tool.slug || i} className="w-6 h-6 rounded-full overflow-hidden border-2 border-white bg-surface shadow-sm relative z-10 flex-shrink-0">
                                            <ToolImage tool={tool} type="logo" className="w-full h-full object-cover bg-white" />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="flex items-center gap-2.5 pr-2">
                                <span>{toolCount} Recommended Tools</span>
                                <span className="relative flex h-2.5 w-2.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-fluid-h1 lg:text-6xl font-black mb-6 tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500 bg-clip-text text-transparent drop-shadow-sm pb-1">
                        {title}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed font-medium">
                        {description}
                    </p>

                    {/* Time To Value (TTV) and Metrics */}
                    <div className="flex flex-wrap items-center gap-4 mb-10">
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-outline/50 rounded-2xl px-5 py-3 shadow-sm">
                            <span className="material-symbols-outlined text-primary text-2xl">timer</span>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 leading-none mb-1">Time to Value</span>
                                <span className="text-[15px] font-bold text-slate-700 leading-none">{details.estimatedTime}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-outline/50 rounded-2xl px-5 py-3 shadow-sm">
                            <span className="material-symbols-outlined text-accent text-2xl">signal_cellular_alt</span>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 leading-none mb-1">Difficulty</span>
                                <span className="text-[15px] font-bold text-slate-700 leading-none">{details.difficulty}</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Expected Outcome Snippet */}
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-2xl mb-10 max-w-2xl">
                        <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-wider">The Goal:</p>
                        <p className="text-slate-700 font-medium italic">"{details.expectedOutcome}"</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="#understand" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3.5 font-bold text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                            <span className="relative z-10 flex items-center gap-2">
                                See The Roadmap
                                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </span>
                        </Link>
                        <Link href="#compare" className="group rounded-full bg-white/80 backdrop-blur-md px-8 py-3.5 font-bold text-slate-700 border border-black/5 hover:border-black/10 hover:bg-white transition-all hover:shadow-sm inline-flex items-center gap-2">
                            View Starter Stack
                        </Link>
                    </div>
                </div>

                {/* Dynamic Floating Logos Graphic for Desktop */}
                <div className="hidden lg:flex w-80 h-80 relative flex-shrink-0 items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                    
                    {tools.length > 0 ? (
                        <div className="relative w-full h-full">
                            {/* Central Hero Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-3xl bg-surface border border-outline/50 shadow-2xl flex items-center justify-center z-20">
                                <span className="material-symbols-outlined text-5xl text-primary drop-shadow-sm">
                                    {icon}
                                </span>
                            </div>

                            {/* Floating Tool Logos */}
                            {tools.slice(0, 5).map((tool, index) => {
                                // Calculate circular positions
                                const angle = (index / Math.min(tools.length, 5)) * Math.PI * 2;
                                const radius = 100;
                                const x = Math.cos(angle) * radius;
                                const y = Math.sin(angle) * radius;
                                // Varied delays for natural floating effect
                                const delay = index * -1.2;

                                return (
                                    <div 
                                        key={tool.slug}
                                        className="absolute top-1/2 left-1/2 z-10"
                                        style={{ 
                                            transform: `translate(${x}px, ${y}px)`,
                                        }}
                                        title={tool.name}
                                    >
                                        <div 
                                            className="w-16 h-16 -ml-8 -mt-8 rounded-2xl bg-surface border border-outline/50 shadow-xl flex items-center justify-center p-1.5 animate-float hover:scale-110 transition-transform cursor-pointer"
                                            style={{ animationDelay: `${delay}s` }}
                                        >
                                            <div className="w-full h-full rounded-xl overflow-hidden bg-outline flex-shrink-0">
                                                <ToolImage 
                                                    tool={tool} 
                                                    type="logo" 
                                                    className="w-full h-full object-cover bg-white"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        // Fallback graphic if no tools
                        <div className="w-72 h-72 rounded-3xl bg-surface-container border border-outline/50 shadow-2xl relative overflow-hidden flex-shrink-0 animate-float">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                            <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-primary/40 drop-shadow-lg">
                                {icon}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
