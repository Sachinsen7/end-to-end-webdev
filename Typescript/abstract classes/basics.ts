abstract class takeNewPhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //some complex calculations
    return 8;
  }
}

// const sachinsen = new takeNewPhoto("test", "Test"); // in abstract class you cannot create object from it

class Facebook extends takeNewPhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("sepia");
  }
}

// and you have to like this in abstract class the inheritance class can create object from it

const karannes = new Facebook("test", "test", 3); // this will work

karannes.getSepia();
