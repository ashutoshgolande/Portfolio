import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-content">
        <h2 className="section-title">🎓 Education</h2>
        <p className="section-subtitle">My academic journey and achievements</p>
        
        <div className="education-container">
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-year">2021 - 2025</div>
              <div className="education-content">
                <h3>Bachelor of Technology (B.Tech)</h3>
                <h4>Computer Science & Engineering</h4>
                <p className="institution">🏛️ Indian Institute of Technology (IIT) Kharagpur</p>
                <p className="grade">CGPA: 7.63/10</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-year">2019 - 2021</div>
              <div className="education-content">
                <h3>Higher Secondary Education (Class XII)</h3>
                <h4>MSBSHSE Board</h4>
                <p className="institution">🏫 Dadasaheb Devidas Namdeo Bhole Jr. College, Bhusawal</p>
                <p className="grade">Percentage: 87.33%</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-year">2019</div>
              <div className="education-content">
                <h3>Secondary Education (Class X)</h3>
                <h4>CBSE Board</h4>
                <p className="institution">🏫 Tapti Public School, Bhusawal</p>
                <p className="grade">Percentage: 94.4%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
