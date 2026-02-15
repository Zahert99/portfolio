import "./Header.css";
export default function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-logo'>
          <h1 className='header-title'>Zaher Taeiara</h1>
        </div>

        <nav className='header-nav'>
          <a href='#projects' className='header-link'>
            Projects
          </a>
          <a href='#experience' className='header-link'>
            Experience
          </a>
          <a href='#about' className='header-link'>
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
