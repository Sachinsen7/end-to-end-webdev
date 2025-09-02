import React, { useEffect, useRef } from "react";

function UsePrev(value) {
  const ref = useRef();

  console.log("new value");

  useEffect(() => {
    console.log("update the value");
    ref.current = value;
  }, [value]);

  console.log("prev value" + ref.current);
  return ref.current;
}

export default UsePrev;
