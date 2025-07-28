import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const toggleThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(toggleThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function darkThemeToggle() {
    setDarkTheme((prev) => !prev);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <toggleThemeContext.Provider value={darkThemeToggle}>
        {children}
      </toggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
