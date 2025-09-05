const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "randomsachinilovekanchan";

const app = express();

app.use(express.json());

/*
{username: "sachin", password="asdfahjfg", token: asgdhjasgdugashjkdgahjskg}

*/

let users = [];

function generatetoken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let token = "";

  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)) {
    res.json({
      message: "You are already signudup",
    });
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "you are signed in",
  });

  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const fOundUser = users.find((u) => {
    if (u.username === username) {
      return true;
    } else {
      return false;
    }
  });

  if (fOundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    res.json({
      message: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid User",
    });
  }

  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, JWT_SECRET);

  const username = decodedInformation.username;

  let user = users.find((u) => u.username === username);
  if (user) {
    res.json({
      username: user.username,
    });
  } else {
    res.json({
      message: "token invalid",
    });
  }
});

app.listen(3000);
