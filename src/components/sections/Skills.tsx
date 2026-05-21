"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "JWT",
      "SQL",
      "MySQL",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Vercel",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blue top-0 right-[-200px]" />
        <div className="glow-purple bottom-0 left-[-200px]" />
      </div>

      <div className="container-width relative z-10">

        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Technologies and tools I use to build scalable backend systems
            and modern web applications.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass p-8 rounded-3xl hover:border-blue-500/30 transition duration-300"
            >

              {/* Category Title */}
              <h3 className="text-2xl font-semibold mb-6">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-sm text-gray-300
                      hover:bg-blue-500/10
                      hover:border-blue-400/30
                      hover:text-white
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default Skills;