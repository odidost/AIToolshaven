"use client";

import { useState } from "react";
import type { AITool } from "@/lib/types/tool";
import { getEditorialDescription } from "@/lib/editorialRegistry";

type UseCasesProps = {
    tool: AITool;
    useCases: (string | { title: string; description: string })[];
};

export function UseCases({ tool, useCases }: UseCasesProps) {
    const [activeTab, setActiveTab] = useState(0);

    if (!useCases?.length) return null;

    return (
        <section className="my-16">
            <div className="mb-10 max-w-3xl">
                <h2 className="text-fluid-h3 animate-in fade-in slide-in-from-bottom-4 duration-700 font-bold tracking-tight text-on-surface">
                    Best Use Cases
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-on-surface-variant">
                    Here's a breakdown of how people are actually using this tool in the real world to speed up their workflows.
                </p>
            </div>

            <div className="rounded-[24px] border border-border/50 bg-white p-6 sm:p-8 shadow-sm">
                {/* Tabs Header */}
                <div className="flex flex-wrap gap-2.5 border-b border-border/50 pb-6 mb-8">
                    {useCases.map((item, idx) => {
                        let parsedItem = item;
                        if (typeof item === 'string' && item.trim().startsWith('{')) {
                            try {
                                parsedItem = JSON.parse(item);
                            } catch (e) {}
                        }
                        const title = typeof parsedItem === 'object' && parsedItem !== null ? parsedItem.title : parsedItem;
                        return (
                            <button
                                key={title || idx}
                                onClick={() => setActiveTab(idx)}
                                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                    activeTab === idx
                                    ? "bg-primary text-white shadow-sm shadow-glow-primary"
                                    : "bg-surface-secondary text-on-surface-variant hover:bg-border/50"
                                }`}
                            >
                                {title}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="flex flex-col md:flex-row md:items-center gap-8 animate-fadeIn">
                    <div className="flex-1">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-[28px]">
                                rocket_launch
                            </span>
                        </div>

                        {(() => {
                            let activeItem = useCases[activeTab];
                            if (typeof activeItem === 'string' && activeItem.trim().startsWith('{')) {
                                try {
                                    activeItem = JSON.parse(activeItem);
                                } catch (e) {}
                            }
                            const isObj = typeof activeItem === 'object' && activeItem !== null;
                            const title = isObj ? (activeItem as any).title : activeItem as string;
                            // Remove tool.editorial?.useCaseFocus from rendering for ALL tabs, let the object drive the unique description
                            const desc = isObj ? (activeItem as any).description : getEditorialDescription("usecase", title, "This is a prime example of where the tool demonstrates massive ROI. By leveraging its core feature set for this workflow, teams often see hours of manual work reduced to mere minutes.");
                            
                            return (
                                <>
                                    <h3 className="text-fluid-h3 font-bold text-on-surface mb-4">
                                        Ideal for {title}
                                    </h3>
                                    <div className="text-on-surface-variant leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: desc }} />
                                </>
                            );
                        })()}

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