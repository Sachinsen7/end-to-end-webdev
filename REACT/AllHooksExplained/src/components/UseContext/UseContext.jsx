import React from "react";
import FunctionContextComponent from "./FunctionContextComponent.jsx";
import { ThemeProvider } from "./themeContext.jsx";

// export const ThemeContext = createContext(true);

const UseContext = () => {
  // const [darkTheme, setDarkTheme] = useState(true);

  // function toggleTheme() {
  //   setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  // }
  return (
    <>
      {/* <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextComponent />
        <FunctionContextComponent />
      </ThemeContext.Provider> */}

      {/* another way */}

      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
};

export default UseContext;
