import { ToolFeature } from "@/lib/types/tool";
import { getEditorialDescription } from "@/lib/editorialRegistry";

type FeatureGridProps = {
    features?: (ToolFeature | string)[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
    if (!features?.length) return null;
    
    return (
        <section className="my-16">
            <div className="mb-10 max-w-3xl">
                <h2 className="text-fluid-h2 font-bold tracking-tight text-on-surface">
                    Key Features & Capabilities
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-on-surface-variant">
                    These are the core features that actually matter. Instead of overwhelming you with options, this tool focuses on doing these specific tasks exceptionally well.
                </p>
            </div>

            <div className="rounded-[24px] border border-border/50 bg-white p-6 sm:p-8 shadow-sm">
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
                                        {featObj.description || getEditorialDescription("feature", featObj.title, "It's built directly into the interface so you don't have to jump between different tabs to get the job done.")}
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