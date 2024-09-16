"use client";
import { useEffect, useState } from "react";
import "./style.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>(() => {
    // Verifica se o tema já está armazenado no localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    // Se não houver tema salvo, verifica o tema do dispositivo
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode ? "dark" : "light";
  });

  useEffect(() => {
    // Aplica o tema no <html>
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <label
      htmlFor="themeToggle"
      className="themeToggle st-sunMoonThemeToggleBtn mr-2 text-darkScheme-primary dark:text-lightScheme-primary md:mr-0 md:my-[30%]"
    >
      <input
        onChange={toggleTheme}
        type="checkbox"
        id="themeToggle"
        className="themeToggleInput"
      />
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="none"
        className="mx-[25%]"
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="20" height="20" fill="white"></rect>
          <circle cx="11" cy="3" r="8" fill="black"></circle>
        </mask>
        <circle
          className="sunMoon"
          cx="10"
          cy="10"
          r="8"
          mask="url(#moon-mask)"
        ></circle>
        <g>
          <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
          <circle
            className="sunRay sunRay2"
            cx="14"
            cy="16.928"
            r="1.5"
          ></circle>
          <circle
            className="sunRay sunRay3"
            cx="6"
            cy="16.928"
            r="1.5"
          ></circle>
          <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
          <circle
            className="sunRay sunRay5"
            cx="6"
            cy="3.1718"
            r="1.5"
          ></circle>
          <circle
            className="sunRay sunRay6"
            cx="14"
            cy="3.1718"
            r="1.5"
          ></circle>
        </g>
      </svg>
    </label>
  );
};

export default ThemeToggle;
