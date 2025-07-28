import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hiii</h1>
        <Card username="sachin" email="sachin@123" />
        <Card image={viteLogo} />
        <Card />
        <Profile />
        <Avatar />
      </div>
      <img src="/vite-logo.svg" alt="" />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
