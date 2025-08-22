// suppose we are buliding an app and it requires camera and want to build that kind of scenario ios develpment into typescript

interface takePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createstory(): void;
}

class Instagram implements takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements takePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string // you can add more properties but not less than that is initialzed in interface
  ) {}

  createstory(): void {
    console.log("story is created ");
  }
}
