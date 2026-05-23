const projects = [
  {
    title: "Hospital Management System",
    description:
      "A full-stack hospital management platform with patient records, appointment booking, doctor management, and secure authentication.",
    tech: ["Java", "JDBC", "MySQL", "HTML", "CSS"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
  },
  {
    title: "Signature Forgery Detection",
    description:
      "Machine learning project using CNN and HOG algorithms to detect forged signatures with improved accuracy and image preprocessing.",
    tech: ["Python", "CNN", "HOG", "Machine Learning"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern animated portfolio built using Next.js, TypeScript, Tailwind CSS, and Framer Motion with responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

// Inline SVGs — zero library cost
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="section relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blue top-[20%] left-[-200px]" />
        <div className="glow-purple bottom-0 right-[-200px]" />
      </div>

      <div className="container-width relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of the projects I've worked on showcasing backend,
            full-stack, and machine learning development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass overflow-hidden rounded-3xl group hover:scale-[1.02] transition duration-500"
            >

              {/* Image — lazy loaded */}
              <div className="overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="btn btn-outline">
                    <GithubIcon />
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" className="btn btn-primary">
                    <ExternalIcon />
                    Live Demo
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;