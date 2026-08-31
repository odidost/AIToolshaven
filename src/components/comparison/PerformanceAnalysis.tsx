import React from 'react';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";

interface PerformanceAnalysisProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function PerformanceAnalysis({ mainTool, compareTool }: PerformanceAnalysisProps) {
    const specs = [
        {
            label: 'Pricing Model',
            icon: 'payments',
            mainValue: mainTool.priceModel || 'Freemium',
            compareValue: compareTool.priceModel || 'Freemium',
            mainHighlight: mainTool.priceModel === 'Free' || mainTool.priceModel === 'Freemium',
            compareHighlight: compareTool.priceModel === 'Free' || compareTool.priceModel === 'Freemium',
        },
        {
            label: 'Free Trial Access',
            icon: 'schedule',
            mainValue: mainTool.freeTrial ? 'Available' : 'No Free Trial',
            compareValue: compareTool.freeTrial ? 'Available' : 'No Free Trial',
            mainHighlight: Boolean(mainTool.freeTrial),
            compareHighlight: Boolean(compareTool.freeTrial),
        },
        {
            label: 'Developer API',
            icon: 'terminal',
            mainValue: mainTool.api ? 'Public API Available' : 'No Public API',
            compareValue: compareTool.api ? 'Public API Available' : 'No Public API',
            mainHighlight: Boolean(mainTool.api),
            compareHighlight: Boolean(compareTool.api),
        },
        {
            label: 'Platform Coverage',
            icon: 'devices',
            mainValue: mainTool.platform || 'Web Application',
            compareValue: compareTool.platform || 'Web Application',
            mainHighlight: Boolean(mainTool.platform && mainTool.platform.toLowerCase().includes('desktop')),
            compareHighlight: Boolean(compareTool.platform && compareTool.platform.toLowerCase().includes('desktop')),
        },
        {
            label: 'Mobile Support',
            icon: 'smartphone',
            mainValue: mainTool.mobileApp ? 'Mobile Apps (iOS/Android)' : 'Web/Responsive Only',
            compareValue: compareTool.mobileApp ? 'Mobile Apps (iOS/Android)' : 'Web/Responsive Only',
            mainHighlight: Boolean(mainTool.mobileApp),
            compareHighlight: Boolean(compareTool.mobileApp),
        },
        {
            label: 'Codebase Type',
            icon: 'code_blocks',
            mainValue: mainTool.openSource ? 'Open Source' : 'Proprietary Commercial',
            compareValue: compareTool.openSource ? 'Open Source' : 'Proprietary Commercial',
            mainHighlight: Boolean(mainTool.openSource),
            compareHighlight: Boolean(compareTool.openSource),
        },
        {
            label: 'Verified Status',
            icon: 'verified',
            mainValue: mainTool.verified ? 'Verified Standard' : 'Community Indexed',
            compareValue: compareTool.verified ? 'Verified Standard' : 'Community Indexed',
            mainHighlight: Boolean(mainTool.verified),
            compareHighlight: Boolean(compareTool.verified),
        },
        {
            label: 'Community Reviews',
            icon: 'star',
            mainValue: (mainTool.reviewCount || 0) > 0 && mainTool.rating 
                ? `★ ${mainTool.rating} (${mainTool.reviewCount?.toLocaleString()} reviews)` 
                : 'No community reviews yet',
            compareValue: (compareTool.reviewCount || 0) > 0 && compareTool.rating 
                ? `★ ${compareTool.rating} (${compareTool.reviewCount?.toLocaleString()} reviews)` 
                : 'No community reviews yet',
            mainHighlight: (mainTool.reviewCount || 0) > 0,
            compareHighlight: (compareTool.reviewCount || 0) > 0,
        },
    ];

    return (
        <section id="performance" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary text-2xl">tune</span>
                        <h2 className="text-[28px] sm:text-[34px] font-bold tracking-tight text-on-surface">
                            Technical Specifications & Capabilities
                        </h2>
                    </div>
                    <p className="text-on-surface-variant text-sm sm:text-base">
                        Side-by-side factual breakdown of access models, APIs, and platform availability.
                    </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-secondary text-xs font-semibold text-on-surface-variant border border-border shrink-0 self-start sm:self-auto">
                    <span className="material-symbols-outlined text-[14px] text-success">verified_user</span>
                    Verified Product Specs
                </div>
            </div>

            <div className="bg-surface rounded-[24px] border border-border shadow-sm overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-surface-secondary/60 p-4 sm:p-5 border-b border-border text-xs sm:text-sm font-bold text-on-surface">
                    <div className="col-span-4 sm:col-span-4 flex items-center text-on-surface-variant">
                        Capability / Dimension
                    </div>
                    <div className="col-span-4 sm:col-span-4 flex items-center justify-center gap-2 text-center">
                        <ToolImage tool={mainTool} type="logo" className="w-5 h-5 rounded-md object-contain bg-surface p-0.5 border border-border hidden sm:inline-block" />
                        <span className="truncate">{mainTool.name}</span>
                    </div>
                    <div className="col-span-4 sm:col-span-4 flex items-center justify-center gap-2 text-center">
                        <ToolImage tool={compareTool} type="logo" className="w-5 h-5 rounded-md object-contain bg-surface p-0.5 border border-border hidden sm:inline-block" />
                        <span className="truncate">{compareTool.name}</span>
                    </div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-border">
                    {specs.map((spec, idx) => (
                        <div 
                            key={idx} 
                            className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-surface-secondary/20 transition-colors"
                        >
                            {/* Dimension Label */}
                            <div className="col-span-4 sm:col-span-4 flex items-center gap-2 min-w-0 pr-2">
                                <span className="material-symbols-outlined text-[18px] text-on-surface-variant/70 shrink-0 hidden sm:inline-block">
                                    {spec.icon}
                                </span>
                                <span className="text-xs sm:text-sm font-semibold text-on-surface truncate">
                                    {spec.label}
                                </span>
                            </div>

                            {/* Main Tool Value */}
                            <div className="col-span-4 sm:col-span-4 px-2 text-center">
                                <span 
                                    className={`inline-block text-xs sm:text-sm px-2.5 py-1 rounded-lg font-medium leading-tight ${
                                        spec.mainHighlight 
                                            ? 'bg-primary/10 text-primary font-semibold border border-primary/20' 
                                            : 'text-on-surface-variant bg-surface-secondary/50'
                                    }`}
                                >
                                    {spec.mainValue}
                                </span>
                            </div>

                            {/* Compare Tool Value */}
                            <div className="col-span-4 sm:col-span-4 px-2 text-center">
                                <span 
                                    className={`inline-block text-xs sm:text-sm px-2.5 py-1 rounded-lg font-medium leading-tight ${
                                        spec.compareHighlight 
                                            ? 'bg-primary/10 text-primary font-semibold border border-primary/20' 
                                            : 'text-on-surface-variant bg-surface-secondary/50'
                                    }`}
                                >
                                    {spec.compareValue}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Methodology Footer */}
                <div className="p-4 bg-surface-secondary/30 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-on-surface-variant gap-2">
                    <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-primary">info</span>
                        Data verified against vendor documentation, official pricing schedules, and developer endpoints.
                    </span>
                    <span className="text-[11px] text-on-surface-variant/70">Updated regularly for accuracy</span>
                </div>
            </div>
        </section>
    );
}
