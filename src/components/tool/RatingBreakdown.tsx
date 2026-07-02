import type { AITool } from "@/lib/types/tool";
type RatingBreakdownProps = {
    tool: AITool;
};

export function RatingBreakdown({ tool }: RatingBreakdownProps) {

    const ratings = [
        {
            label: "Ease of Use",
            value: tool.easeOfUse,
        },
        {
            label: "Features",
            value: tool.featureRating,
        },
        {
            label: "Value for Money",
            value: tool.valueForMoney,
        },
        {
            label: "Performance",
            value: tool.performance,
        },
        {
            label: "Support",
            value: tool.support,
        },
    ];

    return (

        <section className="my-20">

            <div className="mb-10">

                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

                    <span className="material-symbols-outlined">
                        star
                    </span>

                    Ratings

                </span>

                <h2 className="mt-6 text-4xl font-bold">
                    User Rating Breakdown
                </h2>

            </div>

            <div className="rounded-[32px] border border-outline bg-surface-container p-8 shadow-sm">

                <div className="grid lg:grid-cols-[220px_1fr] gap-10">

                    {/* Overall */}

                    <div className="text-center">

                        <div className="text-6xl font-bold">

                            {tool.rating}

                        </div>

                        <div className="mt-3 text-yellow-500 text-xl">

                            ★★★★★

                        </div>

                        <p className="mt-3 text-on-surface-variant">

                            {tool.reviewCount.toLocaleString()} reviews

                        </p>

                    </div>

                    {/* Breakdown */}

                    <div className="space-y-6">

                        {ratings.map((rating) => (

                            <div key={rating.label}>

                                <div className="mb-2 flex justify-between">

                                    <span className="font-medium">

                                        {rating.label}

                                    </span>

                                    <span>

                                        {rating.value}

                                    </span>

                                </div>

                                <div className="h-3 rounded-full bg-outline">

                                    <div
                                        className="h-3 rounded-full bg-primary transition-all duration-700"
                                        style={{
                                            width: `${(rating.value / 5) * 100}%`,
                                        }}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}