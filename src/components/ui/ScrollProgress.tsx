"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / docHeight) * 100;

        if (barRef.current) {
          barRef.current.style.width = `${progress}%`;
        }
      });
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999]">
      <div
        ref={barRef}
        className="h-full bg-sky-400"
        style={{ width: "0%" }}
      />
    </div>
  );
}