import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <LightBulb />;
      </div>
    </>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <>
      <BulbState bulbOn={bulbOn} />
      <ToggleButton bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "BulbOn" : "BulbOff"}</div>;
}

function ToggleButton({ bulbOn, setBulbOn }) {
  function toggle() {
    setBulbOn(!bulbOn);
  }
  return (
    <>
      <div>
        <button onClick={toggle}>Toggle</button>
      </div>
    </>
  );
}

export default App;
