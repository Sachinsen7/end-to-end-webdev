import React, { useContext } from "react";
import { useTheme, useThemeUpdate } from "./themeContext.jsx";
function FunctionContextComponent() {
  const darkTheme = useTheme();
  const darkThemeToggle = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={darkThemeToggle}>Toggle theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}

export default FunctionContextComponent;
