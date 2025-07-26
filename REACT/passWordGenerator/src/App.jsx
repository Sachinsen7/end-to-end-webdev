import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [numberAllowed, charAllowed, length]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const passWordRef = useRef(null);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passWordRef.current?.select();
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-black ">
        <div className="bg-black p-6 rounded-lg">
          <div className="">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passWordRef}
              className="w-full p-2 rounded-lg bg-amber-100 text-amber-800 focus:outline-none px-3 focus:ring-2 focus:ring-amber-400"
            />

            <button onClick={copyPassword}>Copy the Password</button>
          </div>
          <div>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <p>{length}</p>
            <label htmlFor="Number">Number</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              value={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="Number"
            />
            <label htmlFor="Character">Character</label>
            <input
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              type="checkbox"
              value={charAllowed}
              className="Character"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
