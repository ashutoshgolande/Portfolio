import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
        <div className="footer-brand">
          <h3>Ashutosh Ravindra Golande</h3>
          <p>Software Developer</p>
        </div>          <div className="footer-details">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#work-experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Technologies</h4>
              <ul>
                <li>Java & Spring Boot</li>
                <li>React & TypeScript</li>
                <li>Python & Machine Learning</li>
                <li>Database Systems</li>
                <li>Cloud & DevOps</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <p>📧 ashutoshgolande0608@gmail.com</p>
              <p>📱 +91 9175043690</p>
              <p>📍 India</p>
              <p>🌐 Available for opportunities</p>
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com/in/ashutoshgolande" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:ashutoshgolande0608@gmail.com" className="social-link" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/ashutoshgolande" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-text">
          <p className="copyright">💻 Made with ❤️ by Ashutosh Golande</p>
          <p className="year">© 2025 • All rights reserved • Software Engineer at Cars24</p>
          <p className="portfolio-note">This portfolio showcases my journey from IIT Kharagpur to the tech industry</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
