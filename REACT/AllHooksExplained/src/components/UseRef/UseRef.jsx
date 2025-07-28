import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("Sachin");
  //   const renderCount = useRef(0);

  //2nd use case

  //   const inputRef = useRef();
  const prevName = useRef();

  //3rd use case storing the previous value

  useEffect(() => {
    prevName.current = name;
  }, [name]);
  //   function focusBtn() {
  //     // console.log(inputRef.current);
  //     inputRef.current.focus();
  //   }
  //   useEffect(() => {
  //     renderCount.current = renderCount.current + 1;
  //   });
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>My Name is {name}</h1>
      {/* <div>I rendered it {renderCount.current} times</div> */}
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      {/* <button onClick={focusBtn}>focus</button> */}
    </div>
  );
}

export default UseRef;
