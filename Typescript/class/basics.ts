// classes

class Usern {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const sachinnn = new Usern("se", "sachin");
sachinnn.city = "Mumbai";
