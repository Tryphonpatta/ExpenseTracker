//SwitchTheme.tsx
"use client"
import React, { useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import { useLocalStorage } from "usehooks-ts";
import { CiLight } from "react-icons/ci";



const SwitchTheme = () => {
  //we store the theme in localStorage to preserve the state on next visit with an initial theme of dark.
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "retro" : "dark");
  };

  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);


  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {theme === "dark" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <CiLight className="w-5 h-5" />
      )}
    </button>
  );
};

export default SwitchTheme;

