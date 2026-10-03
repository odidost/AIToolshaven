"use client";

import Link from "next/link";
import { ComparisonData } from "@/lib/comparisons";
import { ToolImage } from "@/components/shared/ToolImage";
import type { AITool } from "@/lib/types/tool";
import { ArrowRight } from "lucide-react";

export function ComparisonCard({ data, fullTool1, fullTool2 }: { data: ComparisonData, fullTool1?: AITool, fullTool2?: AITool }) {
    const tool1Data = fullTool1 || {
        name: data.tool1.name,
        slug: data.tool1.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        logoUrl: data.tool1.logoUrl,
    };

    const tool2Data = fullTool2 || {
        name: data.tool2.name,
        slug: data.tool2.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        logoUrl: data.tool2.logoUrl,
    };

    return (
        <Link href={`/compare-tools/${data.slug}`} className="block group w-full h-full">
            <div className="flex flex-col justify-between bg-white rounded-lg border border-[#E5E7EB] p-5 hover:border-[#E11D48]/50 hover:shadow-xs transition-all shadow-none h-full min-h-[200px]">
                
                {/* The Top Comparison Header with Logos */}
                <div className="flex items-center justify-between gap-3">
                    
                    {/* Tool 1 */}
                    <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-10 h-10 rounded-md border border-[#E5E7EB] bg-white p-1 flex items-center justify-center shrink-0 group-hover:border-[#E11D48]/30 transition-colors">
                            <ToolImage tool={tool1Data} type="logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-semibold text-[#0A0A0A] text-sm truncate group-hover:text-[#E11D48] transition-colors">{data.tool1.name}</span>
                    </div>

                    {/* VS Badge */}
                    <span className="text-[11px] font-mono font-semibold text-[#4B5563] bg-[#F9FAFB] border border-[#E5E7EB] px-2 py-0.5 rounded shrink-0 group-hover:border-[#FECDD3] group-hover:bg-[#FFF1F2] group-hover:text-[#E11D48] transition-colors">
                        VS
                    </span>

                    {/* Tool 2 */}
                    <div className="flex items-center gap-2.5 min-w-0 justify-end">
                        <span className="font-semibold text-[#0A0A0A] text-sm truncate text-right group-hover:text-[#E11D48] transition-colors">{data.tool2.name}</span>
                        <div className="w-10 h-10 rounded-md border border-[#E5E7EB] bg-white p-1 flex items-center justify-center shrink-0 group-hover:border-[#E11D48]/30 transition-colors">
                            <ToolImage tool={tool2Data} type="logo" className="w-full h-full object-contain" />
                        </div>
                    </div>

                </div>

                {/* Lower Description and Action */}
                <div className="mt-5 pt-3.5 border-t border-[#E5E7EB] flex flex-col gap-2">
                    <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed">
                        {data.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#E11D48] group-hover:text-[#BE123C] transition-colors mt-1">
                        <span>Compare features &amp; pricing</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </div>
                </div>

            </div>
        </Link>
    );
}
