class fifthhUser {
  protected _courseCount = 1; // read this line
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

  //private methods

  private deleteToken() {
    console.log("token deleted");
  }

  // example
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  // course get and set
  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    // it doesnt reuire types nor return type
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1 ");
    }
  }
}

class SubUser extends fifthhUser {
  // it doesnt aqquire private properties above

  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4; // not possible you have to add protected (until)
  }
}
