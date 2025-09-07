import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="section-content">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              👋 Hi, I'm <span className="accent-name">Ashutosh Ravindra Golande</span><br />
              Software Development Engineer
            </h1>
            <p className="hero-description">
              Computer Science & Engineering graduate from IIT Kharagpur, 
              passionate about building scalable backend solutions and 
              innovative software systems. Currently working at Cars24.
            </p>
            <a href={`${process.env.PUBLIC_URL}/Ashutosh_CV.pdf`} download className="contact-btn" style={{ textDecoration: 'none' }}>
              <span>Download Resume</span>
              <i className="fas fa-download"></i>
            </a>
          </div>
          <div className="hero-image">
            <div className="image-blob">
              <img 
                src="https://i.postimg.cc/3NYW0r4B/IMG-20250907-WA0010.jpg"
                alt="Ashutosh Golande"
                className="profile-img"
              />
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I'm Ashutosh Ravindra Golande, a passionate Software Development Engineer 
              currently working at Cars24. I graduated from IIT Kharagpur with a B.Tech in 
              Computer Science & Engineering, achieving a CGPA of 7.63/10.
            </p>
            <p>
              My journey in technology has been driven by a deep interest in backend development, 
              database management, and creating scalable software solutions. I enjoy solving complex 
              problems and building systems that make a real impact. With a strong foundation in 
              algorithms and data structures, I'm always eager to take on new challenges.
            </p>
            <p>
              When I'm not coding, I'm probably exploring new technologies, participating in NSO activities, 
              or working on personal projects. I believe in continuous learning and am always looking 
              for opportunities to grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
