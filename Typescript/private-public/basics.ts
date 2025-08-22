// classes

class SecUser {
  public email: string; // you can access anywhere
  name: string;
  private city: string = ""; //  you cannot use only accessible within the class
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const karan = new SecUser("se", "sachin");

// professional people write like this

class thirdUser {
  readonly city: string = "delhi";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {
    this.email = email;
    this.name = name;
    this.userId = userId;
  }
}
