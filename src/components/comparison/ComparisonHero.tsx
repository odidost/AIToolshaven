
import React from 'react';
import Link from 'next/link';
import { AITool } from '@/lib/types/tool';
import { ToolImage } from "@/components/shared/ToolImage";
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { BackgroundPattern } from '@/components/shared/BackgroundPattern';
import { PageContainer } from '@/components/layout/PageContainer';

interface ComparisonHeroProps {
    mainTool: AITool;
    compareTool: AITool;
    categoryName: string;
    categorySlug: string;
}

export function ComparisonHero({ mainTool, compareTool, categoryName, categorySlug }: ComparisonHeroProps) {
    const formattedDate = mainTool.lastUpdated 
        ? new Date(mainTool.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        : new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    return (
        <section className="relative pt-24 pb-20 overflow-hidden isolate">
            <BackgroundPattern type="ambient" opacity={0.05} />
            <BackgroundPattern type="aurora" opacity={0.08} />

            <PageContainer className="relative z-10">
                <div className="mb-8 flex justify-center">
                    <Breadcrumbs
                        items={[
                            { label: categoryName, href: `/category/${categorySlug}` },
                            { label: `${mainTool.name} vs ${compareTool.name}` },
                        ]}
                    />
                </div>

                <div className="max-w-5xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border shadow-sm mb-6 text-sm font-semibold text-primary">
                        <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                        Premium Comparison
                    </div>
                    
                    <h1 className="text-[52px] leading-tight font-bold text-on-surface mb-6 tracking-tight">
                        {mainTool.name} <span className="text-on-surface-variant font-medium">vs</span> {compareTool.name}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-on-surface-variant text-sm font-medium mb-10">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-warning text-xl">star</span>
                            <span>Editorial Rating: {(mainTool.rating + compareTool.rating) / 2 > 4.8 ? 'Excellent' : 'Great'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-success text-xl">verified_user</span>
                            <span>Independent Review</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-xl">update</span>
                            <span>Updated {formattedDate}</span>
                        </div>
                    </div>

                    {/* Hero Cards */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative max-w-4xl mx-auto">
                        {/* Tool A */}
                        <div className="bg-surface/80 backdrop-blur-xl rounded-[24px] p-8 border border-border shadow-lg flex-1 w-full text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-24 h-24 mx-auto bg-surface border border-border rounded-2xl shadow-sm flex items-center justify-center p-2 mb-6">
                                <ToolImage tool={mainTool} type="logo" className="w-full h-full object-contain rounded-xl" />
                            </div>
                            <h2 className="text-2xl font-bold text-on-surface mb-2">{mainTool.name}</h2>
                            <p className="text-on-surface-variant text-sm line-clamp-2">{mainTool.tagline}</p>
                            <Link href={`/tool/${mainTool.slug}`} className="mt-6 inline-flex items-center justify-center w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-primary transition-all">
                                Try {mainTool.name}
                            </Link>
                        </div>

                        {/* VS Divider */}
                        <div className="hidden md:flex flex-col items-center justify-center relative z-20 -mx-6">
                            <div className="w-16 h-16 rounded-full bg-surface border border-border shadow-md flex items-center justify-center text-on-surface-variant font-bold text-lg">
                                VS
                            </div>
                        </div>

                        {/* Tool B */}
                        <div className="bg-surface/80 backdrop-blur-xl rounded-[24px] p-8 border border-border shadow-lg flex-1 w-full text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-24 h-24 mx-auto bg-surface border border-border rounded-2xl shadow-sm flex items-center justify-center p-2 mb-6">
                                <ToolImage tool={compareTool} type="logo" className="w-full h-full object-contain rounded-xl" />
                            </div>
                            <h2 className="text-2xl font-bold text-on-surface mb-2">{compareTool.name}</h2>
                            <p className="text-on-surface-variant text-sm line-clamp-2">{compareTool.tagline}</p>
                            <Link href={`/tool/${compareTool.slug}`} className="mt-6 inline-flex items-center justify-center w-full py-3 rounded-xl bg-surface border border-border text-on-surface font-semibold hover:border-primary hover:text-primary transition-all shadow-sm">
                                Try {compareTool.name}
                            </Link>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="#overview" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-medium transition-colors">
                            Jump to full comparison
                            <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                        </Link>
                    </div>
                </div>
            </PageContainer>
        </section>
    );
}
