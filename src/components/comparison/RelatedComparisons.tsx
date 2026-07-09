import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/types/tool';

interface RelatedComparisonsProps {
    mainTool: AITool;
    compareTool: AITool;
}

export function RelatedComparisons({ mainTool, compareTool }: RelatedComparisonsProps) {
    // Generate some mock related comparisons based on the tools' compareWith array
    const mainComparisons = (mainTool.compareWith || []).filter(slug => slug !== compareTool.slug).slice(0, 2);
    const compareComparisons = (compareTool.compareWith || []).filter(slug => slug !== mainTool.slug).slice(0, 2);

    const allComparisons = Array.from(new Set([...mainComparisons, ...compareComparisons]));

    if (allComparisons.length === 0) return null;

    return (
        <section className="max-w-5xl mx-auto mb-20 px-4">
            <h2 className="text-2xl font-bold tracking-tight text-on-surface mb-6">Related Comparisons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {allComparisons.map((slug, idx) => (
                    <Link 
                        key={idx} 
                        href={`/compare/${mainTool.slug}-vs-${slug}`}
                        className="bg-surface rounded-2xl p-5 border border-border shadow-sm transition-all hover:shadow-md hover:-translate-y-1 hover:border-primary/30 flex flex-col items-center text-center group"
                    >
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <Image width={100} height={100} src={mainTool.logoUrl} alt={mainTool.name} className="w-8 h-8 rounded-lg object-contain" />
                            <span className="text-xs font-bold text-on-surface-variant">VS</span>
                            {/* We don't have the logo of the 'slug' tool easily available here without fetching, so we'll just use a placeholder styling for the VS text */}
                            <div className="w-8 h-8 rounded-lg bg-surface-secondary flex items-center justify-center border border-border text-xs font-bold uppercase overflow-hidden">
                                {slug.substring(0, 2)}
                            </div>
                        </div>
                        <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                            {mainTool.name} vs {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
