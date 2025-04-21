import React, { useEffect, useState } from 'react';
import './FloatingDarkModeButton.css';

const FloatingDarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('profepluss_darkmode');
    return stored ? stored === 'true' : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark-mode');
      document.querySelector('.landing-root')?.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark-mode');
      document.querySelector('.landing-root')?.classList.remove('dark-mode');
    }
    localStorage.setItem('profepluss_darkmode', darkMode);
    // Dispatch custom event for immediate sync
    window.dispatchEvent(new Event('profepluss-darkmode-toggle'));
  }, [darkMode]);

  return (
    <button
      className={`floating-darkmode-btn${darkMode ? ' dark' : ''}`}
      aria-label="Alternar modo oscuro"
      onClick={() => setDarkMode(dm => !dm)}
    >
      <span className="icon">
        {darkMode ? (
          // Luna minimalista blanca sobre fondo negro
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 10.5C15.5 13.5376 13.0376 16 10 16C8.53757 16 7.20697 15.4005 6.23982 14.4016C6.08073 14.2379 6.19959 13.9685 6.42902 13.997C9.82229 14.4258 13 11.6301 13 8.00001C13 7.77058 13.2695 7.65172 13.4332 7.81081C14.4321 8.778 15.5 10.1106 15.5 10.5Z" fill="#fff"/>
          </svg>
        ) : (
          // Sol minimalista negro sobre fondo blanco
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="5" fill="#111" />
            <g stroke="#111" strokeWidth="1.2">
              <line x1="10" y1="2" x2="10" y2="0.8" />
              <line x1="10" y1="18" x2="10" y2="19.2" />
              <line x1="2" y1="10" x2="0.8" y2="10" />
              <line x1="18" y1="10" x2="19.2" y2="10" />
              <line x1="4.22" y1="4.22" x2="3.36" y2="3.36" />
              <line x1="15.78" y1="15.78" x2="16.64" y2="16.64" />
              <line x1="4.22" y1="15.78" x2="3.36" y2="16.64" />
              <line x1="15.78" y1="4.22" x2="16.64" y2="3.36" />
            </g>
          </svg>
        )}
      </span>
    </button>
  );
};

export default FloatingDarkModeButton;
