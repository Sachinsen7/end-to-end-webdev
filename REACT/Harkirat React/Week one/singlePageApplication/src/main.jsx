import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Routing from "./Routing.jsx";
import UsRef from "./UsRef.jsx";
import ClockStopwatch from "./ClockStopwatch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Routing /> */}
    {/* <UsRef /> */}
    <ClockStopwatch />
  </StrictMode>
);
