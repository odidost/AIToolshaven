const logos = [
    "chatgpt",
    "claude",
    "gemini",
    "cursor",
    "perplexity",
    "midjourney",
    "runway",
    "elevenlabs",
    "bolt",
    "notion",
    "copilot",
    "gamma",
    "lovable",
    "canva",
    "replit",
];

export function RecommendationBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {logos.map((logo, index) => (
                <div
                    key={logo}
                    className="absolute opacity-10 animate-float-slow"
                    style={{
                        left: `${(index * 17) % 90}%`,
                        top: `${(index * 29) % 85}%`,
                    }}
                >
                    <img
                        src={`/logos/${logo}.svg`}
                        alt={logo}
                        className="h-10 w-10 object-contain blur-[0.3px]"
                    />
                </div>
            ))}
        </div>
    );
}