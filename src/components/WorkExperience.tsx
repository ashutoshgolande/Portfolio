import React from 'react';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="work-experience-section">
      <div className="section-content">
        <h2 className="section-title">💼 Work Experience</h2>
        <p className="section-subtitle">My professional journey and contributions</p>
        
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-date">
              <span>July 2025 - Present</span>
            </div>
            <div className="experience-content">
              <h3>Software Development Engineer</h3>
              <h4>🚗 Cars24, India</h4>
              <ul>
                <li>Contributing to the Buy Cars domain, focusing on backend development for services enabling customers to purchase vehicles</li>
                <li>Developed and enhanced core services including Listing Service and Slot Service to provide customers with preferred test drive scheduling options</li>
                <li>Utilized Spring Boot and Java as primary technologies, implementing robust, scalable, and maintainable backend solutions</li>
                <li>Worked with Spring Data JPA for database connectivity, optimizing queries and ensuring efficient data handling</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
              </ul>
              <div className="tech-stack">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Spring Data JPA</span>
                <span className="tech-tag">Microservices</span>
                <span className="tech-tag">Backend Development</span>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">
              <span>May 2024 - June 2024</span>
            </div>
            <div className="experience-content">
              <h3>Software Developer Intern</h3>
              <h4>🏢 Pratinik Infotech, Pune</h4>
              <ul>
                <li>Gained hands-on experience in software development and industry best practices</li>
                <li>Worked on real-world projects under the guidance of experienced developers</li>
                <li>Learned about software development lifecycle and project management</li>
                <li>Enhanced problem-solving skills and technical expertise</li>
                <li>Contributed to team projects and collaborated effectively with team members</li>
              </ul>
              <div className="tech-stack">
                <span className="tech-tag">Software Development</span>
                <span className="tech-tag">Team Collaboration</span>
                <span className="tech-tag">Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
