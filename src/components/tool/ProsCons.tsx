import { getEditorialDescription } from "@/lib/editorialRegistry";

type ProsConsProps = {
    pros?: string[];
    cons?: string[];
};

export function ProsCons({ pros, cons }: ProsConsProps) {
    const displayPros = pros?.length ? pros : [
        "Intuitive and user-friendly interface",
        "Significantly accelerates workflow execution",
        "Reliable performance with consistent output quality"
    ];
    
    const displayCons = cons?.length ? cons : [
        "Limited functionality in the free tier",
        "May require a learning curve for advanced features"
    ];

    return (
        <section className="my-16">
            <h2 className="text-fluid-h2 font-bold tracking-tight mb-8">
                Pros & Cons
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pros */}
                <div className="rounded-[24px] border border-border/50 bg-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-success/5 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success">
                            <span className="material-symbols-outlined text-[24px]">
                                thumb_up
                            </span>
                        </div>
                        <h3 className="text-fluid-h3 font-bold text-on-surface">
                            Pros
                        </h3>
                    </div>

                    <ul className="space-y-6">
                        {displayPros.map((item) => (
                            <li key={item} className="flex gap-4 items-start">
                                <span className="material-symbols-outlined text-success mt-0.5 shrink-0">
                                    check_circle
                                </span>
                                <div>
                                    <strong className="block text-on-surface text-lg font-semibold">{item}</strong>
                                    <span className="text-on-surface-variant block mt-1 leading-relaxed">
                                        {getEditorialDescription("pro", item, "This makes a noticeable difference in daily use, especially if you're working on tight deadlines.")}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cons */}
                <div className="rounded-[24px] border border-border/50 bg-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-warning/5 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10 text-warning">
                            <span className="material-symbols-outlined text-[24px]">
                                warning
                            </span>
                        </div>
                        <h3 className="text-fluid-h3 font-bold text-on-surface">
                            Cons
                        </h3>
                    </div>

                    <ul className="space-y-6">
                        {displayCons.map((item) => (
                            <li key={item} className="flex gap-4 items-start">
                                <span className="material-symbols-outlined text-warning mt-0.5 shrink-0">
                                    error
                                </span>
                                <div>
                                    <strong className="block text-on-surface text-lg font-semibold">{item}</strong>
                                    <span className="text-on-surface-variant block mt-1 leading-relaxed">
                                        {getEditorialDescription("con", item, "It's not a dealbreaker, but it is something to keep in mind if you rely heavily on this specific function.")}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}