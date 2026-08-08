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
                <h2 className="text-fluid-h3 animate-in fade-in slide-in-from-bottom-4 duration-700 font-bold tracking-tight text-on-surface">
                    Key Features & Capabilities
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-on-surface-variant">
                    These are the core features that actually matter. Instead of overwhelming you with options, this tool focuses on doing these specific tasks exceptionally well.
                </p>
            </div>

            <div className="rounded-[24px] border border-border/50 bg-white p-6 sm:p-8 shadow-sm">
                <div className="divide-y divide-border/50">
                    {features.map((feature, idx) => {
                        let parsedFeature = feature;
                        if (typeof feature === 'string' && feature.trim().startsWith('{')) {
                            try {
                                parsedFeature = JSON.parse(feature);
                            } catch (e) {}
                        }
                        const featObj = typeof parsedFeature === 'string'
                            ? { title: parsedFeature, description: "", icon: "done_all" }
                            : parsedFeature as ToolFeature;
                        
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
                                    {(featObj.description || getEditorialDescription("feature", featObj.title, "")) && (
                                        <p className="text-on-surface-variant leading-relaxed text-sm">
                                            {featObj.description || getEditorialDescription("feature", featObj.title, "")}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}