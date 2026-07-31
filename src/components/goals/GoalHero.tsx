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
        <section className="relative overflow-hidden rounded-3xl bg-surface-container/30 backdrop-blur-xl border border-outline/50 p-8 md:p-16 mb-12 shadow-2xl">
            <GoalBackground slug={details.slug} />

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-fluid-h2 text-primary ring-1 ring-primary/20 shadow-sm">
                            {icon}
                        </span>
                        
                        {/* Social Proof Pill */}
                        <div className="inline-flex items-center gap-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/60 px-2.5 py-1.5 shadow-sm text-sm font-semibold text-slate-800">
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

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed border-l-4 border-primary/40 pl-6 py-1 font-medium">
                        {description}
                    </p>

                    {/* Stats Bar */}
                    <div className="flex items-center divide-x divide-outline/50 border border-outline/50 bg-white/50 backdrop-blur-md rounded-2xl w-fit mb-10 shadow-sm overflow-hidden">
                        <div className="flex items-center gap-3 px-5 py-3 hover:bg-white/40 transition-colors cursor-default">
                            <span className="material-symbols-outlined text-primary text-xl">timer</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-none mb-1">Time</span>
                                <span className="text-sm font-bold text-slate-700 leading-none">{details.estimatedTime}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-3 hover:bg-white/40 transition-colors cursor-default">
                            <span className="material-symbols-outlined text-accent text-xl">signal_cellular_alt</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-none mb-1">Difficulty</span>
                                <span className="text-sm font-bold text-slate-700 leading-none">{details.difficulty}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-3 hover:bg-white/40 transition-colors cursor-default">
                            <span className="material-symbols-outlined text-blue-500 text-xl">group</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-none mb-1">Audience</span>
                                <span className="text-sm font-bold text-slate-700 leading-none">{details.bestAudience}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="#workflow" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3.5 font-bold text-white shadow-md hover:shadow-[0_0_20px_rgba(255,95,109,0.4)] transition-all hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Workflow
                                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-y-0.5">arrow_downward</span>
                            </span>
                        </Link>
                        <Link href="#tools" className="group rounded-full bg-white/60 backdrop-blur-md px-8 py-3.5 font-bold text-slate-700 border border-black/5 hover:border-black/10 hover:bg-white/80 transition-all hover:shadow-sm inline-flex items-center gap-2">
                            Explore Tools
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
                                            className="w-16 h-16 -ml-8 -mt-8 rounded-2xl bg-surface border border-outline/50 shadow-xl flex items-center justify-center p-1.5 animate-float"
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
