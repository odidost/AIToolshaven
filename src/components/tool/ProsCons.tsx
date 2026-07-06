type ProsConsProps = {
    pros?: string[];
    cons?: string[];
};

export function ProsCons({ pros, cons }: ProsConsProps) {
    if (!pros?.length && !cons?.length) return null;

    return (
        <section className="my-16">
            <h2 className="text-2xl font-bold mb-8">
                Pros & Cons
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Pros */}

                <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <span className="material-symbols-outlined text-green-600">
                            thumb_up
                        </span>

                        <h3 className="text-xl font-bold text-green-700">
                            Pros
                        </h3>
                    </div>

                    <ul className="space-y-4">
                        {pros?.map((item) => (
                            <li
                                key={item}
                                className="flex gap-3"
                            >
                                <span className="material-symbols-outlined text-green-600">
                                    check_circle
                                </span>

                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cons */}

                <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <span className="material-symbols-outlined text-red-600">
                            thumb_down
                        </span>

                        <h3 className="text-xl font-bold text-red-700">
                            Cons
                        </h3>
                    </div>

                    <ul className="space-y-4">
                        {cons?.map((item) => (
                            <li
                                key={item}
                                className="flex gap-3"
                            >
                                <span className="material-symbols-outlined text-red-600">
                                    cancel
                                </span>

                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}