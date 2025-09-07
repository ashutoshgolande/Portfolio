import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work-experience', 'skills', 'education', 'courses', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust based on navbar height
      const offsetTop = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>💼 Portfolio.</h2>
        <ThemeToggle />
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <button 
            onClick={() => scrollToSection('home')} 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            🏠 Home
          </button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => scrollToSection('work-experience')} 
            className={`nav-link ${activeSection === 'work-experience' ? 'active' : ''}`}
          >
            💼 Work Experience
          </button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => scrollToSection('skills')} 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
          >
            🛠️ Skills
          </button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => scrollToSection('education')} 
            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
          >
            🎓 Education
          </button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => scrollToSection('courses')} 
            className={`nav-link ${activeSection === 'courses' ? 'active' : ''}`}
          >
            📚 Courses
          </button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            🚀 Projects
          </button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            📞 Contact
          </button>
        </li>
      </ul>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </nav>
  );
};

export default Navbar;
