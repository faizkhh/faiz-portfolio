"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

import {
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "faizfzx99@gmail.com",
    link: "mailto:faizfzx99@gmail.com",
  },

  {
icon: FaLinkedin,    title: "LinkedIn",
    value: "linkedin.com/in/mohammadfaiz25",
    link: "https://www.linkedin.com/in/mohammadfaiz25/",
  },

  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/faizkhh",
    link: "https://github.com/faizkhh",
  },

  {
    icon: MapPin,
    title: "Location",
    value: "Saudi Arabia",
    link: "#",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
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
            Let’s <span className="gradient-text">Connect</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Open to software engineering opportunities, collaborations,
            and backend/full-stack development roles.
          </motion.p>

        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT CONTACT INFO */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >

            {contactInfo.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  variants={fadeUp}
                  className="
                    glass
                    p-6
                    rounded-3xl
                    flex items-center gap-5
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
                    group-hover:scale-110
                    transition
                  ">
                    <Icon className="text-blue-400" size={24} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {item.value}
                    </p>
                  </div>

                </motion.a>
              );
            })}

          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              glass
              p-8
              rounded-3xl
              space-y-6
            "
          >

            {/* Name */}
            <div>
              <label className="text-sm text-gray-300">
                Your Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="
                  w-full mt-2
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  outline-none
                  focus:border-blue-500
                  transition
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="
                  w-full mt-2
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  outline-none
                  focus:border-blue-500
                  transition
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-300">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="
                  w-full mt-2
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  outline-none
                  resize-none
                  focus:border-blue-500
                  transition
                "
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;