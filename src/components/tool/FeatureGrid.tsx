import { ToolFeature } from "@/lib/types/tool";

type FeatureGridProps = {
    features?: (ToolFeature | string)[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
    if (!features?.length) return null;
    
    return (
        <section className="my-16">
            <div className="mb-10 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight text-on-surface">
                    Key Features & Capabilities
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-on-surface-variant">
                    Discover the powerful features that make this AI tool stand out from its competitors. Every capability is designed to maximize your productivity and deliver exceptional results.
                </p>
            </div>

            <div className="rounded-[24px] border border-border/50 bg-white p-8 shadow-sm">
                <div className="divide-y divide-border/50">
                    {features.map((feature, idx) => {
                        const featObj = typeof feature === 'string'
                            ? { title: feature, description: "", icon: "done_all" }
                            : feature;
                        
                        return (
                            <div 
                                key={featObj.title || idx} 
                                className="flex items-start gap-4 py-6 first:pt-0 last:pb-0 group"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <span className="material-symbols-outlined text-[20px]">
                                        {featObj.icon || "done_all"}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                                        {featObj.title}
                                    </h3>
                                    <p className="text-on-surface-variant leading-relaxed text-sm">
                                        {featObj.description || "This feature provides seamless operation, optimizing performance and output quality for standard production workflows."}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}