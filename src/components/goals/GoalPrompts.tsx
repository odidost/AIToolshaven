"use client";

import { useState } from "react";
import type { GoalDetails } from "@/lib/data/goal-details";
import { ToolLinkParser } from "@/components/shared/ToolLinkParser";

type GoalPromptsProps = {
    prompts: GoalDetails["prompts"];
    allTools: { name: string; slug: string }[];
};

export function GoalPrompts({ prompts, allTools }: GoalPromptsProps) {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    if (!prompts || prompts.length === 0) return null;

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section id="act" className="mb-16">
            <div className="mb-8 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full shadow-sm border border-emerald-100 mb-4">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">Act Now</span>
                </div>
                <h2 className="text-fluid-h2 font-bold text-slate-900 tracking-tight">Ready-to-Use Prompts</h2>
                <p className="text-slate-500 mt-2 text-lg">Copy and paste these exact prompts into your AI tools to get immediate results.</p>
            </div>
            
            <div className="space-y-8">
                {prompts.map((prompt, index) => (
                    <div key={index} className="rounded-3xl border border-slate-800 bg-[#0d1117] overflow-hidden shadow-2xl relative group">
                        {/* Fake terminal window dots */}
                        <div className="bg-[#161b22] px-6 py-3 flex items-center justify-between border-b border-slate-800/50">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-slate-700 group-hover:bg-amber-500 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-slate-700 group-hover:bg-green-500 transition-colors" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex rounded-md bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-blue-400">
                                        <ToolLinkParser text={prompt.tool} allTools={allTools} />
                                    </span>
                                    <h3 className="font-medium text-sm text-slate-300">{prompt.purpose}</h3>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleCopy(prompt.prompt, index)}
                                className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-lg border ${
                                    copiedIndex === index 
                                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                                        : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                <span className="material-symbols-outlined text-[16px]">
                                    {copiedIndex === index ? "check" : "content_copy"}
                                </span>
                                {copiedIndex === index ? "Copied!" : "Copy Prompt"}
                            </button>
                        </div>
                        <div className="p-6 md:p-8 relative">
                            {/* Line numbers and code */}
                            <div className="flex gap-4">
                                <div className="flex flex-col text-slate-600 font-mono text-sm select-none pt-1">
                                    <span>1</span>
                                    <span>2</span>
                                </div>
                                <pre className="whitespace-pre-wrap font-mono text-sm md:text-base text-slate-300 leading-relaxed overflow-x-auto w-full">
                                    <code className="text-emerald-400">{"// "}{prompt.purpose}</code>{"\n"}
                                    {prompt.prompt}
                                </pre>
                            </div>
                            
                            <div className="mt-8 flex gap-3 items-start text-sm text-slate-400 bg-blue-500/5 border border-blue-500/10 p-4 rounded-2xl">
                                <span className="material-symbols-outlined text-blue-400 text-[18px] shrink-0">lightbulb</span>
                                <p className="leading-relaxed"><strong className="text-blue-300">Pro Tip: </strong>{prompt.tips}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
