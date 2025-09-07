import React from 'react';
import './Courses.css';

const Courses: React.FC = () => {
  const courses = [
    { name: "Programming and Data Structures", icon: "💻" },
    { name: "Switching Circuits and Logic Design", icon: "🔌" },
    { name: "Formal Language and Automata Theory", icon: "🤖" },
    { name: "Database Management Systems", icon: "🗄️" },
    { name: "Computer Organization and Architecture", icon: "🖥️" },
    { name: "Algorithms-I", icon: "🧠" },
    { name: "Compilers", icon: "⚙️" },
    { name: "Algorithms-II", icon: "🔍" },
    { name: "Advanced Calculus", icon: "📐" },
    { name: "Computer Networks", icon: "🌐" },
    { name: "Discrete Structures", icon: "🔢" },
    { name: "Software Engineering", icon: "🏗️" },
    { name: "Machine Learning", icon: "🤖" },
    { name: "Signal and Systems", icon: "📡" },
    { name: "Basic Electronics", icon: "🔋" },
    { name: "Probability and Statistics", icon: "📊" },
    { name: "System Programming", icon: "💾" },
    { name: "Operating Systems", icon: "🖱️" },
    { name: "DIY Project", icon: "🔧" }
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="section-content">
        <h2 className="section-title">📚 Coursework</h2>
        <p className="section-subtitle">Key courses completed during my B.Tech program</p>
        
        <div className="courses-container">
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-item">
                <div className="course-content">
                  <span className="course-icon">
                    {course.icon}
                  </span>
                  <h4>{course.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;