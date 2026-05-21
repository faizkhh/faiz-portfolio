"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/60 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.05)]" : "bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="#"
          className="text-white font-semibold tracking-wide text-lg"
        >
          Faiz<span className="text-sky-400">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-white/70 hover:text-white transition-all duration-200 hover:-translate-y-[1px] text-sm tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA (Desktop) */}
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm hover:bg-sky-500/20 transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-white text-sm transition-all"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-2 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}