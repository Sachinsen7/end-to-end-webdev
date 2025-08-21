var score = 100;
score = "100";
var sachin = { name: "Sachin", id: 443 };
sachin = { username: "se", id: 443 };
// narrowing down
function getDid(id) {
    // making api calls is
    //   id.toLowerCase();
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("Db id id ".concat(id));
}
getDid(3);
getDid("4");
// array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = [1, "2", 3, "4"];
var data4 = [1, "2", 3, "4", true];
var pi = 3.14;
// let seatAllotment = "aisle" | "middle" | "window";
// seatAllotment = "aisle";
