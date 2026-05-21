"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Experience", value: "Fresher" },
  { label: "Technologies", value: "8+" },
  { label: "Focus", value: "Backend" },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-width">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <motion.h2 variants={fadeUp} className="text-4xl font-bold">
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
              I am a passionate backend developer focused on building scalable
              and production-ready applications. I enjoy designing APIs,
              working with databases, and building clean system architectures
              using Java, Spring Boot, and modern web technologies.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
              My goal is to become a strong full-stack engineer with deep
              backend expertise, contributing to real-world systems that scale
              and perform efficiently.
            </motion.p>

            {/* Buttons / CTA */}
            <motion.div variants={fadeUp} className="flex gap-4 pt-4">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </motion.div>

          </div>

          {/* RIGHT STATS CARD */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((item, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl text-center hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold gradient-text">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;