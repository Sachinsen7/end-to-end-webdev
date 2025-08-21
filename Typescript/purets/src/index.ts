// classes

class User {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const sachin = new User("se", "sachin");
sachin.city = "Mumbai";
