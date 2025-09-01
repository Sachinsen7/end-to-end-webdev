import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PropDrilling from "./PropDrilling.jsx";
import UseContext from "./UseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <PropDrilling /> */}
    <UseContext />
  </StrictMode>
);
