type User = {
  readonly _id: string; // readonly
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // optional
};

let myUser: User = {
  _id: "1234",
  name: "sachin",
  email: "sachin@in",
  isActive: false,
  creditCardDetails: 13123423423423,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    // mix above objects
    cvv: number;
  };

myUser.email = "karan@.com";
