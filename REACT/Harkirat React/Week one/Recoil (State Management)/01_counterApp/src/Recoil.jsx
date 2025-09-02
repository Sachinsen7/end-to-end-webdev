import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atom/Counter.js";

function Recoil() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  //   const [count, setCount] = useState(0);

  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  // Using Recoil's `useRecoilValue` hook to read the value of `counterAtom`
  const count = useRecoilValue(counterAtom);
  return (
    <>
      {count} {/* Display the current value of count */}
    </>
  );
}
function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function handleIncrease() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={handleIncrease}>Increase</button>
    </>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function Decrease() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <button onClick={Decrease}>Decrease</button>
    </>
  );
}

export default Recoil;
