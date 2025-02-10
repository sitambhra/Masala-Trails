import React, { useState, useEffect } from "react";
import sunIcon from '../utils/sun.png';
import moonIcon from '../utils/moon.png';

function DarkModeToggle() {
  // Get stored theme or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme on mount
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-800 dark:text-gray-200"><img src={sunIcon} className="w-6 h-6 dark:w-6" alt="light" /></span>

      {/* Toggle Switch */}
      <div
        className={`w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer`}
        onClick={toggleTheme}
      >
        <div
          className={`bg-white dark:bg-gray-900 w-6 h-6 rounded-full shadow-md transform duration-300 ${
            theme === "dark" ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </div>

      <span className="text-gray-800 dark:text-gray-200"><img src={moonIcon} className="w-6 h-6 dark:w-6" alt="dark" /></span>
    </div>
  );
}

export default DarkModeToggle;

