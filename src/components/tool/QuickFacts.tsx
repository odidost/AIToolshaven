import type { AITool } from "@/lib/types/tool";
type QuickFactsProps = {
    tool: AITool;
};

export function QuickFacts({
    tool,
}: QuickFactsProps) {
    const facts = [
        {
            icon: "payments",
            label: "Pricing",
            value: tool.priceModel,
        },
        {
            icon: "star",
            label: "Rating",
            value: `${tool.rating} / 5`,
        },
        {
            icon: "reviews",
            label: "Reviews",
            value: tool.reviewCount.toLocaleString(),
        },
        {
            icon: "verified",
            label: "Verified",
            value: tool.verified ? "Yes" : "No",
        },
        {
            icon: "language",
            label: "Platform",
            value: tool.platform ?? "Web",
        },
        {
            icon: "api",
            label: "API",
            value: tool.api ? "Available" : "No",
        },
        {
            icon: "phone_iphone",
            label: "Mobile App",
            value: tool.mobileApp ? "Yes" : "No",
        },
        {
            icon: "science",
            label: "Free Trial",
            value: tool.freeTrial ? "Yes" : "No",
        },
    ];

    return (
        <aside className="rounded-3xl border border-outline bg-surface-container p-8">

            <h2 className="text-xl font-bold mb-6">
                Quick Facts
            </h2>

            <div className="space-y-5">

                {facts.map((fact) => (

                    <div
                        key={fact.label}
                        className="flex items-center justify-between border-b border-outline/30 pb-4 last:border-none last:pb-0"
                    >

                        <div className="flex items-center gap-3">

                            <span className="material-symbols-outlined text-primary">
                                {fact.icon}
                            </span>

                            <span className="text-on-surface-variant">
                                {fact.label}
                            </span>

                        </div>

                        <span className="font-semibold">
                            {fact.value}
                        </span>

                    </div>

                ))}

            </div>

        </aside>
    );
}