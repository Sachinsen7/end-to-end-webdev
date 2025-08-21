"use strict";
// classes
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    email;
    name;
    city = "";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const sachin = new User("se", "sachin");
sachin.city = "Mumbai";
//# sourceMappingURL=index.js.map