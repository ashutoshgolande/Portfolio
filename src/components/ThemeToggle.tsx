import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log('Theme toggle clicked! Current mode:', isDarkMode ? 'dark' : 'light');
    toggleTheme();
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={handleToggle}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-container">
        <div className={`toggle-slider ${isDarkMode ? 'dark' : 'light'}`}>
          <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
