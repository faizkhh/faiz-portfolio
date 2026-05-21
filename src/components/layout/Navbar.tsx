"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll effect (glass navbar)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl bg-black/40 border-b border-white/10" : ""
        }`}
      >
        <div className="container-width flex items-center justify-between py-4">

          {/* Logo */}
          <div className="text-xl font-bold gradient-text">
            Faiz.dev
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Menu />
          </button>

        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col"
          >
            {/* Top bar */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="text-xl font-bold gradient-text">
                Faiz.dev
              </span>

              <button onClick={() => setMobileOpen(false)}>
                <X />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl text-gray-300 hover:text-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;