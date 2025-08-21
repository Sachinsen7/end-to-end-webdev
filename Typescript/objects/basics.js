"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Sachin",
    email: "sachinsen@sen",
    isActive: false,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
// createUser({ name: "sachin", isActive: true });
var users = { name: "sachin", isActive: false, email: "sachin@sen" };
createUser(users);
// weired syntax
function createCourse() {
    return { name: "nextjs", price: 388 };
}
