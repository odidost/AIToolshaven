import { SectionContainer } from "../layout/SectionContainer";

export function NewsletterCTA() {
    return (
        <section className="bg-primary/5 rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-border/50 py-16 md:py-24 relative overflow-hidden">
            <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
                <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6 mx-auto">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Newsletter</span>
                </div>
                <h2 className="text-fluid-h2 font-bold text-on-surface mb-4">
                    Get the Weekly Roundup
                </h2>

                <p className="text-on-surface-variant max-w-2xl mx-auto mb-8">
                    Cut through the noise. We'll send you the most practical AI tools and workflows every week.
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
