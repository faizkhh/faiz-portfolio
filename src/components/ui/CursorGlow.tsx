"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Don't run on touch devices — no cursor + kills performance
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9998]"
      style={{
        background: `radial-gradient(200px at ${pos.x}px ${pos.y}px, rgba(56,189,248,0.12), transparent 80%)`,
      }}
    />
  );
}