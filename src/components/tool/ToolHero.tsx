import Link from "next/link";
import type { AITool } from "@/lib/types/tool";
import { SocialShareBar } from "./SocialShareBar";

type ToolHeroProps = {
    tool: AITool;
};

export function ToolHero({ tool }: ToolHeroProps) {
    return (
        <section className="relative mb-20">
            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

                <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

            </div>

            <div className="grid lg:grid-cols-[1.9fr_1fr] gap-10 items-start">

                {/* LEFT */}
                <div>

                    {/* Logo + Name */}

                    <div className="flex items-start justify-between mb-6">

                        <div className="flex items-start gap-4">

                            <img
                                src={tool.logoUrl}
                                alt={tool.name}
                                className="h-14 w-14 rounded-2xl border border-outline"
                            />

                            <div>

                                <div className="flex items-center gap-2">

                                    <h1 className="text-4xl font-bold">
                                        {tool.name}
                                    </h1>

                                    {tool.verified && (
                                        <span className="material-symbols-outlined text-primary">
                                            verified
                                        </span>
                                    )}

                                </div>

                                <div className="flex items-center gap-2 mt-2">

                                    <span className="text-yellow-500">
                                        ★★★★★
                                    </span>

                                    <strong>{tool.rating}</strong>

                                    <span className="text-on-surface-variant">
                                        ({tool.reviewCount.toLocaleString()} reviews)
                                    </span>

                                </div>

                                <p className="text-sm text-on-surface-variant mt-2">
                                    by {tool.company}
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-2">

                            <button className="h-11 w-11 rounded-xl border border-outline flex items-center justify-center hover:bg-surface-container hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">
                                    bookmark
                                </span>
                            </button>

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

                            <div className="rounded-full bg-surface px-5 py-1 text-xs text-on-surface-variant">
                                {tool.websiteUrl.replace("https://", "")}
                            </div>

                            <div className="w-10" />

                        </div>

                        <img
                            src={tool.screenshotUrl}
                            alt={tool.name}
                            className="w-full transition duration-500 hover:scale-[1.02]"
                        />

                    </div>

                </div>


                {/* RIGHT */}

                <div className="sticky top-24 rounded-[32px] border border-outline bg-gradient-to-b from-surface to-surface-container p-8 shadow-lg">

                    <h2 className="text-2xl font-bold mb-5">
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

                        <Link
                            href={tool.websiteUrl}
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90"
                        >
                            <span className="material-symbols-outlined">
                                open_in_new
                            </span>
                            Visit Website
                        </Link>

                        <Link
                            href={`/compare/${tool.slug}`}
                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-outline px-6 py-4 font-semibold transition hover:border-primary"
                        >
                            <span className="material-symbols-outlined">
                                compare_arrows
                            </span>
                            Compare
                        </Link>

                        <button
                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-outline px-6 py-4 font-semibold transition hover:border-primary"
                        >
                            <span className="material-symbols-outlined">
                                bookmark
                            </span>
                            Save
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}