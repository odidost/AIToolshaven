import Link from "next/link";
import type { AITool } from "@/lib/types/tool";
import { SocialShareBar } from "./SocialShareBar";
import { getComparisonCandidates } from "@/lib/queries/comparisons";
import { ToolImage } from "@/components/shared/ToolImage";
import { AuthorAttribution } from "@/components/shared/AuthorAttribution";
import { BookmarkButton } from "./ToolCommunityFeatures";
type ToolHeroProps = {
    tool: AITool;
};

export function ToolHero({ tool }: ToolHeroProps) {
    const compareTool = getComparisonCandidates(tool, 1)[0];
    const compareHref = compareTool ? `/compare-tools/${tool.slug}-vs-${compareTool.slug}` : `/compare-tools/${tool.slug}`;

    return (
        <section className="relative mb-20">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-10%] top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute right-[-10%] bottom-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.06)_0%,transparent_70%)] pointer-events-none" />
            </div>

            <div className="grid lg:grid-cols-[1.9fr_1fr] gap-10 items-start">

                {/* LEFT */}
                <div>

                    {/* Logo + Name */}

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">

                        <div className="flex items-start gap-3 sm:gap-4 w-full">

                            <ToolImage
                                tool={tool}
                                type="logo"
                                className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl border border-outline shrink-0"
                            />

                            <div className="flex-1 min-w-0">

                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">

                                        <h1 className="text-2xl sm:text-fluid-h1 font-bold leading-tight">
                                            {tool.name}
                                        </h1>

                                        {tool.verified && (
                                            <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                                                verified
                                            </span>
                                        )}

                                    </div>

                                    {/* Mobile Icons */}
                                    <div className="flex gap-2 shrink-0 sm:hidden">
                                        <BookmarkButton toolSlug={tool.slug} className="h-9 w-9 sm:h-11 sm:w-11" />
                                        <SocialShareBar toolName={tool.name} urlPath={`/tool/${tool.slug}`} />
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 mt-1 sm:mt-2 text-[12px] sm:text-base flex-wrap">

                                    <span className="text-yellow-500 tracking-tighter">
                                        ★★★★★
                                    </span>

                                    <strong className="leading-none">{tool.rating}</strong>

                                    <span className="text-on-surface-variant leading-none truncate">
                                        ({tool.reviewCount.toLocaleString()} reviews)
                                    </span>

                                </div>

                                {tool.company && (
                                    <p className="text-xs sm:text-sm text-on-surface-variant mt-2">
                                        by {tool.company}
                                    </p>
                                )}

                                <div className="mt-2 sm:mt-3">
                                    <AuthorAttribution />
                                </div>

                            </div>

                        </div>

                        {/* Desktop Icons */}
                        <div className="hidden sm:flex gap-2 self-start shrink-0">

                            <BookmarkButton toolSlug={tool.slug} className="h-11 w-11" />

                            <SocialShareBar toolName={tool.name} urlPath={`/tool/${tool.slug}`} />

                        </div>

                    </div>

                    {/* Screenshot */}

                    <div className="overflow-hidden rounded-[32px] border border-outline bg-surface shadow-2xl">

                        {/* Browser Header */}

                        <div className="flex items-center justify-between border-b border-outline bg-surface-container px-5 py-3">

                            <div className="flex gap-2">

                                <div className="h-3 w-3 rounded-full bg-red-400" />

                                <div className="h-3 w-3 rounded-full bg-yellow-400" />

                                <div className="h-3 w-3 rounded-full bg-green-400" />

                            </div>

                            <div className="rounded-full bg-surface px-5 py-1 text-xs text-on-surface-variant truncate max-w-[180px] sm:max-w-none">
                                {(tool.websiteUrl || tool.url || "").replace("https://", "")}
                            </div>

                            <div className="w-10" />

                        </div>

                        <ToolImage
                            tool={tool}
                            type="screenshot"
                            className="w-full transition duration-500 hover:scale-[1.02]"
                        />

                    </div>

                </div>


                {/* RIGHT */}

                <div className="sticky top-24 rounded-[32px] border border-border/50 bg-surface-secondary/30 p-6 sm:p-8 shadow-sm backdrop-blur-sm">

                    <h2 className="text-fluid-h2 font-bold mb-5">
                        About {tool.name}
                    </h2>

                    <p className="leading-8 text-on-surface-variant mb-8">
                        {tool.description}
                    </p>

                    {/* Quick Facts */}

                    <div className="flex flex-wrap gap-3 mb-8">

                        <div className="flex items-center gap-2 rounded-full border border-outline px-4 py-2">
                            <span className="material-symbols-outlined text-base">
                                payments
                            </span>
                            <span>{tool.priceModel}</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-outline px-4 py-2">
                            <span className="material-symbols-outlined text-base">
                                language
                            </span>
                            <span>{tool.platform}</span>
                        </div>

                        {tool.api && (
                            <div className="flex items-center gap-2 rounded-full border border-outline px-4 py-2">
                                <span className="material-symbols-outlined text-base">
                                    api
                                </span>
                                <span>API</span>
                            </div>
                        )}

                        {tool.mobileApp && (
                            <div className="flex items-center gap-2 rounded-full border border-outline px-4 py-2">
                                <span className="material-symbols-outlined text-base">
                                    smartphone
                                </span>
                                <span>Mobile</span>
                            </div>
                        )}

                        {tool.verified && (
                            <div className="flex items-center gap-2 rounded-full border border-outline px-4 py-2">
                                <span className="material-symbols-outlined text-base text-primary">
                                    verified
                                </span>
                                <span>Verified</span>
                            </div>
                        )}

                    </div>

                    <div className="flex flex-wrap gap-3">

                        {(tool.websiteUrl || tool.url) && (
                            <Link
                                href={tool.websiteUrl || tool.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 py-4 font-semibold text-white transition-all shadow-glow hover:shadow-glow-primary hover:-translate-y-[0.5px]"
                            >
                                <span className="material-symbols-outlined">
                                    open_in_new
                                </span>
                                Visit Website
                            </Link>
                        )}

                        <Link
                            href={compareHref}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-6 py-4 font-semibold transition-all shadow-xs hover:shadow-sm hover:border-primary hover:bg-surface-secondary hover:-translate-y-[0.5px]"
                        >
                            <span className="material-symbols-outlined">
                                compare_arrows
                            </span>
                            Compare
                        </Link>

                        <BookmarkButton toolSlug={tool.slug} variant="button" className="w-full sm:w-auto" />

                    </div>

                </div>

            </div>

        </section>
    );
}