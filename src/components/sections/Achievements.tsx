// Inline SVGs — replaces all 4 lucide-react icons
const AwardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const BadgeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.85 8.62a4 4 0 014.78-4.77 4 4 0 016.74 0 4 4 0 014.78 4.78 4 4 0 010 6.74 4 4 0 01-4.77 4.78 4 4 0 01-6.75 0 4 4 0 01-4.78-4.77 4 4 0 010-6.76z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const BookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0012 0V2z" />
  </svg>
);

const achievements = [
  {
    icon: AwardIcon,
    title: "AWS Academy Cloud Foundations",
    description:
      "Completed AWS Academy Cloud Foundations certification covering cloud computing fundamentals and AWS services.",
  },
  {
    icon: BadgeIcon,
    title: "AICTE Intelligent Automation Internship",
    description:
      "Successfully completed AICTE virtual internship focused on intelligent automation and enterprise technologies.",
  },
  {
    icon: BookIcon,
    title: "Research Publication",
    description:
      "Published paper titled 'Signature Forgery Detection Using CNN and HOG' in IRJMETS Journal.",
  },
  {
    icon: TrophyIcon,
    title: "Hackathons & Coding Contests",
    description:
      "Participated in Flipkart Grid 6.0 and AccioWars coding contests improving problem-solving and development skills.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blue top-0 right-[-200px]" />
        <div className="glow-purple bottom-0 left-[-200px]" />
      </div>

      <div className="container-width relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Achievements &{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Certifications, research publications, internships,
            and coding experiences that shaped my development journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="glass p-8 rounded-3xl hover:scale-[1.02] transition duration-300 group"
              >

                {/* Icon */}
                <div className="
                  w-14 h-14 rounded-2xl
                  bg-blue-500/10 border border-blue-500/20
                  flex items-center justify-center
                  mb-6 text-blue-400
                  group-hover:scale-110 transition
                ">
                  <Icon />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;