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
    const bgImageUrl = slug ? `/images/workflows/${slug}.png` : undefined;

    const CardContent = (
        <div className="group rounded-[2rem] border border-white/10 shadow-lg hover:shadow-2xl hover:border-white/30 transition-all duration-700 relative overflow-hidden h-full flex flex-col justify-between min-h-[240px] bg-slate-950/80 backdrop-blur-xl">
            
            {/* Background Image */}
            {bgImageUrl && (
                <img 
                    src={bgImageUrl} 
                    alt={title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            )}

            {/* Aurora / Mesh Gradient Blobs */}
            <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[80px] group-hover:bg-primary/30 transition-colors duration-700 pointer-events-none" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-secondary/20 blur-[80px] group-hover:bg-secondary/30 transition-colors duration-700 pointer-events-none" />

            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20 pointer-events-none z-0" />

            {/* Header: Title and Category Icon */}
            <div className="flex items-start justify-between gap-4 mb-4 mt-5 mx-6 relative z-10">
                <h3 className="font-black text-2xl bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/60 group-hover:from-white group-hover:via-primary/20 group-hover:to-primary/80 transition-all duration-500 leading-tight drop-shadow-md">
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
    const letter = name.charAt(0).toUpperCase();

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
        const colorIndex = letter.charCodeAt(0) % colors.length;
        const gradient = colors[colorIndex];

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
            alt={name} 
            className="w-full h-full object-cover p-1.5" 
            onError={() => setError(true)} 
        />
    );
}
