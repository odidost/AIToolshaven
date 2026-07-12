import React from 'react';
import { AITool } from '@/lib/types/tool';

interface PerformanceAnalysisProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function PerformanceAnalysis({ mainTool, compareTool }: PerformanceAnalysisProps) {
    const metrics = [
        { label: 'Overall Rating', main: mainTool.rating || 0, compare: compareTool.rating || 0 },
        { label: 'Feature Richness', main: mainTool.featureRating || 0, compare: compareTool.featureRating || 0 },
        { label: 'Value for Money', main: mainTool.valueForMoney || 0, compare: compareTool.valueForMoney || 0 },
        { label: 'Ease of Use', main: mainTool.easeOfUse || 0, compare: compareTool.easeOfUse || 0 },
        { label: 'Performance & Speed', main: mainTool.performance || 0, compare: compareTool.performance || 0 },
        { label: 'Customer Support', main: mainTool.support || 0, compare: compareTool.support || 0 },
    ];

    const getScoreColor = (score: number, otherScore: number) => {
        if (score > otherScore) return 'bg-success';
        if (score < otherScore) return 'bg-surface-secondary/80';
        return 'bg-primary/60';
    };

    return (
        <section id="performance" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-fluid-h2 text-primary">speed</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface">Performance Analysis</h2>
            </div>

            <div className="bg-surface rounded-[24px] p-8 border border-border shadow-sm flex flex-col md:flex-row gap-12">
                {/* Left: Summary */}
                <div className="md:w-1/3 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-on-surface mb-4">Editorial Breakdown</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-6">
                        We analyze tools across multiple dimensions including speed, ease of use, and feature set. 
                        <strong> {mainTool.name}</strong> tends to shine in {mainTool.performance && mainTool.performance >= (mainTool.featureRating || 0) ? 'raw performance and speed' : 'feature richness and capabilities'}, 
                        while <strong>{compareTool.name}</strong> offers strong competition particularly in {compareTool.easeOfUse && compareTool.easeOfUse > (compareTool.performance || 0) ? 'user experience and accessibility' : 'specialized workflows'}.
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-success"></div>
                            <span>Winner</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                            <span>Tie</span>
                        </div>
                    </div>
                </div>

                {/* Right: Progress Bars */}
                <div className="md:w-2/3 space-y-6">
                    {/* Header Row */}
                    <div className="flex text-sm font-bold text-on-surface-variant mb-2">
                        <div className="w-1/3">Metric (Out of 5)</div>
                        <div className="w-1/3 text-center">{mainTool.name}</div>
                        <div className="w-1/3 text-center">{compareTool.name}</div>
                    </div>

                    {/* Metrics */}
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center">
                            <div className="w-1/3 text-sm font-semibold text-on-surface">
                                {metric.label}
                            </div>
                            
                            {/* Main Tool Bar */}
                            <div className="w-1/3 px-4">
                                <div className="flex items-center justify-end gap-3">
                                    <span className="text-xs font-bold w-6 text-right">{metric.main.toFixed(1)}</span>
                                    <div className="h-2 flex-grow bg-surface-secondary rounded-full overflow-hidden flex justify-end">
                                        <div 
                                            className={`h-full rounded-full transition-all ${getScoreColor(metric.main, metric.compare)}`}
                                            style={{ width: `${(metric.main / 5) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Compare Tool Bar */}
                            <div className="w-1/3 px-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-2 flex-grow bg-surface-secondary rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full transition-all ${getScoreColor(metric.compare, metric.main)}`}
                                            style={{ width: `${(metric.compare / 5) * 100}%` }}
                                        />
                                    </div>
                                    <span className="text-xs font-bold w-6">{metric.compare.toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
