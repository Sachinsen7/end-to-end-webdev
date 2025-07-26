import { useState } from "react";

// function countInitial() {
//   console.log("Code runs Everytime");
//   return 4;
// }

//instead of doing this declare function inside the useState
function UseState() {
  //   const [count, setCount] = useState(countInitial());
  const [count, setCount] = useState(() => {
    console.log("Code runs only once when redners");
    return 4;
  });

  const [theme, setTheme] = useState("blue");

  //You can paas a function inside in useState like this watch the code on the top

  function Incremet() {
    setCount((prev) => prev + 1); // it stores the previous value then double it instead of doing that setCount(count + 1) setCount(count + 1)  do this <===
    // setCount((prev) => prev + 1);
    setTheme("red");
  }

  function Decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "200px",
        margin: "0 auto",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button onClick={Decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={Incremet}>+</button>
    </div>
  );
}

export default UseState;
