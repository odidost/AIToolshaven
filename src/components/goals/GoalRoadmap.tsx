type GoalRoadmapProps = {
    title: string;
    steps: string[];
};

export function GoalRoadmap({
    title,
    steps,
}: GoalRoadmapProps) {
    return (
        <section className="my-16">
            <h2 className="text-2xl font-bold mb-8">
                How to {title}
            </h2>

            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div
                        key={step}
                        className="flex items-start gap-4"
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                            {index + 1}
                        </div>

                        <div className="rounded-xl border border-outline p-5 flex-1">
                            <h3 className="font-semibold">
                                {step}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}