import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const YEAR = new Date().getFullYear();

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Zahert99",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zaher-taeiara-568282158/",
    icon: <FaLinkedin />,
  },
  {
    label: "Email",
    href: "mailto:Zaher.t99@gmail.com?subject=Portfolio%20Contact",
    icon: <FaEnvelope />,
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Technologies", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Nav links */}
        <nav className='footer-nav' aria-label='Footer navigation'>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className='footer-nav-link'>
              {label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className='footer-divider' />

        {/* Social icons + copyright */}
        <div className='footer-bottom'>
          <p className='footer-copy'>
            © {YEAR} Zaher Taeiara. All rights reserved.
          </p>

          <div className='footer-social'>
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className='footer-social-link'
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
