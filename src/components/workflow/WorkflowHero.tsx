import { Workflow } from "@/lib/workflows";
import { AuthorAttribution } from "@/components/shared/AuthorAttribution";
export function WorkflowHero({ workflow }: { workflow: Workflow }) {
    const meta = workflow.meta;

    return (
        <section className="relative overflow-hidden rounded-[32px] border border-border/50 bg-gradient-to-br from-surface to-surface-secondary/50 p-8 md:p-12 mb-12 shadow-sm">
            <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)] rounded-full pointer-events-none -z-10" />
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                            <span className="material-symbols-outlined text-2xl text-primary">
                                {workflow.icon}
                            </span>
                        </div>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {workflow.audience}
                        </span>
                        {meta.skill && (
                            <span className="rounded-full bg-surface-secondary px-3 py-1 text-xs font-semibold text-on-surface-variant border border-border">
                                {meta.skill}
                            </span>
                        )}
                        {meta.time && (
                            <span className="rounded-full bg-surface-secondary px-3 py-1 text-xs font-semibold text-on-surface-variant border border-border flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">schedule</span> {meta.time}
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight">
                        {workflow.title} Workflow Guide
                    </h1>

                    <p className="mt-4 text-lg text-on-surface-variant leading-relaxed mb-6">
                        {workflow.description} Learn how to combine these tools step-by-step to achieve high efficiency.
                    </p>

                    <AuthorAttribution />
                </div>

                {/* Stats Widget */}
                <div className="w-full lg:w-80 bg-surface rounded-3xl border border-border p-6 shadow-sm flex flex-col gap-4 transition-all hover:shadow-md hover:-translate-y-[0.5px]">
                    <div className="flex justify-between border-b border-border/50 pb-3">
                        <span className="text-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">build</span> AI Tools
                        </span>
                        <span className="font-bold text-sm text-on-surface">{meta.toolsCount || workflow.tools.length}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-3">
                        <span className="text-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">payments</span> Cost Estimate
                        </span>
                        <span className="font-bold text-sm text-on-surface">{meta.cost}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-on-surface-variant mb-1 font-semibold uppercase tracking-wider">Primary Deliverable</span>
                        <span className="text-sm font-medium text-on-surface">{meta.outcome}</span>
                    </div>
                    <a href="#workflow-start" className="mt-2 w-full text-center bg-primary text-white font-bold py-3 px-4 rounded-xl hover:bg-primary/90 transition-colors shadow-glow-primary">
                        Start Workflow
                    </a>
                </div>
            </div>
        </section>
    );
}
