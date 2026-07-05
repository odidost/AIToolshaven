export function AINetwork() {
    const nodes = [
        { name: "ChatGPT", x: "55%", y: "42%" },
        { name: "Claude", x: "35%", y: "20%" },
        { name: "Gemini", x: "72%", y: "25%" },
        { name: "Perplexity", x: "82%", y: "58%" },
        { name: "Cursor", x: "30%", y: "70%" },
        { name: "Midjourney", x: "58%", y: "78%" },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none">

            {nodes.map((node) => (
                <div
                    key={node.name}
                    className="absolute animate-float-slow"
                    style={{
                        left: node.x,
                        top: node.y,
                    }}
                >
                    <div className="flex items-center gap-2">

                        <div className="h-2 w-2 rounded-full bg-primary opacity-50"></div>

                        <span className="text-xs text-primary/40 font-medium">
                            {node.name}
                        </span>

                    </div>
                </div>
            ))}

            {/* Connection lines */}

            <svg
                className="absolute inset-0 h-full w-full opacity-15"
                viewBox="0 0 1000 700"
            >
                <line x1="350" y1="140" x2="540" y2="280" stroke="currentColor" strokeWidth="1" />
                <line x1="540" y1="280" x2="720" y2="180" stroke="currentColor" strokeWidth="1" />
                <line x1="540" y1="280" x2="820" y2="420" stroke="currentColor" strokeWidth="1" />
                <line x1="540" y1="280" x2="320" y2="500" stroke="currentColor" strokeWidth="1" />
                <line x1="320" y1="500" x2="560" y2="560" stroke="currentColor" strokeWidth="1" />
            </svg>

        </div>
    );
}