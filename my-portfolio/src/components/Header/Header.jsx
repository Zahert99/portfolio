import "./Header.css";
import ztlogo from "../../assets/ztlogo.jpg";
export default function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-logo'>
          <img src={ztlogo} alt='Ziko Logo' className='logo-image' />
        </div>

        <nav className='header-nav'>
          <a href='#projects' className='header-link'>
            Projects
          </a>
          <a href='#experience' className='header-link'>
            Experience
          </a>
          <a href='#aboutMe' className='header-link'>
            About
          </a>
          <a href='#contact' className='header-link'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
