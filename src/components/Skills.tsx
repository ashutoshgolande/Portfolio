import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "💡 Core Skills",
      icon: "fas fa-brain",
      skills: ["🧠 Algorithms and Data Structures", "🌐 Web Development", "🔍 Analytical Problem Solving"]
    },
    {
      title: "⚙️ Programming Languages", 
      icon: "fas fa-code",
      skills: ["⚙️ C", "💻 C++", "☕ Core Java", "🚀 Advanced Java", "⚡ JavaScript", "🌐 HTML", "🎨 CSS", "🐍 Python"]
    },
    {
      title: "🛠️ Frameworks & Tools",
      icon: "fas fa-tools", 
      skills: ["🌱 Spring", "⚡ Spring Boot", "🔄 Hibernate", "📱 Bootstrap", "📚 C++ STL", "🌿 Git", "🌓 Eclipse", "💡 IntelliJ", "💻 VS Code"]
    },
    {
      title: "🗄️ Database Technologies",
      icon: "fas fa-database",
      skills: ["🐬 MySQL", "🐘 PostgreSQL", "💾 SQLite", "🗄️ DBMS"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-content">
        <h2 className="section-title">🛠️ My Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-item"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
