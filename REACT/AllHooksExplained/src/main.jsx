import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import App from "./components/UseContext/AnotherContext/App.jsx";
import UseState from "./components/UseState.jsx";
import UseEffect from "./components/UseEffect.jsx";
import UseContext from "./components/UseContext/UseContext.jsx";
import UseRef from "./components/UseRef/UseRef.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    {/* <UseContext />
    <App /> */}
    <UseRef />
  </StrictMode>
);
