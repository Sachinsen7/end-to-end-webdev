let computer = { name: "Asus" };
let Asus = {
  series: "Vivobook",
  __proto__: computer,
};

console.log(`Asus`, Asus.__proto__);

let genericCar = { wheels: 4 };
let tesla = {
  feature: "self driving",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla`, tesla.wheels);
console.log(`tesla`, genericCar.feature);

console.log(`tesla`, Object.getPrototypeOf(tesla));


let newObject = {
  name: "Sachin",
  role: "Software Engineer",
  company: "Amazon",
};

let proto = {
  name: "Shubham",
  role: "Software Engineer",
  company: "Amazon",
  __proto__: newObject,
};

console.log(proto);
console.log(proto.__proto__)

Object.setPrototypeOf(proto, newObject);

console.log(proto.company)
console.log(newObject.role)