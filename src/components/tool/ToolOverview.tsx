type ToolOverviewProps = {
    title: string;
    description: string;
};

export function ToolOverview({
    title,
    description,
}: ToolOverviewProps) {
    return (
        <section className="my-16">
            <div className="rounded-[24px] border border-border/50 bg-white p-8 md:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.03)_0%,transparent_70%)] pointer-events-none" />
                <h2 className="text-3xl font-bold mb-8 tracking-tight">What is {title}?</h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
                    <p className="text-xl font-medium text-on-surface">
                        {description}
                    </p>
                    <p>
                        {title} is designed to be a comprehensive solution for professionals and beginners alike. 
                        Its primary purpose is to streamline complex workflows through advanced AI capabilities, 
                        reducing the time spent on manual tasks and allowing users to focus on high-impact work.
                    </p>
                    <p>
                        <strong className="text-on-surface">How it works:</strong> At its core, it leverages cutting-edge machine learning models 
                        to analyze inputs, generate intelligent responses, and automate repetitive processes. 
                        Users simply integrate it into their existing environments or use its intuitive dashboard 
                        to manage projects, track progress, and execute tasks with unprecedented speed and accuracy.
                    </p>
                    <p>
                        <strong className="text-on-surface">Target Audience:</strong> Whether you are a solo entrepreneur scaling your business, 
                        a developer seeking efficiency, or a large enterprise managing multiple teams, {title} adapts 
                        to your needs. Its flexible architecture means it can be customized for various industries, 
                        including marketing, software development, education, and content creation.
                    </p>
                    <p>
                        <strong className="text-on-surface">Market Position:</strong> In a rapidly evolving AI landscape, {title} stands out 
                        by offering a reliable, user-friendly, and cost-effective platform. It consistently outpaces 
                        competitors in terms of ease-of-use and integration capabilities, making it one of the most 
                        highly recommended tools in its category for both everyday tasks and specialized workflows.
                    </p>
                </div>
            </div>
        </section>
    );
}