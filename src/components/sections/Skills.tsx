const skillCategories = [
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "JWT",
      "SQL",
      "MySQL",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Vercel",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section relative overflow-hidden">

      {/* ⚡ Optimized background (lighter) */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="glow-blue" />
        <div className="glow-purple" />
      </div>

      <div className="container-width relative z-10">

        {/* Heading (no motion) */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable backend systems
            and modern web applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="glass p-8 rounded-3xl transition-transform hover:scale-[1.02]"
            >

              <h3 className="text-2xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-sm text-gray-300
                      hover:bg-blue-500/10
                      hover:border-blue-400/30
                      hover:text-white
                      transition-colors
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;