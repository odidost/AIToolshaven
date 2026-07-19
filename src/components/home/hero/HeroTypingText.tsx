"use client";

import { useState, useEffect } from "react";

const words = [
  "AI Tools.",
  "Video Generators.",
  "Coding Assistants.",
  "Image Creators.",
  "AI Chatbots.",
];

export function HeroTypingText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, Math.max(isDeleting ? 30 : 70, parseInt((Math.random() * 50).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <span className="text-primary drop-shadow-[0_0_15px_rgba(255,95,109,0.5)] whitespace-nowrap">
      {words[index].substring(0, subIndex)}
      <span className={`inline-block w-[4px] h-[1em] bg-primary ml-1 translate-y-[0.1em] transition-opacity duration-100 ${blink ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
}
