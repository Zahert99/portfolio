import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "e-commerce application with cart handling add/remove items calculates.",
      technologies: ["native javascript", "CSS", "HTML"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Budget tracking and Management App",
      description:
        "Budget tracking and management app with expense categorization, budget limits.",
      technologies: ["Vue", "Express", "mySQL", "mongoDB", "REST APIs"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Smart Fleet Dashboard",
      description:
        "Interactive dashboard for fleet management with follow services up and manage history .",
      technologies: ["React", "TypeScript", "REST APIs", "mySQL"],
      github: "https://github.com/yourusername/project3",
      live: "https://project3.com",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Wish list app",
      description:
        "Wish list app with user authentication, item management, and sharing features.",
      technologies: [
        "Vite",
        "Node.js",
        "express",
        "MySQL",
        "REST APIs",
        "JWT",
        "bcrypt",
        "React",
        "JavaScript",
      ],
      github: "https://github.com/yourusername/project4",
      live: "https://project4.com",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <section className='projects' id='projects'>
      <div className='projects-container'>
        <h2 className='projects-title'>Featured Projects</h2>
        <p className='projects-subtitle'>Here are some of my recent works</p>

        <div className='projects-grid'>
          {projects.map((project, index) => (
            <div className='project-card' key={index}>
              <div className='project-image'>
                <img src={project.image} alt={project.title} />
                <div className='project-overlay'>
                  <div className='project-links'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project-link'
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project-link'
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className='project-content'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
                <div className='project-technologies'>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className='tech-tag'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
