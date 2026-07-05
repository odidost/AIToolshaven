"use client";

import { useEffect, useState } from "react";

const stats = [
    "523 AI Tools Indexed",
    "18,492 Monthly Users",
    "74 Categories",
    "1,248 Reviews",
    "Updated Daily",
];

export function LiveCounter() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % stats.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span
            key={index}
            className="inline-flex items-center gap-2 animate-pulse"
        >
            <span className="h-2 w-2 rounded-full bg-green-500"></span>

            {stats[index]}
        </span>
    );
}