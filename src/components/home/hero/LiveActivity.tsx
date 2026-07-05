"use client";

import { useEffect, useState } from "react";

const activities = [
    {
        icon: "smart_toy",
        color: "text-green-500",
        title: "ChatGPT reached #1",
        time: "Just now",
    },
    {
        icon: "new_releases",
        color: "text-blue-500",
        title: "New AI tool added",
        time: "18 sec ago",
    },
    {
        icon: "reviews",
        color: "text-yellow-500",
        title: "Claude gained 42 reviews",
        time: "1 min ago",
    },
    {
        icon: "bolt",
        color: "text-purple-500",
        title: "Gemini updated features",
        time: "2 mins ago",
    },
    {
        icon: "trending_up",
        color: "text-pink-500",
        title: "Perplexity trending",
        time: "5 mins ago",
    },
];

export function LiveActivity() {
    const [items, setItems] = useState(activities);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prev) => {
                const next = [...prev];
                next.push(next.shift()!);
                return [...next];
            });
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-3">
            {items.slice(0, 4).map((item) => (
                <div
                    key={item.title}
                    className="flex items-center justify-between rounded-2xl border border-outline bg-surface-container px-4 py-3 transition hover:-translate-y-0.5"
                >
                    <div className="flex items-center gap-3">
                        <span
                            className={`material-symbols-outlined ${item.color}`}
                        >
                            {item.icon}
                        </span>

                        <span className="text-sm font-medium">
                            {item.title}
                        </span>
                    </div>

                    <span className="text-xs text-on-surface-variant">
                        {item.time}
                    </span>
                </div>
            ))}
        </div>
    );
}