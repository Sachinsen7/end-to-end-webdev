import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { memo } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);
  }, []);

  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

const CurrentCount = memo(function () {
  return (
    <>
      <div>1</div>
    </>
  );
});

const Increase = memo(function () {
  return (
    <>
      <button>Increase</button>
    </>
  );
});

const Decrease = memo(function () {
  function decrease() {}

  return (
    <>
      <button onClick={decrease}>Decrease</button>
    </>
  );
});

export default App;
