import Link from "next/link";
import type { AITool } from "@/lib/mock-data";

type ToolHeroProps = {
    tool: AITool;
};

export function ToolHero({ tool }: ToolHeroProps) {
    return (
        <section className="mb-12 rounded-3xl border border-outline bg-surface-container p-8 lg:p-10 shadow-sm">

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Logo */}

                <div className="flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={tool.imageUrl}
                        alt={tool.name}
                        className="w-36 h-36 lg:w-44 lg:h-44 rounded-3xl border border-outline object-cover shadow-sm"
                    />
                </div>

                {/* Main Content */}

                <div className="flex-1">

                    {/* Badges */}

                    <div className="flex flex-wrap gap-3 mb-5">

                        {tool.verified && (
                            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-semibold">
                                <span className="material-symbols-outlined text-base">
                                    verified
                                </span>
                                Verified
                            </span>
                        )}

                        <span className="rounded-full bg-primary-container px-4 py-2 text-sm font-semibold">
                            {tool.priceModel}
                        </span>

                        <span className="rounded-full border border-outline px-4 py-2 text-sm">
                            {tool.platform}
                        </span>

                    </div>

                    {/* Name */}

                    <h1 className="text-5xl font-bold mb-3 tracking-tight">
                        {tool.name}
                    </h1>

                    {/* Tagline */}

                    <p className="text-xl text-on-surface-variant mb-6">
                        {tool.tagline}
                    </p>

                    {/* Rating */}

                    <div className="flex flex-wrap items-center gap-6 mb-8">

                        <div className="flex items-center gap-2">

                            <span className="text-yellow-500 text-xl">
                                ★★★★★
                            </span>

                            <span className="font-semibold">
                                {tool.rating}
                            </span>

                            <span className="text-on-surface-variant">
                                ({tool.reviewCount} reviews)
                            </span>

                        </div>

                        {tool.api && (
                            <div className="flex items-center gap-2 text-sm">
                                ⚡ API Available
                            </div>
                        )}

                        {tool.freeTrial && (
                            <div className="flex items-center gap-2 text-sm">
                                🎁 Free Trial
                            </div>
                        )}

                    </div>

                    {/* Description */}

                    <p className="max-w-3xl leading-8 text-on-surface mb-8">
                        {tool.description}
                    </p>

                    {/* Tags */}

                    <div className="flex flex-wrap gap-3 mb-8">

                        {tool.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-outline px-4 py-2 text-sm hover:border-primary transition"
                            >
                                {tag}
                            </span>
                        ))}

                    </div>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4">

                        <a
                            href={tool.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:scale-[1.02]"
                        >
                            Visit Website →
                        </a>

                        <Link
                            href={`/compare/${tool.slug}`}
                            className="rounded-xl border border-outline px-8 py-4 font-semibold transition hover:border-primary"
                        >
                            Compare Tool
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}