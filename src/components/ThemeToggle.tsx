import { useEffect } from "react";
import Sun from "./icon/icons/Sun";
import Moon from "./icon/icons/Moon";
import { useStore } from "@nanostores/react";
import { theme } from "../stores/ThemeStore.ts";

export default function ThemeToggle() {
  const $theme = useStore(theme);

  const handleClick = () => {
    theme.set($theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    theme.set(localStorage.getItem("theme") || "light");
  }, []);

  useEffect(() => {
    if ($theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", $theme);
  }, [$theme]);

  if (!$theme) return <></>;

  return (
    <button onClick={handleClick}>
      {$theme === "light" ? <Moon></Moon> : <Sun></Sun>}
    </button>
  );
}
