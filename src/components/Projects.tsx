import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Festival Management System",
      icon: "🎉",
      technologies: ["Spring Boot", "PostgreSQL", "pgAdmin4"],
      description: [
        "Created a secure system with SpringBoot and PostgreSQL, having role-specific registration for Students, Participants, Organizers.",
        "Implemented event search, registration, cancellation, volunteering, and organizer roles for event creation and declaring winner.",
        "Managed relational data with PostgreSQL and pgAdmin4 handling CRUD operations for users, events, winners with validation.",
        "Allowed admins to manage user accounts, handle event outcomes, and access reports for winners, logistics, accommodation."
      ]
    },
    {
      title: "Implementing Functionalities of Relational Database",
      icon: "🗃️",
      technologies: ["C++", "SQL", "Relational Algebra"],
      description: [
        "Implemented custom logic for SQL operations, like Union, Difference, Cartesian Product, Projection, Selection, and Rename.",
        "Designed and built a C++ application to execute complex relational database queries, utilizing relational algebra principles.",
        "Created an intuitive command-line interface for seamless execution of all relational database operations."
      ]
    },
    {
      title: "Buffer Management System",
      icon: "🔧",
      technologies: ["C/C++", "SQLite", "Database Optimization"],
      description: [
        "Developed a buffer management simulation in C/C++ using SQLite to evaluate join and selection queries performance",
        "Implemented key strategies: Least Recently Used (LRU), Most Recently Used (MRU), CLOCK, and Pinned Blocks",
        "Analyzed and compared the efficiency of each strategy based on the number of disk I/O operations required",
        "Conducted a detailed analysis of trade-offs between eviction policies for optimizing database performance"
      ]
    },
    {
      title: "Motor Part Shop Software (MPSS)",
      icon: "🏪",
      technologies: ["Spring Boot", "PostgreSQL", "Bootstrap", "CSS", "JIT"],
      description: [
        "Built a Motor Part Shop Software with Springboot and PostgreSQL for efficient inventory management and JIT-based reordering",
        "Developed algorithms to calculate dynamic inventory thresholds based on weekly sales data, ensuring optimal inventory levels",
        "Reduced overhead costs by applying Just-In-Time (JIT) principles, minimizing excess stock and enhancing efficiency",
        "Created daily revenue summaries and monthly sales graphs for performance tracking",
        "Utilized Bootstrap and CSS to create an intuitive and efficient user interface for streamlined operations"
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-content">
        <h2 className="section-title">🚀 Projects</h2>
        <p className="section-subtitle">Software solutions I've built and contributed to</p>
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-title-section">
                  <h3>{project.title}</h3>
                  <div className="tech-stack">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-description">
                <ul>
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
