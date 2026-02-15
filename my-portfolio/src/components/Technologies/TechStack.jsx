import "./TechStack.css";
import {
  FaGithub,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAdobe,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { FaDocker, FaGit } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { TbApi, TbBrandAzure } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

function TechStack() {
  // Icon mapping using only your imported icons
  const iconMap = {
    // Frontend
    React: <FaReact className='skill-icon' style={{ color: "#61DAFB" }} />,
    TypeScript: (
      <SiTypescript className='skill-icon' style={{ color: "#3178C6" }} />
    ),
    Vue: <FaVuejs className='skill-icon' style={{ color: "#4FC08D" }} />,
    JavaScript: (
      <IoLogoJavascript className='skill-icon' style={{ color: "#F7DF1E" }} />
    ),
    HTML: <FaHtml5 className='skill-icon' style={{ color: "#E34F26" }} />,
    CSS: <FaCss3Alt className='skill-icon' style={{ color: "#1572B6" }} />,

    // Backend
    "Node.js": <FaNodeJs className='skill-icon' style={{ color: "#339933" }} />,
    Express: <SiExpress className='skill-icon' style={{ color: "#ffffff" }} />,
    Next: <RiNextjsFill className='skill-icon' style={{ color: "#000000" }} />,
    "REST APIs": <TbApi className='skill-icon' style={{ color: "#009688" }} />,

    // Database
    MongoDB: <SiMongodb className='skill-icon' style={{ color: "#47A248" }} />,
    MySQL: <SiMysql className='skill-icon' style={{ color: "#4479A1" }} />,
    PostgreSQL: (
      <SiPostgresql className='skill-icon' style={{ color: "#4169E1" }} />
    ),

    // Tools
    Git: <FaGit className='skill-icon' style={{ color: "#F05032" }} />,
    Docker: <FaDocker className='skill-icon' style={{ color: "#2496ED" }} />,
    Azure: <TbBrandAzure className='skill-icon' style={{ color: "#0078D4" }} />,
    GitHub: <FaGithub className='skill-icon' style={{ color: "#181717" }} />,

    // Analytics
    "Adobe Analytics": (
      <SiAdobe className='skill-icon' style={{ color: "#FF0000" }} />
    ),
    "Web SDK": (
      <IoLogoJavascript className='skill-icon' style={{ color: "#FFA500" }} />
    ),
  };

  const tech = {
    Frontend: ["React", "TypeScript", "Vue", "JavaScript", "HTML", "CSS"],
    Backend: ["Node.js", "Express", "Next", "REST APIs"],
    Database: ["MongoDB", "MySQL", "PostgreSQL"],
    Tools: ["Git", "Docker", "Azure", "GitHub"],
    Analytics: ["Adobe Analytics", "Web SDK"],
  };

  return (
    <section className='tech' id='tech'>
      <h2 className='tech-title'>Tech Stack</h2>

      <div className='tech-grid'>
        {Object.entries(tech).map(([category, skills]) => (
          <div className='tech-card' key={category}>
            <h3>{category}</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>
                  {iconMap[skill]}
                  <span className='skill-name'>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
