// generics

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val; // instead of this we write like this
}

function identity<Type>(arg: Type): Type {
  return arg; // it almost like any but... it automatic detect what valus are you passing
}

identity(3);
identity("sachin");

// how most people define

function identityTwo<T>(val: T): T {
  return val;
}

identityTwo(3);
identityTwo("karan");

interface Bottle {
  brand: string;
  capacity: number;
}

// identityTwo<Bottle>({});
