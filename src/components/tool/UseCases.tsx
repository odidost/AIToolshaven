type UseCasesProps = {
    useCases: string[];
};

export function UseCases({ useCases }: UseCasesProps) {
    return (
        <section className="my-20">

            <div className="mb-10">

                <h2 className="text-3xl font-bold">
                    What can you do with it?
                </h2>

                <p className="mt-2 text-on-surface-variant">
                    Popular ways people use this AI tool.
                </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                {useCases.map((item) => (

                    <div
                        key={item}
                        className="rounded-3xl border border-outline bg-surface-container p-6 hover:border-primary transition"
                    >

                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

                            <span className="material-symbols-outlined text-primary">
                                bolt
                            </span>

                        </div>

                        <p className="font-medium">
                            {item}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}