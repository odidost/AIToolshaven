import React from 'react';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";

interface ProsConsProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function ProsCons({ mainTool, compareTool }: ProsConsProps) {
    return (
        <section id="pros-cons" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-fluid-h2 text-primary">thumbs_up_down</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface">Pros & Cons</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Main Tool */}
                <div className="bg-surface rounded-[24px] overflow-hidden border border-border shadow-sm">
                    <div className="p-6 border-b border-border bg-surface-secondary/30 flex items-center gap-3">
                        <ToolImage tool={mainTool} type="logo" className="w-10 h-10 rounded-xl border border-border bg-surface object-contain" />
                        <h3 className="text-xl font-bold">{mainTool.name}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                        <h4 className="font-bold text-success mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">add_circle</span> 
                            Advantages
                        </h4>
                        <ul className="space-y-4 mb-8">
                            {mainTool.pros?.map((pro, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="material-symbols-outlined text-[14px] text-success">check</span>
                                    </div>
                                    <span className="text-on-surface-variant leading-relaxed">{pro}</span>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-bold text-destructive mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">do_not_disturb_on</span> 
                            Disadvantages
                        </h4>
                        <ul className="space-y-4">
                            {mainTool.cons?.map((con, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="material-symbols-outlined text-[14px] text-destructive">close</span>
                                    </div>
                                    <span className="text-on-surface-variant leading-relaxed">{con}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Compare Tool */}
                <div className="bg-surface rounded-[24px] overflow-hidden border border-border shadow-sm">
                    <div className="p-6 border-b border-border bg-surface-secondary/30 flex items-center gap-3">
                        <ToolImage tool={compareTool} type="logo" className="w-10 h-10 rounded-xl border border-border bg-surface object-contain" />
                        <h3 className="text-xl font-bold">{compareTool.name}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                        <h4 className="font-bold text-success mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">add_circle</span> 
                            Advantages
                        </h4>
                        <ul className="space-y-4 mb-8">
                            {compareTool.pros?.map((pro, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="material-symbols-outlined text-[14px] text-success">check</span>
                                    </div>
                                    <span className="text-on-surface-variant leading-relaxed">{pro}</span>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-bold text-destructive mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">do_not_disturb_on</span> 
                            Disadvantages
                        </h4>
                        <ul className="space-y-4">
                            {compareTool.cons?.map((con, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="material-symbols-outlined text-[14px] text-destructive">close</span>
                                    </div>
                                    <span className="text-on-surface-variant leading-relaxed">{con}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
