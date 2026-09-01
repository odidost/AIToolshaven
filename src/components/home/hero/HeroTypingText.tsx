"use client";

import { useState, useEffect } from "react";

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
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
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
  }, [subIndex, index, isDeleting]);

  return (
    <span className="whitespace-nowrap">
      {words[index].substring(0, subIndex)}
      <span className={`inline-block w-[4px] h-[0.9em] bg-primary ml-1 translate-y-[0.1em] transition-opacity duration-100 ${blink ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
}
