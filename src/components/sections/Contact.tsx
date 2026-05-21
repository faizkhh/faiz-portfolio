"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "faizfzx99@gmail.com",
    link: "mailto:faizfzx99@gmail.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section relative overflow-hidden">

      {/* Background */}
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
          <motion.h2 variants={fadeUp} className="text-4xl font-bold">
            Let’s <span className="gradient-text">Connect</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
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
                  className="glass p-6 rounded-3xl flex items-center gap-5"
                >
                  <Icon className="text-blue-400" size={24} />
                  <div>
                    <h3>{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass p-8 rounded-3xl space-y-6"
          >

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-white/5 rounded-xl"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 bg-white/5 rounded-xl"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="w-full p-3 bg-white/5 rounded-xl"
            />

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-center">
                Message sent successfully 🚀
              </p>
            )}

            {error && (
              <p className="text-red-400 text-center">
                Failed to send message
              </p>
            )}

          </motion.form>

        </div>
      </div>
    </section>
  );
}