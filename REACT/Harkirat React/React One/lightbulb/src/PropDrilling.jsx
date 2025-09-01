import { useState } from "react";
import "./App.css";

function PropDrilling() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <>
      <div>
        <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn} />;
      </div>
    </>
  );
}

function LightBulb({ bulbOn, setBulbOn }) {
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

export default PropDrilling;
