"use client";

import { useEffect, useState } from "react";

export function HeroAura() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Only activate mouse aura on devices with fine pointer (mouse/trackpad), not touch/mobile
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!position) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-300"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full opacity-30 mix-blend-screen blur-[120px] transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(146,71,242,0.8) 0%, rgba(146,71,242,0) 70%)",
          width: "800px",
          height: "800px",
          transform: `translate(${position.x - 400}px, ${position.y - 400}px)`,
        }}
      />
    </div>
  );
}

