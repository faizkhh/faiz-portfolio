"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { ArrowUp } from "lucide-react";

const socials = [
  {
    icon: FaGithub,
    link: "https://github.com",
  },

  {
    icon: FaLinkedin,
    link: "https://linkedin.com",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blue bottom-[-250px] left-[-200px]" />
        <div className="glow-purple top-[-250px] right-[-200px]" />
      </div>

      <div className="container-width relative z-10 py-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-6
          "
        >

          {/* Left */}
          <div className="text-center md:text-left">

            <h3 className="text-2xl font-bold gradient-text">
              Mohammad Faiz Alam
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Java • Spring Boot • Full Stack Developer
            </p>

          </div>

          {/* Center Socials */}
          <div className="flex items-center gap-4">

            {socials.map((item, i) => {
              const Icon = item.icon;

              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="
                    w-12 h-12
                    rounded-2xl
                    glass
                    flex items-center justify-center
                    hover:scale-110
                    transition
                  "
                >
                  <Icon size={20} />
                </a>
              );
            })}

          </div>

          {/* Right */}
          <button
            onClick={scrollToTop}
            className="
              w-12 h-12
              rounded-2xl
              glass
              flex items-center justify-center
              hover:scale-110
              transition
            "
          >
            <ArrowUp size={20} />
          </button>

        </motion.div>

        {/* Bottom */}
        <div className="
          border-t border-white/10
          mt-8 pt-6
          text-center text-sm text-gray-500
        ">
          © {new Date().getFullYear()} Mohammad Faiz Alam.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;