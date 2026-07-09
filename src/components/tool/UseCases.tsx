"use client";

import { useState } from "react";

type UseCasesProps = {
    useCases: string[];
};

export function UseCases({ useCases }: UseCasesProps) {
    const [activeTab, setActiveTab] = useState(0);

    if (!useCases?.length) return null;

    return (
        <section className="my-16">
            <div className="mb-10 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight text-on-surface">
                    Best Use Cases
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-on-surface-variant">
                    Discover how different professionals and teams use this tool to accelerate their workflows and achieve better results.
                </p>
            </div>

            <div className="rounded-[24px] border border-border/50 bg-white p-8 shadow-sm">
                {/* Tabs Header */}
                <div className="flex flex-wrap gap-2.5 border-b border-border/50 pb-6 mb-8">
                    {useCases.map((item, idx) => (
                        <button
                            key={item}
                            onClick={() => setActiveTab(idx)}
                            className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                activeTab === idx
                                ? "bg-primary text-white shadow-sm shadow-glow-primary"
                                : "bg-surface-secondary text-on-surface-variant hover:bg-border/50"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="flex flex-col md:flex-row md:items-center gap-8 animate-fadeIn">
                    <div className="flex-1">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-[28px]">
                                rocket_launch
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-on-surface mb-4">
                            Ideal for {useCases[activeTab]}
                        </h3>

                        <p className="text-on-surface-variant leading-relaxed mb-6">
                            This tool fits perfectly for {useCases[activeTab].toLowerCase()} by addressing specific pain points in their daily operations, enabling faster execution, and improving productivity. By adopting this tool, {useCases[activeTab].toLowerCase()} can automate redundant processes and focus on high-impact strategic goals.
                        </p>

                        <div className="border-t border-border/50 pt-5 mt-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
                            <span className="text-sm font-bold text-primary">
                                Expected Outcome: High Efficiency & Optimized ROI
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}