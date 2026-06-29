export function NewsletterCTA() {
    return (
        <section className="mb-16">
            <div className="bg-primary-container rounded-3xl p-8 md:p-12 text-center border border-outline">
                <h2 className="text-3xl font-bold text-on-surface mb-4">
                    Stay Ahead of AI
                </h2>

                <p className="text-on-surface-variant max-w-2xl mx-auto mb-8">
                    Discover new AI tools, workflows, opportunities, and guides every week.
                </p>

                <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-5 py-4 rounded-xl border border-outline bg-surface text-on-surface"
                    />

                    <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
                        Subscribe
                    </button>
                </div>

                <div className="mt-6">
                    <a
                        href="/submit"
                        className="text-primary font-semibold hover:underline"
                    >
                        Submit Your AI Tool →
                    </a>
                </div>
            </div>
        </section>
    );
}