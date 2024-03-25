import { useEffect, useState } from "react";
import Sun from "./icon/icons/Sun";
import Moon from "./icon/icons/Moon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) return null;

  return (
    <button onClick={handleClick}>
      {theme === "light" ? <Moon></Moon> : <Sun></Sun>}
    </button>
  );
}
