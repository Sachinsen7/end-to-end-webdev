import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [check, setCheck] = useState(true);
  const [name, setName] = useState("sachin");
  const [age, setAge] = useState(21);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChangeCheck = (e) => {
    setCheck(e.target.checked);
  };
  const addValue = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevCounter) => prevCounter + 1);
  };

  const deleteValue = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        {/* Number */}
        <h1>{count}</h1>
        <button onClick={addValue}>Increment</button>
        <button onClick={deleteValue}>Decrement</button>

        {/* Text field */}

        <input type="text" value={text} onChange={handleChange} />
        <p>your value is {text}</p>

        {/* Checkbox */}
        <label htmlFor="">
          <input type="checkbox" value={check} onChange={handleChangeCheck} />
        </label>
        <p>{check ? "You liked" : "You did not liked"}</p>

        {/* Two variables */}

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={() => setAge(age + 1)}>Increment</button>

        <p>
          your name is {name} and age is {age}
        </p>
      </div>
    </>
  );
}

export default App;
