import Link from "next/link";
import { workflows } from "@/lib/workflows";

export function WorkflowSection() {
    return (
        <section className="my-24">

            <div className="mb-12 text-center">

                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

                    <span className="material-symbols-outlined text-base">
                        auto_awesome
                    </span>

                    Popular AI Workflows

                </span>

                <h2 className="mt-6 text-4xl font-black text-on-surface">
                    Complete AI Stacks
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">
                    Discover proven combinations of AI tools for developers,
                    marketers, creators, founders and students.
                </p>

            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {workflows.map((workflow) => (

                    <Link
                        key={workflow.slug}
                        href={`/workflows/${workflow.slug}`}
                        className="group"
                    >

                        <article className="relative overflow-hidden rounded-3xl border border-outline bg-surface-container p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_25px_70px_rgba(0,0,0,.15)]">

                            {/* Icon */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                                <span className="material-symbols-outlined text-fluid-h2 text-primary">
                                    {workflow.icon}
                                </span>

                            </div>

                            <h3 className="text-2xl font-bold text-on-surface">
                                {workflow.title}
                            </h3>

                            <p className="mt-2 text-sm text-on-surface-variant">
                                {workflow.description}
                            </p>

                            {/* Workflow Pipeline */}
                            <div className="mt-8 space-y-2">

                                {workflow.tools.map((tool, index) => (

                                    <div
                                        key={tool}
                                        className="flex flex-col items-center"
                                    >

                                        <div
                                            className="
                                                w-full
                                                rounded-2xl
                                                border
                                                border-outline
                                                bg-surface
                                                px-4
                                                py-3
                                                transition-all
                                                duration-300
                                                group-hover:border-primary/30
                                                group-hover:bg-primary/5
                                            "
                                        >

                                            <div className="flex items-center gap-3">

                                                <div
                                                    className="
                                                        h-9
                                                        w-9
                                                        rounded-xl
                                                        bg-primary/10
                                                        flex
                                                        items-center
                                                        justify-center
                                                    "
                                                >

                                                    <span className="material-symbols-outlined text-primary text-lg">

                                                        auto_awesome

                                                    </span>

                                                </div>

                                                <span className="font-semibold text-on-surface">

                                                    {tool}

                                                </span>

                                            </div>

                                        </div>

                                        {index !== workflow.tools.length - 1 && (

                                            <span
                                                className="
                                            material-symbols-outlined
                                            text-primary/60
                                            text-2xl
                                            my-1
                                            animate-bounce
                                          "
                                            >

                                                south

                                            </span>

                                        )}

                                    </div>

                                ))}

                            </div>

                            <div className="mt-8 flex items-center justify-between border-t border-outline pt-6">

                                <span className="text-sm text-on-surface-variant">
                                    {workflow.tools.length} AI Tools
                                </span>

                                <span className="font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                                    Explore →
                                </span>

                            </div>

                        </article>

                    </Link>

                ))}

            </div>

        </section>
    );
}
