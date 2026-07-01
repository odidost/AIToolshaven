type BestForProps = {
    users: string[];
};

export function BestFor({
    users,
}: BestForProps) {
    return (
        <section className="my-16">
            <h2 className="text-2xl font-bold mb-6">
                Best For
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {users.map((user) => (
                    <div
                        key={user}
                        className="rounded-2xl border border-outline bg-surface-container p-6 text-center hover:border-primary transition"
                    >
                        <span className="material-symbols-outlined text-4xl text-primary mb-3 block">
                            person
                        </span>

                        <p className="font-semibold">
                            {user}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}