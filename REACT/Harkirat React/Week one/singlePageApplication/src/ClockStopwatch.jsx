import React from "react";
import { useState, useRef } from "react";

function ClockStopwatch() {
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();

  function startClock() {
    let value = setInterval(() => {
      setCurrentCount((currentCount) => currentCount + 1);
    }, 1000);
    timer.current = value;
  }

  function stopBClock() {
    clearInterval(timer.current);
  }
  return (
    <div>
      {currentCount}
      <button onClick={startClock}>Start</button>
      <button onClick={stopBClock}>Stop</button>
    </div>
  );
}

export default ClockStopwatch;
