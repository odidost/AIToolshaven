"use client";

import Link from "next/link";
import { useState } from "react";
import { ToolImage } from "@/components/shared/ToolImage";
import type { AITool } from "@/lib/types/tool";
export function WorkflowCard({
    title,
    tools,
    icon,
    slug,
}: {
    title: string;
    tools: { name: string; logoUrl?: string; fullTool?: AITool }[];
    icon: string;
    slug?: string;
}) {
    const CardContent = (
        <div className="group rounded-[2rem] border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/30 transition-all duration-700 relative overflow-hidden h-full flex flex-col justify-between min-h-[240px] bg-slate-950/40 backdrop-blur-3xl">
            
            {/* Alive & Colorful Animated Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-500/40 rounded-full mix-blend-screen filter blur-[80px] animate-pulse pointer-events-none group-hover:scale-110 transition-transform duration-1000" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-400/40 rounded-full mix-blend-screen filter blur-[80px] animate-pulse pointer-events-none group-hover:scale-110 transition-transform duration-1000" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-pink-500/30 rounded-full mix-blend-screen filter blur-[80px] animate-pulse pointer-events-none group-hover:-translate-x-10 group-hover:scale-125 transition-transform duration-1000" style={{ animationDuration: '5s' }} />
            <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-amber-400/30 rounded-full mix-blend-screen filter blur-[80px] animate-pulse pointer-events-none group-hover:translate-x-10 group-hover:scale-125 transition-transform duration-1000" style={{ animationDuration: '7s', animationDelay: '2s' }} />
            
            {/* Glassy Inner Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-0 rounded-[2rem]" />
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] rounded-[2rem] pointer-events-none z-0" />

            {/* Header: Title and Category Icon */}
            <div className="flex items-start justify-between gap-4 mb-4 mt-5 mx-6 relative z-10">
                <h3 className="font-semibold text-lg tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-500 leading-tight">
                    {title}
                </h3>
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl text-white/80 group-hover:bg-primary/20 group-hover:text-white transition-all duration-500 border border-white/10 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(255,95,109,0.3)] shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="material-symbols-outlined text-[24px] relative z-10">
                        {icon}
                    </span>
                </div>
            </div>

            {/* The Visual Pipeline */}
            <div className="relative z-10 mt-auto mx-6 mb-5 p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="flex items-center flex-wrap gap-y-4 relative z-10">
                    {tools.map((tool, index) => {
                        const isLast = index === tools.length - 1;
                        return (
                            <div key={index} className="flex items-center">
                                {/* Tool Node */}
                                <div className="group/node relative flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-white/20 shadow-lg flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/node:scale-110 group-hover/node:-translate-y-1 group-hover/node:border-primary group-hover/node:shadow-glow-primary z-10 relative">
                                        <ToolLogo name={tool.name} logoUrl={tool.logoUrl} fullTool={tool.fullTool} />
                                    </div>
                                    <span className="absolute -bottom-6 text-[10px] font-bold text-slate-300 opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap bg-slate-900 px-2 py-0.5 rounded-full border border-white/10 shadow-sm z-20">
                                        {tool.name}
                                    </span>
                                </div>
                                
                                {/* Connector Arrow */}
                                {!isLast && (
                                    <div className="flex items-center px-2">
                                        <div className="w-8 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                                            {/* Static primary color that appears on hover */}
                                            <div 
                                                className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary opacity-0 group-hover:opacity-100" 
                                                style={{
                                                    transitionDuration: '700ms',
                                                    transitionDelay: `${index * 150}ms`,
                                                    transitionProperty: 'opacity'
                                                }}
                                            />
                                            {/* Animated pulse that travels along the line constantly on hover */}
                                            <div className="absolute inset-y-0 left-0 w-1/2 bg-white/80 blur-[2px] -translate-x-full group-hover:animate-marquee opacity-0 group-hover:opacity-100" style={{ animationDelay: `${index * 200}ms` }} />
                                        </div>
                                        <span 
                                            className="material-symbols-outlined text-[16px] text-white/20 -ml-1.5 z-10 bg-slate-950/50 rounded-full"
                                            style={{
                                                transitionDuration: '500ms',
                                                transitionDelay: `${index * 150}ms`,
                                                color: 'inherit'
                                            }}
                                        >
                                            <span className="group-hover:text-primary transition-colors duration-500 drop-shadow-[0_0_8px_rgba(255,95,109,0.8)]" style={{ transitionDelay: `${index * 150}ms` }}>chevron_right</span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            
        </div>
    );

    if (slug) {
        return (
            <Link href={`/workflows/${slug}`} className="block h-full">
                {CardContent}
            </Link>
        );
    }

    return CardContent;
}

function ToolLogo({ name, logoUrl, fullTool }: { name: string; logoUrl?: string; fullTool?: AITool }) {
    const [error, setError] = useState(false);
    const safeName = typeof name === 'string' && name.trim().length > 0 ? name.trim() : 'AI Tool';
    const letter = safeName.charAt(0).toUpperCase();

    if (error || (!logoUrl && !fullTool)) {
        // Consistent gradient colors based on the letter
        const colors = [
            "from-purple-500 to-indigo-600",
            "from-emerald-400 to-emerald-600",
            "from-orange-400 to-amber-600",
            "from-blue-400 to-cyan-500",
            "from-rose-400 to-red-600",
            "from-slate-700 to-slate-900",
            "from-pink-500 to-rose-600",
            "from-cyan-500 to-blue-600"
        ];
        const colorIndex = (letter.charCodeAt(0) || 65) % colors.length;
        const gradient = colors[colorIndex] || colors[0];

        return (
            <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center rounded-2xl`}>
                <span className="text-xl font-black text-white drop-shadow-sm">{letter}</span>
            </div>
        );
    }

    if (fullTool) {
        return (
            <div className="w-full h-full object-cover overflow-hidden bg-white">
                <ToolImage tool={fullTool} type="logo" className="w-full h-full object-cover p-1.5" />
            </div>
        );
    }

    return (
        <img 
            src={logoUrl} 
            alt={safeName} 
            className="w-full h-full object-cover p-1.5" 
            onError={() => setError(true)} 
        />
    );
}
