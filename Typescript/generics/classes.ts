// using type parameters in generic constraints

function identityOnee(val: boolean | number): boolean | number {
  return val;
} // we dont want to use this syntax so we write like this

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, {});
// anotherFunction(3, "6");

// using class types in generics

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
