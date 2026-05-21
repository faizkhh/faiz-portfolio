"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  Award,
  Trophy,
  BookOpen,
  BadgeCheck,
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "AWS Academy Cloud Foundations",
    description:
      "Completed AWS Academy Cloud Foundations certification covering cloud computing fundamentals and AWS services.",
  },

  {
    icon: BadgeCheck,
    title: "AICTE Intelligent Automation Internship",
    description:
      "Successfully completed AICTE virtual internship focused on intelligent automation and enterprise technologies.",
  },

  {
    icon: BookOpen,
    title: "Research Publication",
    description:
      "Published paper titled 'Signature Forgery Detection Using CNN and HOG' in IRJMETS Journal.",
  },

  {
    icon: Trophy,
    title: "Hackathons & Coding Contests",
    description:
      "Participated in Flipkart Grid 6.0 and AccioWars coding contests improving problem-solving and development skills.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="section relative overflow-hidden"
    >

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
            Achievements &{" "}
            <span className="gradient-text">
              Certifications
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Certifications, research publications, internships,
            and coding experiences that shaped my development journey.
          </motion.p>

        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >

          {achievements.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="
                  glass
                  p-8
                  rounded-3xl
                  hover:scale-[1.02]
                  transition duration-300
                  group
                "
              >

                {/* Icon */}
                <div className="
                  w-14 h-14
                  rounded-2xl
                  bg-blue-500/10
                  border border-blue-500/20
                  flex items-center justify-center
                  mb-6
                  group-hover:scale-110
                  transition
                ">
                  <Icon className="text-blue-400" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;