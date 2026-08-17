import type { AITool } from "@/lib/types/tool";

type ToolOverviewProps = {
    tool: AITool;
};

export function ToolOverview({
    tool,
}: ToolOverviewProps) {
    return (
        <section className="my-16">
            <div className="rounded-[24px] border border-border/50 bg-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.03)_0%,transparent_70%)] pointer-events-none" />
                <h2 className="text-fluid-h3 animate-in fade-in slide-in-from-bottom-4 duration-700 font-bold mb-8 tracking-tight">What is {tool.name}?</h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
                    <p className="text-xl font-medium text-on-surface">
                        {tool.description}
                    </p>
                    
                    {tool.editorial?.overview && (
                        <div className="space-y-6" dangerouslySetInnerHTML={{ __html: tool.editorial.overview }} />
                    )}
                </div>
            </div>
        </section>
    );
}