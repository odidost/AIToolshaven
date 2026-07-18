import { Workflow } from "@/lib/workflows";

export function WorkflowDeliverables({ workflow }: { workflow: Workflow }) {
    if (!workflow.meta?.deliverables || workflow.meta.deliverables.length === 0) return null;

    return (
        <div className="rounded-3xl border border-border bg-surface-secondary/30 p-8 shadow-sm">
            <h3 className="font-black text-lg text-on-surface mb-5 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">inventory_2</span>
                Expected Deliverables
            </h3>
            <p className="text-sm text-on-surface-variant mb-5">
                What you will have by the end of this workflow:
            </p>
            <ul className="space-y-3">
                {workflow.meta.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-green-500 text-[20px] shrink-0">check_circle</span>
                        <span className="text-sm font-medium text-on-surface">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
