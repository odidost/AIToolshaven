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
                <h2 className="text-fluid-h2 font-bold mb-8 tracking-tight">What is {tool.name}?</h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
                    <p className="text-xl font-medium text-on-surface">
                        {tool.description}
                    </p>
                    
                    {tool.editorial?.overview ? (
                        <div className="space-y-6" dangerouslySetInnerHTML={{ __html: tool.editorial.overview }} />
                    ) : (
                        <>
                            <p>
                                If you're wondering whether {tool.name} is worth your time, the short answer is yes—but it depends on what you're trying to achieve. At its core, {tool.name} isn't just another AI tool; it's built specifically to handle the kind of repetitive, high-friction tasks that usually slow you down. By taking over the heavy lifting, it frees you up to focus on the actual strategy behind your work.
                            </p>
                            <p>
                                <strong className="text-on-surface">How it works in practice:</strong> Instead of forcing you to learn a complicated new system, it integrates fairly naturally into the way you already work. You provide the initial context, and the AI handles the execution. Whether you're using it as a standalone dashboard or plugging it into your existing stack, the learning curve is surprisingly manageable.
                            </p>
                            <p>
                                <strong className="text-on-surface">Who is this actually for?</strong> While the marketing might claim it's for everyone, {tool.name} really shines for people who need to scale their output without sacrificing quality. Whether you're a solo founder trying to do the work of five people, or a team looking to standardize a messy workflow, it adapts well to different skill levels.
                            </p>
                            <p>
                                <strong className="text-on-surface">Where it stands out:</strong> The AI space is crowded right now, but {tool.name} manages to hold its own by prioritizing reliability over flashy gimmicks. It's not going to do your job for you, but as an assistant, it's one of the more practical options available—especially if you value consistency and ease of use over bleeding-edge experimentation.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}