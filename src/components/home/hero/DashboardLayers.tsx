export function DashboardLayers() {
    return (
        <>
            {/* Back Panel */}

            <div
                className="
                absolute
                -top-10
                -left-14
                w-64
                rounded-3xl
                border border-outline/40
                bg-surface/50
                backdrop-blur-xl
                p-5
                shadow-xl
                rotate-[-8deg]
                animate-float-slow
            "
            >
                <div className="space-y-3">

                    <div className="h-3 w-28 rounded-full bg-primary/30"></div>

                    <div className="h-3 w-40 rounded-full bg-primary/20"></div>

                    <div className="h-3 w-24 rounded-full bg-primary/30"></div>

                    <div className="mt-5 grid grid-cols-3 gap-2">

                        <div className="h-10 rounded-xl bg-primary/20"></div>

                        <div className="h-10 rounded-xl bg-primary/10"></div>

                        <div className="h-10 rounded-xl bg-primary/20"></div>

                    </div>

                </div>

            </div>

            {/* Front Panel */}

            <div
                className="
                absolute
                -bottom-12
                right-[-40px]
                rounded-3xl
                border border-outline
                bg-surface/80
                backdrop-blur-xl
                p-5
                shadow-2xl
                animate-float-medium
            "
            >
                <div className="flex gap-4">

                    <div className="text-center">

                        <span className="material-symbols-outlined text-primary">
                            psychology
                        </span>

                        <p className="mt-2 text-xs">
                            AI
                        </p>

                    </div>

                    <div className="text-center">

                        <span className="material-symbols-outlined text-primary">
                            compare_arrows
                        </span>

                        <p className="mt-2 text-xs">
                            Compare
                        </p>

                    </div>

                    <div className="text-center">

                        <span className="material-symbols-outlined text-primary">
                            account_tree
                        </span>

                        <p className="mt-2 text-xs">
                            Workflow
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
}
