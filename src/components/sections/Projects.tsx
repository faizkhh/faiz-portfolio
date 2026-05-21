"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Hospital Management System",
    description:
      "A full-stack hospital management platform with patient records, appointment booking, doctor management, and secure authentication.",
    tech: ["Java", "JDBC", "MySQL", "HTML", "CSS"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
  },

  {
    title: "Signature Forgery Detection",
    description:
      "Machine learning project using CNN and HOG algorithms to detect forged signatures with improved accuracy and image preprocessing.",
    tech: ["Python", "CNN", "HOG", "Machine Learning"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },

  {
    title: "Portfolio Website",
    description:
      "Modern animated portfolio built using Next.js, TypeScript, Tailwind CSS, and Framer Motion with responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blue top-[20%] left-[-200px]" />
        <div className="glow-purple bottom-0 right-[-200px]" />
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Some of the projects I’ve worked on showcasing backend,
            full-stack, and machine learning development.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >

          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="
                glass
                overflow-hidden
                rounded-3xl
                group
                hover:scale-[1.02]
                transition duration-500
              "
            >

              {/* Image */}
              <div className="overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8">

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1
                        rounded-full
                        text-sm
                        bg-white/5
                        border border-white/10
                        text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="btn btn-outline"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default Projects;