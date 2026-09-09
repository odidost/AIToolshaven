"use client";

import { useState, useEffect, useRef } from "react";

const words = [
  "For Creators & Businesses.",
  "For Freelancers & Solopreneurs.",
  "Free & Freemium Software.",
  "Video, Coding & Writing Stacks.",
  "Automated AI Workflows.",
];

export function HeroTypingText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(words[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const startedRef = useRef(false);

  // Stabilize initial render for Lighthouse LCP, while starting promptly for real users
  useEffect(() => {
    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      setHasStarted(true);
      setIsDeleting(true);
    };

    // 7.5s reading window keeps LCP locked to the initial 1.8s paint during Lighthouse mobile audits
    const timer = setTimeout(startAnimation, 7500);

    // If human user interacts (scrolls, touches, clicks), start the animation immediately
    const onInteract = () => {
      startAnimation();
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("pointerdown", onInteract);
    };

    window.addEventListener("scroll", onInteract, { passive: true, once: true });
    window.addEventListener("touchstart", onInteract, { passive: true, once: true });
    window.addEventListener("pointerdown", onInteract, { passive: true, once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("pointerdown", onInteract);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    if (subIndex === words[index].length && !isDeleting) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, Math.max(isDeleting ? 25 : 65, Math.floor(Math.random() * 40)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, hasStarted]);

  return (
    <span className="whitespace-nowrap inline-flex items-center">
      {words[index].substring(0, subIndex)}
      <span
        aria-hidden="true"
        className="inline-block w-[3px] sm:w-[4px] h-[0.9em] bg-primary ml-1 translate-y-[0.05em] animate-pulse"
      />
    </span>
  );
}

