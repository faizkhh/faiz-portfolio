"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // optimized scroll handler (no re-create on every render)
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10;
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
  }, []);

  useEffect(() => {
    // passive listener = better performance on mobile
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50",
        "transition-colors duration-300",
        scrolled
          ? "bg-black/90 border-b border-white/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link
          href="#"
          className="text-white font-semibold tracking-wide text-lg"
        >
          Faiz<span className="text-sky-400">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 rounded-md bg-sky-500 text-white text-sm hover:opacity-90 transition"
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu (optimized: no heavy re-renders inside loop) */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          "bg-black border-t border-white/10 px-6"
        ].join(" ")}
      >
        <div className="flex flex-col gap-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-white text-sm"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-2 rounded-md bg-sky-500 text-white text-sm text-center"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}