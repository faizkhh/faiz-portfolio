"use client";

import { useState } from "react";

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const contactInfo = [
  { icon: MailIcon, title: "Email", value: "faizfzx99@gmail.com", link: "mailto:faizfzx99@gmail.com" },
  { icon: LinkedInIcon, title: "LinkedIn", value: "linkedin.com/in/mohammadfaiz25", link: "https://www.linkedin.com/in/mohammadfaiz25/" },
  { icon: GithubIcon, title: "GitHub", value: "github.com/faizkhh", link: "https://github.com/faizkhh" },
  { icon: MapPinIcon, title: "Location", value: "Saudi Arabia", link: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blue top-[20%] left-[-200px]" />
        <div className="glow-purple bottom-0 right-[-200px]" />
      </div>

      <div className="container-width relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a key={i} href={item.link} target="_blank"
                  className="glass p-6 rounded-3xl flex items-center gap-5">
                  <span className="text-blue-400"><Icon /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
            <input name="name" value={formData.name} onChange={handleChange}
              placeholder="Your Name" className="w-full p-3 bg-white/5 rounded-xl" />
            <input name="email" value={formData.email} onChange={handleChange}
              placeholder="Email" className="w-full p-3 bg-white/5 rounded-xl" />
            <textarea name="message" value={formData.message} onChange={handleChange}
              placeholder="Message" rows={5} className="w-full p-3 bg-white/5 rounded-xl" />
            <button type="submit" disabled={loading} className="btn btn-primary w-full">
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="text-green-400 text-center">Message sent successfully 🚀</p>}
            {error && <p className="text-red-400 text-center">Failed to send message</p>}
          </form>

        </div>
      </div>
    </section>
  );
}