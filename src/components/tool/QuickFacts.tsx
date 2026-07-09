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
        <section className="rounded-[24px] border border-border/50 bg-white p-6 shadow-sm">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-on-surface">
                <span className="material-symbols-outlined text-primary text-[24px]">info</span>
                Quick Facts
            </h3>

            <div className="space-y-4">
                {facts.map((fact) => (
                    <div
                        key={fact.label}
                        className="flex items-center justify-between border-b border-border/30 pb-3 last:border-none last:pb-0 text-sm"
                    >
                        <div className="flex items-center gap-2.5 text-on-surface-variant">
                            <span className="material-symbols-outlined text-primary text-[18px]">
                                {fact.icon}
                            </span>
                            <span className="font-medium">
                                {fact.label}
                            </span>
                        </div>

                        <span className="font-semibold text-on-surface text-right truncate max-w-[150px]" title={fact.value}>
                            {fact.value}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}