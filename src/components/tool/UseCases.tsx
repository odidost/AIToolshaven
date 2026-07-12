"use client";

import { useState } from "react";
import type { AITool } from "@/lib/types/tool";
import { getEditorialDescription } from "@/lib/editorialRegistry";

type UseCasesProps = {
    tool: AITool;
    useCases: string[];
};

export function UseCases({ tool, useCases }: UseCasesProps) {
    const [activeTab, setActiveTab] = useState(0);

    if (!useCases?.length) return null;

    return (
        <section className="my-16">
            <div className="mb-10 max-w-3xl">
                <h2 className="text-fluid-h2 font-bold tracking-tight text-on-surface">
                    Best Use Cases
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-on-surface-variant">
                    Here's a breakdown of how people are actually using this tool in the real world to speed up their workflows.
                </p>
            </div>

            <div className="rounded-[24px] border border-border/50 bg-white p-6 sm:p-8 shadow-sm">
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

                        <h3 className="text-fluid-h3 font-bold text-on-surface mb-4">
                            Ideal for {useCases[activeTab]}
                        </h3>

                        {tool.editorial?.useCaseFocus ? (
                            <div className="text-on-surface-variant leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: tool.editorial.useCaseFocus }} />
                        ) : (
                            <p className="text-on-surface-variant leading-relaxed mb-6">
                                {getEditorialDescription("usecase", useCases[activeTab], `For ${useCases[activeTab].toLowerCase()}, the main draw is how much manual work it eliminates. Instead of getting bogged down in the mechanics of the task, you can pass the redundant steps off to the AI. This doesn't just save time—it frees you up to focus on the actual strategy and creative direction that moves the needle.`)}
                            </p>
                        )}

                        <div className="border-t border-border/50 pt-5 mt-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
                            <span className="text-sm font-bold text-primary">
                                Why it works: Less busywork, more focus on execution.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}