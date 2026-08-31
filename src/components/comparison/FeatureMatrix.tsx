import React from 'react';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";
import { getEditorialTitle } from "@/lib/utils";

interface FeatureMatrixProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function FeatureMatrix({ mainTool, compareTool }: FeatureMatrixProps) {
    const coreSpecs = [
        { title: 'Free Tier Available', hasA: mainTool.priceModel === 'Free' || mainTool.priceModel === 'Freemium', hasB: compareTool.priceModel === 'Free' || compareTool.priceModel === 'Freemium' },
        { title: 'Free Trial Access', hasA: Boolean(mainTool.freeTrial), hasB: Boolean(compareTool.freeTrial) },
        { title: 'Developer API Support', hasA: Boolean(mainTool.api), hasB: Boolean(compareTool.api) },
        { title: 'Dedicated Mobile App', hasA: Boolean(mainTool.mobileApp), hasB: Boolean(compareTool.mobileApp) },
        { title: 'Open Source Codebase', hasA: Boolean(mainTool.openSource), hasB: Boolean(compareTool.openSource) },
    ];

    const allFeatureTitles = Array.from(
        new Set([
            ...mainTool.features.map(f => getEditorialTitle(f)),
            ...compareTool.features.map(f => getEditorialTitle(f))
        ])
    ).slice(0, 10);

    return (
        <section id="features" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary text-2xl">checklist</span>
                        <h2 className="text-[28px] sm:text-[34px] font-bold tracking-tight text-on-surface">Feature & Capability Matrix</h2>
                    </div>
                    <p className="text-on-surface-variant text-sm sm:text-base">
                        Direct comparison of verified core capabilities and product-specific features.
                    </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-secondary text-xs font-semibold text-on-surface-variant border border-border shrink-0 self-start sm:self-auto">
                    <span className="material-symbols-outlined text-[14px] text-success">fact_check</span>
                    Audited Features
                </div>
            </div>

            <div className="bg-surface rounded-[24px] border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-secondary/60 border-b border-border">
                                <th className="sticky left-0 bg-surface-secondary/95 backdrop-blur z-10 p-4 sm:p-5 font-bold text-on-surface w-1/3 shadow-[1px_0_0_var(--border)] text-xs sm:text-sm">
                                    Feature / Requirement
                                </th>
                                <th className="p-4 sm:p-5 text-center font-bold text-on-surface w-1/3 border-l border-border text-xs sm:text-sm">
                                    <div className="flex flex-col items-center gap-2">
                                        <ToolImage tool={mainTool} type="logo" className="w-7 h-7 rounded-md object-contain bg-surface p-0.5 border border-border" />
                                        <span>{mainTool.name}</span>
                                    </div>
                                </th>
                                <th className="p-4 sm:p-5 text-center font-bold text-on-surface w-1/3 border-l border-border text-xs sm:text-sm">
                                    <div className="flex flex-col items-center gap-2">
                                        <ToolImage tool={compareTool} type="logo" className="w-7 h-7 rounded-md object-contain bg-surface p-0.5 border border-border" />
                                        <span>{compareTool.name}</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Section Header: Core Specifications */}
                            <tr className="bg-surface-secondary/30 border-b border-border">
                                <td colSpan={3} className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary">
                                    Verified Core Capabilities
                                </td>
                            </tr>
                            {coreSpecs.map((spec) => (
                                <tr key={spec.title} className="border-b border-border hover:bg-surface-secondary/20 transition-colors">
                                    <td className="sticky left-0 bg-surface/95 backdrop-blur z-10 p-4 sm:p-5 font-semibold text-on-surface shadow-[1px_0_0_var(--border)] text-xs sm:text-sm">
                                        {spec.title}
                                    </td>
                                    <td className="p-4 sm:p-5 text-center border-l border-border">
                                        <div className="flex justify-center">
                                            {spec.hasA ? (
                                                <span className="material-symbols-outlined text-success text-[20px]">check_circle</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-on-surface-variant/30 text-[20px]">remove</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 sm:p-5 text-center border-l border-border">
                                        <div className="flex justify-center">
                                            {spec.hasB ? (
                                                <span className="material-symbols-outlined text-success text-[20px]">check_circle</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-on-surface-variant/30 text-[20px]">remove</span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {/* Section Header: Product Specific Highlights */}
                            {allFeatureTitles.length > 0 && (
                                <tr className="bg-surface-secondary/30 border-b border-border">
                                    <td colSpan={3} className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                                        Product-Specific Highlights
                                    </td>
                                </tr>
                            )}
                            {allFeatureTitles.map((featureTitle, i) => {
                                const hasA = mainTool.features.some(f => getEditorialTitle(f) === featureTitle);
                                const hasB = compareTool.features.some(f => getEditorialTitle(f) === featureTitle);

                                return (
                                    <tr 
                                        key={featureTitle} 
                                        className={`transition-colors hover:bg-surface-secondary/30 ${i !== allFeatureTitles.length - 1 ? "border-b border-border" : ""}`}
                                    >
                                        <td className="sticky left-0 bg-surface/90 backdrop-blur z-10 p-5 font-medium text-on-surface-variant shadow-[1px_0_0_var(--border)]">
                                            {featureTitle}
                                        </td>
                                        <td className="p-5 text-center border-l border-border">
                                            {hasA ? (
                                                <div className="flex justify-center">
                                                    <span className="material-symbols-outlined text-success">check_circle</span>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center">
                                                    <span className="material-symbols-outlined text-on-surface-variant/30">remove</span>
                                                </div>
                                            )}
                                        </td>
                                        <td className="p-5 text-center border-l border-border">
                                            {hasB ? (
                                                <div className="flex justify-center">
                                                    <span className="material-symbols-outlined text-success">check_circle</span>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center">
                                                    <span className="material-symbols-outlined text-on-surface-variant/30">remove</span>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
