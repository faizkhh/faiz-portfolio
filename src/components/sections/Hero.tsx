"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="glow-blue top-[-200px] left-[-200px]" />
        <div className="glow-purple bottom-[-200px] right-[-200px]" />
      </div>

      <div className="container-width relative z-10 section">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl space-y-6"
        >

          {/* Badge */}
          <motion.div variants={fadeUp} className="glass px-4 py-2 inline-flex items-center gap-2 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold">
            Hi, I’m{" "}
            <span className="gradient-text">Mohammad Faiz Alam</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl text-gray-300">
            Java • Spring Boot • Backend Developer
          </motion.h2>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl">
            I build scalable backend systems, REST APIs, and modern full-stack applications
            with Java, Spring Boot, React, and Next.js.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex gap-4 pt-4">

            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;