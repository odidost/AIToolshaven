type ToolOverviewProps = {
    title: string;
    description: string;
};

export function ToolOverview({
    title,
    description,
}: ToolOverviewProps) {
    return (
        <section className="my-20">

            <div className="max-w-4xl">

                <h2 className="text-3xl font-bold mb-6">
                    What is {title}?
                </h2>

                <div className="space-y-6 text-lg leading-8 text-on-surface-variant">

                    <p>
                        {description}
                    </p>

                    <p>
                        Whether you&apos;re a beginner or a professional,
                        {` ${title} `}
                        helps streamline your workflow with AI-powered
                        automation and intelligent assistance.
                    </p>

                    <p>
                        It is designed to save time, improve productivity,
                        and help users achieve better results with less effort.
                    </p>

                </div>

            </div>

        </section>
    );
}