interface NewUser {
  readonly dbId: number;
  email: string;
  userId: number;
  goggleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

// it is loose class

// interface VS type

interface NewUser {
  githubToken: string;
}

// reopening interface

interface Admins extends NewUser {
  role: "admin" | "ta" | "learner";
}

const sachinn: NewUser = {
  dbId: 22,
  email: "sachinsen@gmail.com",
  userId: 113,
  githubToken: "123",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Sachinsen", off: 10) => {
    return 10;
  },
};

sachinn.email = "karan@gmail.com";
