"use client";

import { useMemo, useState } from "react";

import { ToolCard } from "@/components/shared/ToolCard";
import type { AITool } from "@/lib/types/tool";

type GoalToolGridProps = {
    tools: AITool[];
};

export function GoalToolGrid({
    tools,
}: GoalToolGridProps) {
    const [priceFilter, setPriceFilter] = useState("All");

    const filteredTools = useMemo(() => {
        if (priceFilter === "All") return tools;

        return tools.filter(
            (tool) => tool.priceModel === priceFilter
        );
    }, [tools, priceFilter]);

    return (
        <section className="space-y-8">

            <div className="flex flex-wrap items-center justify-between gap-4">

                <div>
                    <h2 className="text-2xl font-bold">
                        Recommended AI Tools
                    </h2>

                    <p className="text-on-surface-variant mt-1">
                        {filteredTools.length} tools found
                    </p>
                </div>

                <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="rounded-xl border border-outline bg-surface px-4 py-2"
                >
                    <option>All</option>
                    <option>Free</option>
                    <option>Freemium</option>
                    <option>Paid</option>
                    <option>Enterprise</option>
                </select>

            </div>

            {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredTools.map((tool) => (
                        <ToolCard
                            key={tool.id}
                            tool={tool}
                        />
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border border-dashed border-outline p-10 text-center">

                    <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
                        search_off
                    </span>

                    <h3 className="text-xl font-semibold mb-2">
                        No tools match this filter
                    </h3>

                    <p className="text-on-surface-variant">
                        Try selecting another pricing option.
                    </p>

                </div>
            )}

        </section>
    );
}