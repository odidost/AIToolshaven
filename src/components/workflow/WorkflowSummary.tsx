import { Workflow } from "@/lib/workflows";

export function WorkflowSummary({ workflow }: { workflow: Workflow }) {
    const { meta } = workflow;

    return (
        <section className="mb-12 mt-16 border-t border-border/50 pt-12">
            <h2 className="mb-6 text-2xl font-black text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">done_all</span>
                Workflow Recap
            </h2>
            
            <div className="bg-surface rounded-[32px] border border-border p-8 md:p-10 shadow-sm flex flex-col md:flex-row gap-10 justify-between items-center text-center md:text-left">
                <div className="flex-1 max-w-xl">
                    <h3 className="font-bold text-xl text-on-surface mb-3">You're ready to start building!</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        This workflow combines {meta.toolsCount || workflow.tools.length} AI tools to produce {meta.outcome.toLowerCase()} 
                        Take your time with the initial setup, and soon this process will become second nature.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto shrink-0">
                    <div className="bg-surface-secondary border border-border rounded-2xl p-4 flex flex-col items-center justify-center min-w-[120px]">
                        <span className="material-symbols-outlined text-primary mb-1">schedule</span>
                        <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mb-1">Time</span>
                        <span className="font-bold text-on-surface">{meta.time}</span>
                    </div>
                    <div className="bg-surface-secondary border border-border rounded-2xl p-4 flex flex-col items-center justify-center min-w-[120px]">
                        <span className="material-symbols-outlined text-primary mb-1">payments</span>
                        <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mb-1">Cost</span>
                        <span className="font-bold text-on-surface">{meta.cost}</span>
                    </div>
                    <div className="bg-surface-secondary border border-border rounded-2xl p-4 flex flex-col items-center justify-center min-w-[120px] col-span-2">
                        <span className="material-symbols-outlined text-primary mb-1">build</span>
                        <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mb-1">Tools Required</span>
                        <span className="font-bold text-on-surface">{meta.toolsCount || workflow.tools.length}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
