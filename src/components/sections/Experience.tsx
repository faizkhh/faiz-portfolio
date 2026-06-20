const timeline = [
  {
    title: "Software Engineer & IT Support",
    company: "MFABCON, Saudi Arabia",
    period: "2025 — Present",
    description: [
      "Built and deployed RESTful APIs with Java & Spring Boot (MVC, SOLID); reduced API latency by 30% through query optimisation.",
      "Designed normalised MySQL schemas with stored procedures, indexing, and zero-downtime migrations.",
      "Delivered real-time Power BI dashboards integrated with live MySQL via DirectQuery for sales, inventory, and ops KPIs.",
      "Authored API contracts, ER diagrams, and workflow maps adopted as team-wide reference documentation.",
      "Provided IT systems support — network troubleshooting, hardware setup, and internal tooling maintenance.",
    ],
  },
  {
    title: "Project Engineer",
    company: "Baryon's, Bengaluru",
    period: "2024 — 2025",
    description: [
      "Developed Java backend modules for a live web application serving 1,000+ active users — business logic, third-party integrations, and CRUD operations.",
      "Engineered test plans covering 200+ REST API endpoints; reduced post-release defect escape rate by ~25%.",
      "Collaborated cross-functionally through the full SDLC with UX designers and product owners, consistently delivering on sprint commitments.",
    ],
  },
  {
    title: "Research Publication",
    company: "IRJMETS Journal",
    period: "April 2024",
    description: [
      "Published research paper titled 'Signature Forgery Detection Using CNN and HOG' in the International Research Journal of Modernization in Engineering Technology and Science.",
    ],
  },
  {
    title: "Full Stack Development Training",
    company: "Tap Academy, Bengaluru",
    period: "2024",
    description: [
      "Completed intensive training in Java, Spring Boot, SQL, React.js, and modern full-stack development practices.",
    ],
  },
  {
    title: "Bachelor's in Information Science & Engineering",
    company: "AMC Engineering College, VTU",
    period: "2020 — 2024",
    description: [
      "Graduated with strong focus on software development, Java, databases, and web technologies.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blue top-[20%] left-[-200px]" />
        <div className="glow-purple bottom-[10%] right-[-200px]" />
      </div>

      <div className="container-width relative z-10">

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Two years of hands-on experience across software engineering,
            backend development, and IT support.
          </p>
        </div>

        <div className="relative">

          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="
                  absolute left-4 md:left-1/2
                  top-6 w-4 h-4
                  rounded-full bg-blue-500
                  shadow-[0_0_20px_rgba(59,130,246,0.8)]
                  -translate-x-1/2 z-10
                " />

                <div className="
                  ml-12 md:ml-0 md:w-1/2
                  glass p-8 rounded-3xl
                  hover:scale-[1.02] transition duration-300
                ">
                  <span className="text-sm text-blue-400">{item.period}</span>
                  <h3 className="text-2xl font-semibold mt-2">{item.title}</h3>
                  <h4 className="text-gray-400 mt-1 mb-4">{item.company}</h4>
                  <ul className="space-y-2">
                    {item.description.map((point, j) => (
                      <li key={j} className="text-gray-400 leading-relaxed flex gap-2">
                        <span className="text-blue-400 mt-1 shrink-0">–</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;