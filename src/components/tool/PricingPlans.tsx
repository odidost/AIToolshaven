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

    if (!finalPlans.length) {
        return (
            <section className="my-16">
                <div className="mb-12 max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tight text-on-surface">Pricing Options</h2>
                    <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
                        Please contact the vendor directly for detailed pricing information and enterprise options.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="my-16">
            <div className="mb-12 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight text-on-surface">Pricing Plans</h2>
                <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
                    Choose the plan that best fits your needs. Whether you&apos;re a solo user or an enterprise team, there&apos;s a solution designed for your scale.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 items-end mt-12">
                {finalPlans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-[2px] ${plan.recommended
                            ? "bg-white border-2 border-primary shadow-lg lg:-mt-4"
                            : "bg-white border border-border/50 shadow-sm"
                        }`}
                    >
                        {plan.recommended && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-glow">
                                Recommended
                            </div>
                        )}

                        <h3 className="text-2xl font-bold text-on-surface">{plan.name}</h3>
                        
                        <div className="mt-4 flex items-baseline gap-2">
                            <span className="text-4xl font-extrabold tracking-tight text-on-surface">{plan.price}</span>
                        </div>

                        <p className="mt-4 text-on-surface-variant leading-relaxed text-sm">
                            {plan.description || `Ideal for users who want to maximize their use of ${plan.name} features.`}
                        </p>

                        <button className={`w-full mt-8 py-3 px-6 rounded-xl font-semibold transition-all ${
                            plan.recommended 
                            ? 'bg-primary text-white hover:bg-primary/90 shadow-glow-primary' 
                            : 'bg-surface-secondary text-on-surface hover:bg-surface-secondary/80'
                        }`}>
                            Get Started
                        </button>

                        <div className="mt-8 border-t border-border/50 pt-6">
                            <ul className="space-y-4">
                                {plan.features.length > 0 ? plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span className="text-sm text-on-surface-variant">{feature}</span>
                                    </li>
                                )) : (
                                    <>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                            <span className="text-sm text-on-surface-variant">Core features included</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                            <span className="text-sm text-on-surface-variant">Standard support</span>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}