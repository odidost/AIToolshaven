import { FeatureCard } from "./FeatureCard";

type Feature = {
    title: string;
    description: string;
    icon: string;
};

type FeatureGridProps = {
    features: Feature[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
    return (
        <section className="my-20">

            <div className="mb-12 max-w-3xl">

                <h2 className="text-3xl font-bold text-on-surface">
                    Key Features
                </h2>

                <p className="mt-3 text-lg leading-8 text-on-surface-variant">
                    Discover the powerful features that make this AI tool stand
                    out from its competitors.
                </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {features.map((feature) => (

                    <FeatureCard
                        key={feature.title}
                        feature={feature}
                    />

                ))}

            </div>

        </section>
    );
}