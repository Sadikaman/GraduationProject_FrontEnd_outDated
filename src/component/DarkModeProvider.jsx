import React, { createContext, useState, useEffect } from 'react';

// Create a context with default value
export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    // Initialize state from localStorage
    localStorage.getItem('darkMode') === 'true'
  );

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    // Apply or remove the 'dark' class on body based on darkMode state
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
