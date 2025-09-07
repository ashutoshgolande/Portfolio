import React from 'react';
import './App.css';
import './styles/themes.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
          <section id="home">
            <Hero />
          </section>
          <section id="work-experience">
            <WorkExperience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="courses">
            <Courses />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
