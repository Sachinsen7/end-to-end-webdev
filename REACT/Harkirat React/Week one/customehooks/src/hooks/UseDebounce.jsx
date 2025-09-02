import React, { useEffect, useState } from "react";
import { useRef } from "react";

function UseDebounce(originalFn) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, 200);
  };

  return fn;
}

export function useDebounceMain(value, delay) {
  const [debounceValue, setDebouncevalue] = useState(value);

  useEffect(() => {
    const handler = setInterval(() => {
      setDebouncevalue(value);
    }, delay);

    return () => {
      clearInterval(handler);
    };
  }, [value, delay]);

  return debounceValue;
}

export default UseDebounce;
