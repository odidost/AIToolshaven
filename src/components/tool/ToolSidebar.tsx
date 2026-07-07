import Link from "next/link";
import type { AITool } from "@/lib/types/tool";
import type { ToolCategory } from "@/lib/types/category";

type ToolSidebarProps = {
    featuredTool: AITool;
    relatedTools: AITool[];
    categories: ToolCategory[];
    currentCategory?: ToolCategory;
};

export function ToolSidebar({
    featuredTool,
    relatedTools,
    categories,
    currentCategory,
}: ToolSidebarProps) {
    return (
        <aside className="space-y-8 lg:sticky lg:top-24 self-start">

            {/* Editor's Pick */}

            <section
                className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-primary/20
                bg-gradient-to-br
                from-primary/5
                via-surface
                to-surface-secondary/50
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-[0.5px]
                hover:shadow-md
                hover:shadow-glow
                "
            >

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative">

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">

                        <span className="material-symbols-outlined text-base">
                            workspace_premium
                        </span>

                        Editor&apos;s Pick

                    </div>

                    <Link href={`/tool/${featuredTool.slug}`}>

                        <img
                            src={featuredTool.logoUrl}
                            alt={featuredTool.name}
                            className="mb-5 h-20 w-20 rounded-2xl border bg-white object-cover shadow-lg"
                        />

                        <h3 className="text-2xl font-bold">
                            {featuredTool.name}
                        </h3>

                        <p className="mt-2 text-on-surface-variant">
                            {featuredTool.tagline}
                        </p>

                        <div className="mt-5 flex items-center gap-2">

                            <span className="material-symbols-outlined text-yellow-500">
                                star
                            </span>

                            <span className="font-bold">
                                {featuredTool.rating}
                            </span>

                            <span className="text-sm text-on-surface-variant">
                                Editor Recommended
                            </span>

                        </div>

                        <div
                            className="
                            mt-7
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-gradient-to-r
                            from-primary
                            to-secondary
                            py-4
                            font-semibold
                            text-white
                            transition-all
                            shadow-glow
                            hover:-translate-y-[0.5px]
                            hover:shadow-glow-primary
                            "
                        >

                            View Tool

                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>

                        </div>

                    </Link>

                </div>

            </section>

            {/* Recommended Tools */}

            <section
                className="
                rounded-3xl
                border
                border-border/50
                bg-surface-secondary/30
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:shadow-md
                "
            >

                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">

                    <span className="material-symbols-outlined text-primary">
                        smart_toy
                    </span>

                    Alternative AI Tools

                </h3>

                <div className="space-y-2">

                    {relatedTools.map((tool) => (

                        <Link
                            key={tool.id}
                            href={`/tool/${tool.slug}`}
                            className="
                            group
                            flex
                            items-center
                            gap-4
                            rounded-2xl
                            p-3
                            transition-all
                            duration-300
                            hover:bg-primary/5
                            hover:translate-x-1
                            "
                        >

                            <img
                                src={tool.logoUrl}
                                alt={tool.name}
                                className="
                                h-12
                                w-12
                                rounded-xl
                                border
                                bg-white
                                object-cover
                                transition
                                group-hover:scale-105
                                "
                            />

                            <div className="flex-1 min-w-0">

                                <p className="truncate font-semibold">
                                    {tool.name}
                                </p>

                                <p className="truncate text-sm text-on-surface-variant">
                                    {tool.tagline}
                                </p>

                                <div className="mt-2 flex items-center gap-1">

                                    <span className="material-symbols-outlined text-[18px] text-yellow-500">
                                        star
                                    </span>

                                    <span className="text-sm font-medium">
                                        {tool.rating}
                                    </span>

                                </div>

                            </div>

                            <span
                                className="
                                material-symbols-outlined
                                opacity-0
                                transition-all
                                group-hover:translate-x-1
                                group-hover:opacity-100
                                "
                            >
                                arrow_forward
                            </span>

                        </Link>

                    ))}

                </div>

                <Link
                    href={`/category/${currentCategory?.slug}`}
                    className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-border
                    bg-surface
                    px-5
                    py-3
                    font-semibold
                    text-on-surface
                    shadow-xs
                    transition-all
                    duration-300
                    hover:bg-surface-secondary
                    hover:border-primary
                    hover:-translate-y-[0.5px]
                    "
                >

                    View All {currentCategory?.name}

                    <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                    </span>

                </Link>

            </section>

            {/* Categories */}

            <section
                className="
                rounded-3xl
                border
                border-border/50
                bg-surface-secondary/30
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:shadow-md
                "
            >

                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">

                    <span className="material-symbols-outlined text-primary">
                        category
                    </span>

                    Explore Categories

                </h3>

                <div className="flex flex-wrap gap-3">

                    {categories.map((category) => (

                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="
                            rounded-full
                            border
                            border-outline
                            bg-surface
                            px-4
                            py-2
                            text-sm
                            font-medium
                            transition-all
                            duration-300
                            hover:border-primary
                            hover:bg-primary
                            hover:text-white
                            "
                        >
                            {category.name}
                        </Link>

                    ))}

                </div>

            </section>

        </aside>
    );
}