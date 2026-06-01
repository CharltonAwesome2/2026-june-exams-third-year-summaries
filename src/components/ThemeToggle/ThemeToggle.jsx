// ThemeToggle.jsx

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkSaved = savedTheme !== "light";
    setIsDark(isDarkSaved);
    document.documentElement.setAttribute("data-theme", isDarkSaved ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    const theme = newIsDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}