export function HeroBackground() {
    return (
        <>
            {/* Top glow */}
            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/15 blur-3xl" />

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-8 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-80 w-80 rounded-full bg-white/5 blur-[120px]" />
            </div>

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Floating circles */}
            <div className="absolute top-16 left-10 h-3 w-3 rounded-full bg-white/50 animate-pulse" />
            <div className="absolute top-44 right-20 h-2 w-2 rounded-full bg-white/60 animate-pulse delay-500" />
            <div className="absolute bottom-20 left-1/3 h-4 w-4 rounded-full bg-white/40 animate-pulse delay-1000" />
        </>
    );
}
