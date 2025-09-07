import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-content">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src="https://via.placeholder.com/300x400/6c63ff/ffffff?text=Profile" alt="Profile" />
          </div>
          
          <div className="about-text">
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

export default About;
