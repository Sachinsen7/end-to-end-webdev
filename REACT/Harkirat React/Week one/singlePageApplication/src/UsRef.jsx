import React from "react";
import { useRef } from "react";

function UsRef() {
  const ref = useRef();

  function focusOnInput() {
    ref.current.focus();
  }

  return (
    <div>
      <label htmlFor="">Sign up</label>
      <input ref={ref} type="text" />
      <input type="text" />
      <button onClick={focusOnInput}>Sign up</button>
    </div>
  );
}

export default UsRef;
