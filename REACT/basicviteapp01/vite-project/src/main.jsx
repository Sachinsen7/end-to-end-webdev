import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

function MyApp() {
  return (
    <div>
      <h1>This is cool bro</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="http://goggle.com" target="_blank">
    Visit Goggle
  </a>
);

const areactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
);

createRoot(document.getElementById("root")).render(areactElement);
