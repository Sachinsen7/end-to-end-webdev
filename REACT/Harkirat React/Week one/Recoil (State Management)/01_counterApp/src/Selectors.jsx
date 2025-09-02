import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, counterSelector } from "./store/atom/Counter";

function Selectors() {
  return (
    <RecoilRoot>
      <Counter />
      <Buttons />
      <IsEven />
    </RecoilRoot>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((c) => c + 2);
  }

  function decrese() {
    setCount((c) => c - 1);
  }
  return (
    <div>
      <button type="button" onClick={increase}>
        Increase
      </button>
      <button type="button" onClick={decrese}>
        Decrease
      </button>
    </div>
  );
}

function IsEven() {
  const even = useRecoilValue(counterSelector);

  return <div>{even ? "Even" : "odd"}</div>;
}

export default Selectors;
