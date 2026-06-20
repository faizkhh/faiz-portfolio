import Image from "next/image";

const projects = [
  {
    title: "OTP-Based Authentication System",
    description:
      "Secure dynamic OTP authentication system built as part of a Greendzine Technologies freelance assignment. Replaces traditional password logins with random OTP generation, 30-second expiration logic, and a full resend OTP flow. Strictly follows Adobe XD design specs with Chart.js dashboard integration.",
    tech: ["React.js", "Hash Router", "LocalStorage", "Chart.js"],
    image: "/images/projects/otp-auth.png",
    github: "https://greendzine-assignment-ten-jade.vercel.app/",
  },
  {
    title: "Hospital Management System",
    description:
      "Full-stack hospital management platform with patient records, appointment booking, doctor management, and secure authentication.",
    tech: ["Java", "JDBC", "MySQL", "HTML", "CSS"],
    image: "/images/projects/hospital.png",
    github: "https://github.com/faizkhh/YOUR_REPO_2",
  },
  {
    title: "Signature Forgery Detection",
    description:
      "Machine learning project using CNN and HOG algorithms to detect forged signatures with improved accuracy and image preprocessing. Published as a research paper in IRJMETS Journal.",
    tech: ["Python", "CNN", "HOG", "Machine Learning"],
    image: "/images/projects/signature.png",
    github: "https://github.com/faizkhh/YOUR_REPO_3",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Content-based movie recommendation engine that suggests films based on user preferences using similarity scoring across a large dataset.",
    tech: ["Python", "NumPy", "Pandas"],
    image: "/images/projects/movie.png",
    github: "https://github.com/faizkhh/recommendation-system",
  },
  {
    title: "Personal AI Assistant",
    description:
      "Voice-activated personal AI assistant built in Python, capable of answering questions, opening applications, playing music, and performing web searches hands-free.",
    tech: ["Python", "Speech Recognition", "pyttsx3", "Wikipedia API"],
    image: "/images/projects/jarvis.png",
    github: "https://github.com/faizkhh/Virtual-Personal-Assistant-using-Python-master",
  },
];

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blue top-[20%] left-[-200px]" />
        <div className="glow-purple bottom-0 right-[-200px]" />
      </div>

      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Projects spanning backend systems, machine learning, AI assistants,
            and freelance client work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass overflow-hidden rounded-3xl group transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="overflow-hidden h-60 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  quality={70}
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <GithubIcon />
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;