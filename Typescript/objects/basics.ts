const User = {
  name: "Sachin",
  email: "sachinsen@sen",
  isActive: false,
};

function createUser({ name: string, isActive: boolean }) {}

// createUser({ name: "sachin", isActive: true });

let users = { name: "sachin", isActive: false, email: "sachin@sen" };

createUser(users);

// weired syntax

function createCourse(): { name: string; price: number } {
  return { name: "nextjs", price: 388 };
}

//********* */ Type alias

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

type MyString = string; ///

function createUserr(user: User) {
  return {};
}

createUserr({ name: "", email: "", isActive: true });

export {};
