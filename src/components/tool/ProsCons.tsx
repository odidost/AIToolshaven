import { getEditorialDescription } from "@/lib/editorialRegistry";

type ProsConsProps = {
    pros?: (string | { title: string; description: string })[];
    cons?: (string | { title: string; description: string })[];
};

export function ProsCons({ pros, cons }: ProsConsProps) {
    const hasPros = Boolean(pros && pros.length > 0);
    const hasCons = Boolean(cons && cons.length > 0);

    if (!hasPros && !hasCons) {
        return null;
    }

    const displayPros = pros || [];
    const displayCons = cons || [];

    return (
        <section className="my-16">
            <h2 className="text-fluid-h3 animate-in fade-in slide-in-from-bottom-4 duration-700 font-bold tracking-tight mb-8">
                Pros & Cons
            </h2>

            <div className={`grid gap-8 ${hasPros && hasCons ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
                {/* Pros */}
                {hasPros && (
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
                            {displayPros.map((item, idx) => {
                                let parsedItem = item;
                                if (typeof item === 'string' && item.trim().startsWith('{')) {
                                    try {
                                        parsedItem = JSON.parse(item);
                                    } catch (e) {}
                                }
                                const isObj = typeof parsedItem === 'object' && parsedItem !== null;
                                const title = isObj ? (parsedItem as any).title : parsedItem as string;
                                const desc = isObj ? (parsedItem as any).description : getEditorialDescription("pro", title, "");
                                return (
                                    <li key={title || idx} className="flex gap-4 items-start">
                                        <span className="material-symbols-outlined text-success mt-0.5 shrink-0">
                                            check_circle
                                        </span>
                                        <div>
                                            <strong className="block text-on-surface text-lg font-semibold">{title}</strong>
                                            {desc && (
                                                <span className="text-on-surface-variant block mt-1 leading-relaxed">
                                                    {desc}
                                                </span>
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}

                {/* Cons */}
                {hasCons && (
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
                            {displayCons.map((item, idx) => {
                                let parsedItem = item;
                                if (typeof item === 'string' && item.trim().startsWith('{')) {
                                    try {
                                        parsedItem = JSON.parse(item);
                                    } catch (e) {}
                                }
                                const isObj = typeof parsedItem === 'object' && parsedItem !== null;
                                const title = isObj ? (parsedItem as any).title : parsedItem as string;
                                const desc = isObj ? (parsedItem as any).description : getEditorialDescription("con", title, "");
                                return (
                                    <li key={title || idx} className="flex gap-4 items-start">
                                        <span className="material-symbols-outlined text-warning mt-0.5 shrink-0">
                                            error
                                        </span>
                                        <div>
                                            <strong className="block text-on-surface text-lg font-semibold">{title}</strong>
                                            {desc && (
                                                <span className="text-on-surface-variant block mt-1 leading-relaxed">
                                                    {desc}
                                                </span>
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}

            </div>
        </section>
    );
}