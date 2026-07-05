"use client";

import { useRef } from "react";

export function HeroParallax({
    children,
}: {
    children: React.ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);

    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        ref.current.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.02)
        `;
    }

    function handleLeave() {
        if (!ref.current) return;

        ref.current.style.transform =
            "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="transition-transform duration-300 will-change-transform"
        >
            {children}
        </div>
    );
}