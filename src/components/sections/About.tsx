"use client";

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Experience", value: "2 Years" },
  { label: "Technologies", value: "15+" },
  { label: "Focus", value: "Backend" },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-width">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            <h2 className="text-4xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Software Engineer and IT professional with 2 years of experience
              building production-grade backend systems. I've shipped RESTful
              APIs in Java and Spring Boot, designed MySQL schemas, delivered
              Power BI dashboards, and supported live applications serving
              1,000+ active users.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I'm comfortable across the full stack — from backend architecture
              and database design to frontend interfaces and IT systems support.
              I work well in cross-functional teams, take ownership of my work,
              and care about writing clean, maintainable code.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-4">

            {stats.map((item, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl text-center hover:scale-[1.02] transition-transform"
              >
                <h3 className="text-2xl font-bold gradient-text">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;