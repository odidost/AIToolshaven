"use client";

import { useEffect, useState } from "react";

export function HeroAura() {
  const [position, setPosition] = useState({ x: 500, y: 300 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 3 });
    
    const handleMouseMove = (e: MouseEvent) => {
      // Smooth interpolation could be added here, but direct tracking is okay for soft blurs
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-300"
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
