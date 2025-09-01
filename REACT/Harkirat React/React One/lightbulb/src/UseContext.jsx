import { useState, createContext, useContext } from "react";
import "./App.css";

const bulbContext = createContext();

export function BulbProvider({ children }) {
  //this is a great do that you can hide it somewhere and use it privately it great when you use it in another file
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <bulbContext.Provider
      value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      {children}
    </bulbContext.Provider>
  );
}

function UseContext() {
  return (
    <BulbProvider>
      <LightBulb />;
    </BulbProvider>
  );
}

function LightBulb() {
  return (
    <>
      <BulbState />
      <ToggleButton />
    </>
  );
}

function BulbState() {
  const { bulbOn, setBulbOn } = useContext(bulbContext);
  return <div>{bulbOn ? "BulbOn" : "BulbOff"}</div>;
}

function ToggleButton() {
  const { bulbOn, setBulbOn } = useContext(bulbContext);
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

export default UseContext;
