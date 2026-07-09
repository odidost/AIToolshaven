import Link from "next/link";
import type { AITool } from "@/lib/types/tool";
import type { ToolCategory } from "@/lib/types/category";
import { QuickFacts } from "./QuickFacts";

type ToolSidebarProps = {
    tool: AITool;
    relatedTools: AITool[];
    categories: ToolCategory[];
    currentCategory?: ToolCategory;
};

export function ToolSidebar({
    tool,
    relatedTools,
    categories,
    currentCategory,
}: ToolSidebarProps) {
    return (
        <aside className="space-y-8 lg:sticky lg:top-24 self-start">

            {/* Trust Badges */}
            <section className="rounded-[24px] border border-border/50 bg-white p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                        <span className="material-symbols-outlined text-[20px]">verified_user</span>
                    </div>
                    <div>
                        <p className="font-bold text-sm text-on-surface">Verified by AIToolsHaven</p>
                        <p className="text-xs text-on-surface-variant">Manual fact-check completed</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-[20px]">update</span>
                    </div>
                    <div>
                        <p className="font-bold text-sm text-on-surface">Regularly Updated</p>
                        <p className="text-xs text-on-surface-variant">Pricing and features verified</p>
                    </div>
                </div>
            </section>

            {/* Quick Facts */}
            <QuickFacts tool={tool} />

            {/* Recommended Tools */}
            <section className="rounded-[24px] border border-border/50 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-on-surface">
                    <span className="material-symbols-outlined text-primary text-[24px]">smart_toy</span>
                    Alternative Tools
                </h3>

                <div className="space-y-4">
                    {relatedTools.map((t) => (
                        <Link
                            key={t.id}
                            href={`/tool/${t.slug}`}
                            className="group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-surface-secondary hover:translate-x-1 border border-transparent hover:border-border/50"
                        >
                            <img
                                src={t.logoUrl}
                                alt={t.name}
                                className="h-14 w-14 rounded-xl border border-border/50 bg-white object-cover shadow-xs transition-transform group-hover:scale-105"
                            />

                            <div className="flex-1 min-w-0">
                                <p className="truncate font-bold text-on-surface group-hover:text-primary transition-colors">
                                    {t.name}
                                </p>
                                <p className="truncate text-xs text-on-surface-variant mt-0.5">
                                    {t.tagline}
                                </p>
                                <div className="mt-1.5 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-warning fill-current">star</span>
                                    <span className="text-xs font-bold text-on-surface">{t.rating}</span>
                                </div>
                            </div>

                            <span className="material-symbols-outlined text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                                arrow_forward
                            </span>
                        </Link>
                    ))}
                </div>

                <Link
                    href={`/category/${currentCategory?.slug}`}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-border/50 bg-surface-secondary/50 px-5 py-3 text-sm font-semibold text-on-surface transition-all duration-300 hover:bg-surface-secondary hover:border-primary/50"
                >
                    View All {currentCategory?.name}
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
            </section>

            {/* Categories */}
            <section className="rounded-[24px] border border-border/50 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-on-surface">
                    <span className="material-symbols-outlined text-primary text-[24px]">category</span>
                    Explore Categories
                </h3>

                <div className="flex flex-wrap gap-2.5">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="rounded-full border border-border/50 bg-surface-secondary/30 px-4 py-2 text-xs font-semibold text-on-surface transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-sm"
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </section>
        </aside>
    );
}