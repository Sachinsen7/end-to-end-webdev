import { atom, selector } from "recoil";

export const counterAtom = atom({
  default: 0,
  key: "counter",
});

export const counterSelector = selector({
  key: "isEvenSelector",
  get: function ({ get }) {
    const currentCount = get(counterAtom); // it depends upon counterAtom ||
    const isEven = currentCount % 2 == 0;
    return isEven;
  },
});
