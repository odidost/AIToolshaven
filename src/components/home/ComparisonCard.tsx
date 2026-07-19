"use client";

import Link from "next/link";
import { useState } from "react";
import { ComparisonData } from "@/lib/comparisons";
import { ToolImage } from "@/components/shared/ToolImage";
import type { AITool } from "@/lib/types/tool";

export function ComparisonCard({ data, fullTool1, fullTool2 }: { data: ComparisonData, fullTool1?: AITool, fullTool2?: AITool }) {
    const [img1Error, setImg1Error] = useState(false);
    const [img2Error, setImg2Error] = useState(false);
    return (
        <Link href={`/compare-tools/${data.slug}`} className="block group w-full">
            <div className="relative flex flex-col justify-between bg-white rounded-3xl border border-black/5 p-6 hover:border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,95,109,0.08)] transition-all duration-500 overflow-hidden h-[240px]">
                
                {/* Background Opposing Gradients (Blue Corner vs Red Corner vibes) */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-slate-50 to-transparent pointer-events-none opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-50/50 to-transparent pointer-events-none opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* The Top 'Arena' with Logos and VS orb */}
                <div className="relative flex items-center justify-between z-10 w-full mt-2">
                    
                    {/* Tool 1 */}
                    <div className="flex flex-col items-center gap-3 transition-transform duration-500 group-hover:translate-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${data.tool1.color} p-[2px] shadow-md group-hover:shadow-lg transition-all`}>
                            <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-[14px] flex items-center justify-center border border-white/20 overflow-hidden">
                                {fullTool1 ? (
                                    <ToolImage tool={fullTool1} type="logo" className="w-full h-full object-cover bg-white" />
                                ) : data.tool1.logoUrl && !img1Error ? (
                                    <img src={data.tool1.logoUrl} alt={data.tool1.name} className="w-full h-full object-cover bg-white" onError={() => setImg1Error(true)} />
                                ) : (
                                    <span className="text-2xl font-black text-white">{data.tool1.letter}</span>
                                )}
                            </div>
                        </div>
                        <span className="font-bold text-slate-900 text-sm text-center max-w-[80px] truncate">{data.tool1.name}</span>
                    </div>

                    {/* The VS Node */}
                    <div className="relative z-20 mx-2 transition-transform duration-500 group-hover:scale-110">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 group-hover:bg-primary/40 transition-colors" />
                        <div className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-md flex items-center justify-center relative z-10 text-[11px] font-black italic tracking-wider text-slate-400 group-hover:text-primary group-hover:border-primary/20 transition-all">
                            VS
                        </div>
                    </div>

                    {/* Tool 2 */}
                    <div className="flex flex-col items-center gap-3 transition-transform duration-500 group-hover:-translate-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${data.tool2.color} p-[2px] shadow-md group-hover:shadow-lg transition-all`}>
                            <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-[14px] flex items-center justify-center border border-white/20 overflow-hidden">
                                {fullTool2 ? (
                                    <ToolImage tool={fullTool2} type="logo" className="w-full h-full object-cover bg-white" />
                                ) : data.tool2.logoUrl && !img2Error ? (
                                    <img src={data.tool2.logoUrl} alt={data.tool2.name} className="w-full h-full object-cover bg-white" onError={() => setImg2Error(true)} />
                                ) : (
                                    <span className="text-2xl font-black text-white">{data.tool2.letter}</span>
                                )}
                            </div>
                        </div>
                        <span className="font-bold text-slate-900 text-sm text-center max-w-[80px] truncate">{data.tool2.name}</span>
                    </div>

                </div>

                {/* Lower Description and Action */}
                <div className="relative z-10 mt-6 pt-5 border-t border-black/5 flex flex-col gap-3">
                    <p className="text-xs font-semibold text-slate-500 line-clamp-2 leading-relaxed">
                        {data.description}
                    </p>
                    <div className="flex items-center gap-1 text-slate-400 group-hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest mt-auto">
                        <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            See full comparison
                        </span>
                        <span className="material-symbols-outlined text-[16px] -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                            arrow_forward
                        </span>
                    </div>
                </div>

            </div>
        </Link>
    );
}
