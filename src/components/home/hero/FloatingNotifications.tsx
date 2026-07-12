export function FloatingNotifications() {
    return (
        <>
            {/* Top Right */}

            <div
                className="
                absolute
                right-20
                bottom-20
                animate-float-slow
                rounded-2xl
                border
                border-outline
                bg-surface/80
                backdrop-blur-xl
                px-4
                py-3
                shadow-xl
            "
            >
                <div className="flex items-center gap-3">

                    <span className="material-symbols-outlined text-green-500">
                        check_circle
                    </span>

                    <div>

                        <p className="text-sm font-semibold">
                            New Tool Added
                        </p>

                        <p className="text-xs text-on-surface-variant">
                            Claude 5 Sonnet
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
}
