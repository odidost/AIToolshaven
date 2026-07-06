import { ToolFeature } from "@/lib/types/tool";
import { FeatureCard } from "./FeatureCard";

type FeatureGridProps = {
    features?: (ToolFeature | string)[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
    if (!features?.length) return null;
    
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

                {features.map((feature, idx) => {
                    const featObj = typeof feature === 'string'
                        ? { title: feature, description: "", icon: "check_circle" }
                        : feature;
                    return (
                        <FeatureCard
                            key={featObj.title || idx}
                            feature={featObj}
                        />
                    );
                })}

            </div>

        </section>
    );
}