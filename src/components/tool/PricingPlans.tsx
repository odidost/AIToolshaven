type PricingPlan = {
    name: string;
    price: string;
    description: string;
    features: string[];
    recommended?: boolean;
};

type PricingPlansProps = {
    plans?: PricingPlan[];
    pricing?: { planName: string; price: number | string; period: string }[];
};

export function PricingPlans({ plans, pricing }: PricingPlansProps) {
    const finalPlans: PricingPlan[] = plans || pricing?.map(p => ({
        name: p.planName,
        price: p.price === 0 ? "Free" : `$${p.price}`,
        description: `Billed ${p.period}`,
        features: []
    })) || [];

    if (!finalPlans.length) return null;

    return (
        <section className="my-20">

            <div className="mb-10">

                <h2 className="text-3xl font-bold">
                    Pricing
                </h2>

                <p className="mt-2 text-on-surface-variant">
                    Choose the plan that best fits your needs.
                </p>

            </div>

            <div className="grid gap-8 lg:grid-cols-3">

                {finalPlans.map((plan) => (

                    <div
                        key={plan.name}
                        className={`rounded-3xl border p-8 bg-surface transition-all duration-300 hover:-translate-y-[0.5px] ${plan.recommended
                                ? "border-primary shadow-glow-primary"
                                : "border-border shadow-sm hover:shadow-md"
                            }`}
                    >

                        {plan.recommended && (

                            <div className="mb-5 inline-flex rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-sm font-semibold text-white shadow-glow">
                                Most Popular
                            </div>

                        )}

                        <h3 className="text-2xl font-bold">
                            {plan.name}
                        </h3>

                        <div className="mt-4 text-4xl font-bold">
                            {plan.price}
                        </div>

                        <p className="mt-3 text-on-surface-variant">
                            {plan.description}
                        </p>

                        <ul className="mt-8 space-y-3">

                            {plan.features.map((feature) => (

                                <li
                                    key={feature}
                                    className="flex items-center gap-3"
                                >
                                    <span className="material-symbols-outlined text-primary">
                                        check_circle
                                    </span>

                                    {feature}

                                </li>

                            ))}

                        </ul>

                    </div>

                ))}

            </div>

        </section>
    );
}