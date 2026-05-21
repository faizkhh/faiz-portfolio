"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const timeline = [
  {
    title: "Bachelor’s in Information Science & Engineering",
    company: "AMC Engineering College, VTU",
    period: "2020 — 2024",
    description:
      "Completed Bachelor's degree in Information Science & Engineering with strong focus on software development, Java, databases, and web technologies.",
  },

  {
    title: "Full Stack Development Training",
    company: "Tap Academy",
    period: "2024",
    description:
      "Completed intensive training in Java, Spring Boot, SQL, React.js, and modern full-stack development practices.",
  },

  {
    title: "Research Publication",
    company: "IRJMETS Journal",
    period: "2024",
    description:
      "Published research paper on Signature Forgery Detection using CNN and HOG algorithms in IRJMETS.",
  },

  {
    title: "Backend & Full Stack Projects",
    company: "Personal / Academic Projects",
    period: "2023 — Present",
    description:
      "Built scalable backend APIs, full-stack systems, and responsive web applications using Java, Spring Boot, Next.js, and MySQL.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="section relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blue top-[20%] left-[-200px]" />
        <div className="glow-purple bottom-[10%] right-[-200px]" />
      </div>

      <div className="container-width relative z-10">

        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold"
          >
            My <span className="gradient-text">Journey</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            My educational background, learning journey, and development experience.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="
            absolute left-4 md:left-1/2
            top-0 bottom-0
            w-[2px]
            bg-white/10
            -translate-x-1/2
          " />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-16"
          >

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`
                  relative flex flex-col md:flex-row items-start
                  ${i % 2 === 0 ? "md:flex-row-reverse" : ""}
                `}
              >

                {/* Empty Space Desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Timeline Dot */}
                <div
                  className="
                    absolute left-4 md:left-1/2
                    top-6
                    w-4 h-4
                    rounded-full
                    bg-blue-500
                    shadow-[0_0_20px_rgba(59,130,246,0.8)]
                    -translate-x-1/2
                    z-10
                  "
                />

                {/* Card */}
                <div className="
                  ml-12 md:ml-0
                  md:w-1/2
                  glass
                  p-8
                  rounded-3xl
                  hover:scale-[1.02]
                  transition duration-300
                ">

                  <span className="text-sm text-blue-400">
                    {item.period}
                  </span>

                  <h3 className="text-2xl font-semibold mt-2">
                    {item.title}
                  </h3>

                  <h4 className="text-gray-400 mt-1">
                    {item.company}
                  </h4>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Experience;