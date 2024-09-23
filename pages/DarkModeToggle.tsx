// components/DarkModeToggle.tsx
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Check for the existing theme setting in localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark-mode');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark-mode');
      }
    }
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} aria-label="Toggle dark mode" style={buttonStyles}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

// Styles for the button (customize as needed)
const buttonStyles = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem',
  color: 'inherit',
};

export default DarkModeToggle;
