import "./Experience.css";

const experiences = [
  {
    title: "Frontend Developer Intern — LIA 2",
    company: "Volvo Group",
    period: "Jan 2026 – May 2026",
    description: [
      "Implemented analytics events to measure user interactions and tool usage",
      "Enhanced portal features using React and TypeScript",
      "Participated in mob programming sessions",
      "Conducted code reviews and improved maintainability of the codebase",
      "Worked with backend APIs for analytics integration",
    ],
    tech: ["React", "TypeScript", "MUI", "Adobe Analytics", "Git", "CI/CD"],
  },
  {
    title: "Software Developer Intern — LIA 1",
    company: "Volvo Group",
    period: "Sep 2025 – Nov 2025",
    description: [
      "Built the News page from scratch using React and MUI",
      "Applied enterprise-level workflows including Gerrit code reviews",
      "Exposed to IoT environment integrations and internal APIs",
      "Contributed to CI/CD processes during feature releases",
    ],
    tech: [
      "React",
      "TypeScript",
      "MUI",
      "Sanity CMS",
      "Git",
      "Gerrit",
      "CI/CD",
    ],
  },
  {
    title: "Fullstack Developer Student",
    company: "IT-Högskolan",
    period: "Aug 2024 – Jun 2026",
    description: [
      "Built E-commerce app with REST APIs and backend integration",
      "Developed Fleet Management app with fullstack features",
      "Created Wishlist app with JWT auth, public/private lists, account management, and product handling",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "NoSQL",
      "JWT",
    ],
  },
];

const Experience = () => {
  return (
    <section className='experience-timeline' id='experience'>
      <h2 className='experience-timeline-title'>Experience</h2>
      <div className='timeline-wrapper'>
        {experiences.map((exp, idx) => (
          <div key={idx} className='timeline-item'>
            <span className='timeline-dot' />
            <div className='timeline-card'>
              <h3 className='timeline-role'>{exp.title}</h3>
              <p className='timeline-meta'>
                {exp.company} &nbsp;|&nbsp; {exp.period}
              </p>
              <ul className='timeline-list'>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className='timeline-tech'>
                {exp.tech.map((tech, i) => (
                  <span key={i} className='tech-tag'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
