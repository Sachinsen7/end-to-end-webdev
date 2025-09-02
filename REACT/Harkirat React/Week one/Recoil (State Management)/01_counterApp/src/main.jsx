import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Recoil from "./Recoil.jsx";
import Selectors from "./Selectors.jsx";
import Atomfamily from "./Recoil deep dive/Atomfamily.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Recoil /> */}
    {/* <Selectors /> */}
    <Atomfamily />
  </StrictMode>
);
