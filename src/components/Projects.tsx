import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Festival Management System",
      icon: "🎉",
      technologies: ["Spring Boot", "PostgreSQL", "pgAdmin4"],
      description: [
        "Built a comprehensive festival platform that revolutionizes event management with role-based access for 1000+ users",
        "Engineered seamless event discovery and registration system with real-time availability tracking and instant booking confirmations",
        "Developed intelligent volunteer matching system that connects passionate students with meaningful event opportunities",
        "Created powerful admin analytics dashboard providing insights into event performance, user engagement, and operational efficiency"
      ]
    },
    {
      title: "Custom Relational Database Engine",
      icon: "🗃️",
      technologies: ["C++", "SQL", "Relational Algebra"],
      description: [
        "Architected a high-performance database engine from scratch, implementing core SQL operations with 40% faster query execution",
        "Designed intuitive command-line interface that transforms complex database operations into simple, user-friendly commands",
        "Built robust relational algebra processor handling millions of records with optimized memory management and query optimization"
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
