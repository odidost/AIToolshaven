import { WorkflowStep } from "@/lib/workflows";
import { WorkflowStepCard } from "./WorkflowStepCard";

export function WorkflowTimeline({ steps }: { steps: WorkflowStep[] }) {
    if (!steps || steps.length === 0) return null;

    return (
        <div className="relative border-l-2 border-primary/20 ml-6 pl-8 space-y-12">
            {steps.map((step, index) => (
                <WorkflowStepCard key={index} step={step} index={index} />
            ))}
        </div>
    );
}
