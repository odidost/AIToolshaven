type PricingPlan = {
    name: string;
    price: string;
    description: string;
    features: string[];
    recommended?: boolean;
};

type PricingPlansProps = {
    plans: PricingPlan[];
};

export function PricingPlans({ plans }: PricingPlansProps) {
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

                {plans.map((plan) => (

                    <div
                        key={plan.name}
                        className={`rounded-3xl border p-8 ${plan.recommended
                                ? "border-primary shadow-xl"
                                : "border-outline"
                            }`}
                    >

                        {plan.recommended && (

                            <div className="mb-5 inline-flex rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
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