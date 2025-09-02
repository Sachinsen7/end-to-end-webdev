import { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/UseFectch.jsx";
import UsePrev from "./hooks/UsePrev.jsx";
import UseDebounce, { useDebounceMain } from "./hooks/UseDebounce.jsx";

//custom hooks

function useCounter() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }

  return {
    count: count,
    Increase: Increase,
  };
}

function App() {
  return (
    <>
      {/* <Counter />
      <Counter />
      <Counter /> */}
      {/* <UseFectch /> */}
      {/* <GetTitle /> */}
      {/* <UseFetchh /> */}
      {/* <Useprevv /> */}
      <Usedeouncee />
      <DebounceApp />
    </>
  );
}

// getPost hook
// function GetTitle() {
//   const posTitle = UseFectch();

//   return <div>{posTitle}</div>;
// }

//useFetch hooks

function UseFetchh() {
  const [currentData, setCurrentData] = useState(1);

  const { finalData, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentData,
    10
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button onClick={() => setCurrentData(1)}>1</button>
      <button onClick={() => setCurrentData(2)}>2</button>
      <button onClick={() => setCurrentData(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  );
}

// usePrev

function Useprevv() {
  const [state, setState] = useState(0);
  const prev = UsePrev(state);

  return (
    <>
      <div>{state}</div>
      <button type="button" onClick={() => setState((count) => count + 1)}>
        Click
      </button>
      <p>the prevous value was{prev}</p>
    </>
  );
}

//useDebounce

function Usedeouncee() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  const debounce = UseDebounce(sendDataToBackend);

  return <input type="text" onChange={debounce} />;
}

//useDebaounceMain

function DebounceApp() {
  const [inputVal, setinputval] = useState("");
  const debounceValue = useDebounceMain(inputVal, 200);

  function change(e) {
    setinputval(e.target.value);
  }

  useEffect(() => {
    console.log("Expensive operation");
  }, [debounceValue]);

  return (
    <>
      <input type="text" onChange={change} />
    </>
  );
}

function Counter() {
  const { count, Increase } = useCounter();

  return (
    <>
      <div>
        hi there!
        <button onClick={Increase}>{count}</button>
      </div>
    </>
  );
}

export default App;
