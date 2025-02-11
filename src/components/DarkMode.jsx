import React, { useState, useEffect } from "react";
import sunIcon from "../utils/sun.png";
import moonIcon from "../utils/moon.png";

function DarkModeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to change theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="w-8 h-8">
      <img
        src={theme === "light" ? moonIcon : sunIcon}
        alt={theme === "light" ? "Light Mode" : "Dark Mode"}
        className="w-full h-full"
      />
    </button>
  );
}

export default DarkModeToggle;
