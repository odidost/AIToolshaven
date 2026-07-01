type QuickFactsProps = {
    platform: string;
    api: boolean;
    mobileApp: boolean;
    openSource: boolean;
    freeTrial: boolean;
    priceModel: string;
};

export function QuickFacts({
    platform,
    api,
    mobileApp,
    openSource,
    freeTrial,
    priceModel,
}: QuickFactsProps) {
    const facts = [
        ["Platform", platform],
        ["Pricing", priceModel],
        ["API", api ? "Yes" : "No"],
        ["Mobile App", mobileApp ? "Yes" : "No"],
        ["Open Source", openSource ? "Yes" : "No"],
        ["Free Trial", freeTrial ? "Yes" : "No"],
    ];

    return (
        <div className="rounded-2xl border border-outline bg-surface-container p-6">
            <h3 className="text-xl font-bold mb-5">
                Quick Facts
            </h3>

            <div className="space-y-4">
                {facts.map(([label, value]) => (
                    <div
                        key={label}
                        className="flex justify-between border-b border-outline pb-3 last:border-none last:pb-0"
                    >
                        <span className="text-on-surface-variant">
                            {label}
                        </span>

                        <span className="font-medium">
                            {value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}