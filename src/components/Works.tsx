import React from 'react';
import './Works.css';

const Works: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Motor Part Shop Software (MPSS)',
      description: 'Built a SpringBoot and PostgreSQL application for efficient inventory management with JIT-based reordering and dynamic threshold calculations.',
      image: 'https://via.placeholder.com/400x250/6c63ff/ffffff?text=MPSS',
      tags: ['Spring Boot', 'PostgreSQL', 'Bootstrap']
    },
    {
      id: 2,
      title: 'Buffer Management System',
      description: 'Developed a buffer management simulation in C/C++ using SQLite to evaluate join and selection queries performance with various eviction strategies.',
      image: 'https://via.placeholder.com/400x250/5a52ff/ffffff?text=Buffer+System',
      tags: ['C++', 'SQLite', 'Database Management']
    },
    {
      id: 3,
      title: 'Festival Management System',
      description: 'Created a secure system with SpringBoot and PostgreSQL, featuring role-specific registration for Students, Participants, and Organizers.',
      image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Festival+MS',
      tags: ['Spring Boot', 'PostgreSQL', 'Authentication']
    },
    {
      id: 4,
      title: 'Relational Database Implementation',
      description: 'Implemented custom logic for SQL operations like Union, Difference, Cartesian Product, Projection, Selection, and Rename using C++.',
      image: 'https://via.placeholder.com/400x250/059669/ffffff?text=Database+Engine',
      tags: ['C++', 'SQL', 'Relational Algebra']
    },
    {
      id: 5,
      title: 'Full-Stack Blogging Platform',
      description: 'Developed a complete blogging platform with React frontend and SpringBoot backend, featuring JWT authentication and responsive design.',
      image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Blog+Platform',
      tags: ['React', 'Spring Boot', 'JWT']
    },
    {
      id: 6,
      title: 'Cars24 - Buy Cars Domain',
      description: 'Contributing to backend development for Buy Cars domain, working on Listing Service and Slot Service for test drive scheduling.',
      image: 'https://via.placeholder.com/400x250/ea580c/ffffff?text=Cars24',
      tags: ['Spring Boot', 'Java', 'Microservices']
    }
  ];

  return (
    <section id="works" className="works-section">
      <div className="section-content">
        <h2 className="section-title">My Works</h2>
        <p className="section-subtitle">
          A showcase of my software development projects and technical contributions
        </p>
        
        <div className="works-grid">
          {projects.map((project) => (
            <div key={project.id} className="work-card">
              <div className="work-image">
                <img src={project.image} alt={project.title} />
                <div className="work-overlay">
                  <button className="view-btn">View More</button>
                </div>
              </div>
              
              <div className="work-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="work-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="work-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
