function getSearchPorduct<T>(products: T[]): T {
  // do some databases operations
  const myIndex = 3;
  return products[myIndex];
}

// arrow functions

const getMoreSearchProduct = <T>(products: T[]): T => {
  const myIndex = 5;
  return products[myIndex];
};

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 5;
  return products[myIndex]; //comma
};
