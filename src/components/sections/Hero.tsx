"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // Delay animation start slightly for smoother LCP
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Optimized background (no extra div nesting) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blue will-change-transform" />
        <div className="glow-purple will-change-transform" />
      </div>

      <div className="container-width relative z-10 section">

        {/* Single animation wrapper instead of many */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >

          {/* Badge (no motion.div → cheaper) */}
          <div className="glass px-4 py-2 inline-flex items-center gap-2 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I’m{" "}
            <span className="gradient-text">Mohammad Faiz Alam</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-gray-300">
            Java • Spring Boot • Backend Developer
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl">
            I build scalable backend systems, REST APIs, and modern full-stack applications
            with Java, Spring Boot, React, and Next.js.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">

            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;