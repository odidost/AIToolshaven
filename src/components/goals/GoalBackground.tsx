"use client";

import { useMemo } from "react";

type GoalBackgroundProps = {
    slug: string;
};

export function GoalBackground({ slug }: GoalBackgroundProps) {
    const backgroundStyle = useMemo(() => {
        switch (slug) {
            case "faceless-youtube":
                return "radial-gradient(circle at top right, rgba(239, 68, 68, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(239, 68, 68, 0.05) 0%, transparent 40%)";
            case "ai-workflows":
                return "radial-gradient(circle at top right, rgba(59, 130, 246, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.05) 0%, transparent 40%)";
            case "ai-influencers":
                return "radial-gradient(circle at top right, rgba(168, 85, 247, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(168, 85, 247, 0.05) 0%, transparent 40%)";
            case "vibe-coding":
                return "radial-gradient(circle at top right, rgba(16, 185, 129, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.05) 0%, transparent 40%)";
            case "business-growth":
                return "radial-gradient(circle at top right, rgba(245, 158, 11, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(245, 158, 11, 0.05) 0%, transparent 40%)";
            case "make-money-online":
                return "radial-gradient(circle at top right, rgba(34, 197, 94, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(34, 197, 94, 0.05) 0%, transparent 40%)";
            default:
                return "radial-gradient(circle at top right, rgba(148, 163, 184, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(148, 163, 184, 0.05) 0%, transparent 40%)";
        }
    }, [slug]);

    return (
        <div
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
            style={{
                backgroundImage: backgroundStyle,
            }}
        >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
        </div>
    );
}
