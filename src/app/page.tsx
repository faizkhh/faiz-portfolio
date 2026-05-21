import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

// Lazy load heavy sections
const About = dynamic(() => import("@/components/sections/About"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Achievements = dynamic(() => import("@/components/sections/Achievements"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />

      {/* Keep above-the-fold FAST */}
      <Hero />

      {/* Below-the-fold lazy loaded */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}