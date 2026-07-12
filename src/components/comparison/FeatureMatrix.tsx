import React from 'react';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";

interface FeatureMatrixProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function FeatureMatrix({ mainTool, compareTool }: FeatureMatrixProps) {
    const allFeatureTitles = Array.from(
        new Set([
            ...mainTool.features.map(f => typeof f === 'string' ? f : f.title),
            ...compareTool.features.map(f => typeof f === 'string' ? f : f.title)
        ])
    ).sort();

    return (
        <section id="features" className="scroll-mt-32 max-w-5xl mx-auto mb-20 px-4">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-fluid-h2 text-primary">view_list</span>
                <h2 className="text-[34px] font-bold tracking-tight text-on-surface">Feature Comparison</h2>
            </div>

            <div className="bg-surface rounded-[24px] border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-secondary/50 border-b border-border">
                                <th className="sticky left-0 bg-surface-secondary/90 backdrop-blur z-10 p-5 font-bold text-on-surface w-1/3 shadow-[1px_0_0_var(--border)]">
                                    Feature
                                </th>
                                <th className="p-5 text-center font-bold text-on-surface w-1/3 border-l border-border">
                                    <div className="flex flex-col items-center gap-2">
                                        <ToolImage tool={mainTool} type="logo" className="w-8 h-8 rounded-md object-contain bg-surface p-0.5 border border-border" />
                                        <span>{mainTool.name}</span>
                                    </div>
                                </th>
                                <th className="p-5 text-center font-bold text-on-surface w-1/3 border-l border-border">
                                    <div className="flex flex-col items-center gap-2">
                                        <ToolImage tool={compareTool} type="logo" className="w-8 h-8 rounded-md object-contain bg-surface p-0.5 border border-border" />
                                        <span>{compareTool.name}</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allFeatureTitles.map((featureTitle, i) => {
                                const hasA = mainTool.features.some(f => (typeof f === 'string' ? f : f.title) === featureTitle);
                                const hasB = compareTool.features.some(f => (typeof f === 'string' ? f : f.title) === featureTitle);

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
