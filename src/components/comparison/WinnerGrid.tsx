import React from 'react';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";

interface WinnerGridProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function WinnerGrid({ mainTool, compareTool }: WinnerGridProps) {
    // Generate categories dynamically based on the combined useCases/tags or use static premium ones
    const categories = [
        { id: 'coding', label: 'Coding & Dev', icon: 'code', mainScore: mainTool.performance || 0, compareScore: compareTool.performance || 0 },
        { id: 'writing', label: 'Writing & Copy', icon: 'edit_document', mainScore: mainTool.featureRating || 0, compareScore: compareTool.featureRating || 0 },
        { id: 'research', label: 'Research & Data', icon: 'travel_explore', mainScore: mainTool.rating || 0, compareScore: compareTool.rating || 0 },
        { id: 'value', label: 'Value for Money', icon: 'payments', mainScore: mainTool.valueForMoney || 0, compareScore: compareTool.valueForMoney || 0 },
        { id: 'ease', label: 'Ease of Use', icon: 'sentiment_satisfied', mainScore: mainTool.easeOfUse || 0, compareScore: compareTool.easeOfUse || 0 },
        { id: 'support', label: 'Customer Support', icon: 'support_agent', mainScore: mainTool.support || 0, compareScore: compareTool.support || 0 },
    ];

    return (
        <section id="categories" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-3xl text-primary">military_tech</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface">Winner by Category</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => {
                    // Slight randomization or logic to pick winner if scores are identical
                    const mainWins = cat.mainScore > cat.compareScore || (cat.mainScore === cat.compareScore && mainTool.name.length > compareTool.name.length);
                    const winner = mainWins ? mainTool : compareTool;
                    const loser = mainWins ? compareTool : mainTool;

                    return (
                        <div key={cat.id} className="bg-surface rounded-[24px] p-6 border border-border shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
                            <div className="w-12 h-12 bg-surface-secondary rounded-xl flex items-center justify-center text-on-surface mb-4">
                                <span className="material-symbols-outlined">{cat.icon}</span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-on-surface mb-4">{cat.label}</h3>

                            <div className="flex flex-col items-center gap-3 w-full">
                                <div className="flex items-center gap-3 w-full justify-center p-2 rounded-xl bg-primary/5 border border-primary/10 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                                    <ToolImage tool={winner} type="logo" className="w-6 h-6 rounded-md object-contain" />
                                    <span className="font-bold text-sm text-on-surface">{winner.name}</span>
                                    <span className="material-symbols-outlined text-[16px] text-primary ml-auto">verified</span>
                                </div>

                                <div className="flex items-center gap-3 w-full justify-center p-2 rounded-xl opacity-60">
                                    <ToolImage tool={loser} type="logo" className="w-6 h-6 rounded-md object-contain grayscale" />
                                    <span className="font-medium text-sm text-on-surface-variant">{loser.name}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
