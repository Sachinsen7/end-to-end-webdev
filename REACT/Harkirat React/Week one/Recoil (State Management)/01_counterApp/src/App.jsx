import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CurrentCount count={count} />
      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />
    </>
  );
}

function CurrentCount({ count }) {
  return (
    <>
      <div>{count}</div>
    </>
  );
}

function Increase({ setCount }) {
  function Increase() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <button onClick={Increase}>Increase</button>
    </>
  );
}

function Decrease({ setCount }) {
  function Decrease() {
    setCount((count) => count - 1);
  }

  return (
    <>
      <button onClick={Decrease}>Decrease</button>
    </>
  );
}

export default App;
