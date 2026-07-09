"use client";

import { useState } from "react";
import type { GoalDetails } from "@/lib/data/goal-details";

type GoalPromptsProps = {
    prompts: GoalDetails["prompts"];
};

export function GoalPrompts({ prompts }: GoalPromptsProps) {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    if (!prompts || prompts.length === 0) return null;

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-3xl text-primary">terminal</span>
                <h2 className="text-2xl font-bold">Ready-to-Use Prompts</h2>
            </div>
            
            <div className="space-y-6">
                {prompts.map((prompt, index) => (
                    <div key={index} className="rounded-2xl border border-outline bg-surface overflow-hidden shadow-sm">
                        <div className="bg-surface-variant/50 px-6 py-4 flex items-center justify-between border-b border-outline">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex rounded-md bg-primary-container px-2.5 py-1 text-xs font-semibold text-on-primary-container">
                                    {prompt.tool}
                                </span>
                                <h3 className="font-semibold text-sm">{prompt.purpose}</h3>
                            </div>
                            <button 
                                onClick={() => handleCopy(prompt.prompt, index)}
                                className="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined text-[18px]">
                                    {copiedIndex === index ? "check" : "content_copy"}
                                </span>
                                {copiedIndex === index ? "Copied!" : "Copy"}
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="relative">
                                <pre className="whitespace-pre-wrap font-mono text-sm text-on-surface bg-surface-container-lowest p-4 rounded-xl border border-outline/30">
                                    {prompt.prompt}
                                </pre>
                            </div>
                            <div className="mt-4 flex gap-2 items-start text-sm text-on-surface-variant bg-secondary-container/20 p-3 rounded-xl">
                                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">info</span>
                                <p>{prompt.tips}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
