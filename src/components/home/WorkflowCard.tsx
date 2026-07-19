"use client";

import Link from "next/link";
import { useState } from "react";



export function WorkflowCard({
    title,
    tools,
    icon,
    slug,
}: {
    title: string;
    tools: { name: string; logoUrl?: string }[];
    icon: string;
    slug?: string;
}) {
    const bgImageUrl = slug ? `/images/workflows/${slug}.png` : undefined;

    const CardContent = (
        <div className="group rounded-[2rem] border border-white/10 shadow-lg hover:shadow-[0_20px_40px_rgba(255,95,109,0.3)] hover:border-primary/40 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-between min-h-[320px]">
            
            {/* Background Image */}
            {bgImageUrl && (
                <img 
                    src={bgImageUrl} 
                    alt={title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            )}

            {/* Dark Gradient Overlay (Netflix Style) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 to-transparent pointer-events-none" />

            {/* Header: Title and Category Icon */}
            <div className="flex items-start justify-between gap-4 mb-8 mt-6 mx-6 relative z-10">
                <h3 className="font-black text-2xl text-white group-hover:text-white/90 transition-colors leading-tight drop-shadow-md">
                    {title}
                </h3>
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-black/30 backdrop-blur-md text-white/80 group-hover:bg-primary/40 group-hover:text-white transition-colors border border-white/10 shadow-lg">
                    <span className="material-symbols-outlined text-[24px]">
                        {icon}
                    </span>
                </div>
            </div>

            {/* The Visual Pipeline */}
            <div className="relative z-10 mt-auto mx-6 mb-6 p-5 rounded-3xl bg-slate-950/40 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
                <div className="flex items-center flex-wrap gap-y-4 relative z-10">
                    {tools.map((tool, index) => {
                        const isLast = index === tools.length - 1;
                        return (
                            <div key={index} className="flex items-center">
                                {/* Tool Node */}
                                <div className="group/node relative flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-white/20 shadow-lg flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover/node:scale-110 group-hover/node:border-primary group-hover/node:shadow-[0_0_15px_rgba(255,95,109,0.5)] z-10 relative">
                                        <ToolLogo name={tool.name} logoUrl={tool.logoUrl} />
                                    </div>
                                    <span className="absolute -bottom-6 text-[10px] font-bold text-slate-300 opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap bg-slate-900 px-2 py-0.5 rounded-full border border-white/10 shadow-sm z-20">
                                        {tool.name}
                                    </span>
                                </div>
                                
                                {/* Connector Arrow */}
                                {!isLast && (
                                    <div className="flex items-center px-2">
                                        <div className="w-6 h-px bg-white/20 relative">
                                            <div 
                                                className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100" 
                                                style={{
                                                    transitionDuration: '500ms',
                                                    transitionDelay: `${index * 150}ms`,
                                                    transitionProperty: 'opacity'
                                                }}
                                            />
                                        </div>
                                        <span 
                                            className="material-symbols-outlined text-[14px] text-white/30 -ml-1 transition-all"
                                            style={{
                                                transitionDuration: '500ms',
                                                transitionDelay: `${index * 150}ms`,
                                                color: 'inherit'
                                            }}
                                        >
                                            <span className="group-hover:text-primary transition-colors drop-shadow-[0_0_5px_rgba(255,95,109,0.8)]" style={{ transitionDelay: `${index * 150}ms` }}>chevron_right</span>
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

function ToolLogo({ name, logoUrl }: { name: string; logoUrl?: string }) {
    const [error, setError] = useState(false);
    const letter = name.charAt(0).toUpperCase();

    if (error || !logoUrl) {
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

    return (
        <img 
            src={logoUrl} 
            alt={name} 
            className="w-full h-full object-cover p-1.5" 
            onError={() => setError(true)} 
        />
    );
}
