let score: number | string = 100;
score = "100";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let sachin: User | Admin = { name: "Sachin", id: 443 };

sachin = { username: "se", id: 443 };

// narrowing down

function getDid(id: number | string) {
  // making api calls is

  //   id.toLowerCase();

  if (typeof id === "string") {
    id.toLowerCase();
  }
  console.log(`Db id id ${id}`);
}

getDid(3);
getDid("4");

// array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];

const data3: (string | number)[] = [1, "2", 3, "4"];

const data4: (string | number | boolean)[] = [1, "2", 3, "4", true];

let pi: 3.14 = 3.14;

// let seatAllotment = "aisle" | "middle" | "window";

// seatAllotment = "aisle";
