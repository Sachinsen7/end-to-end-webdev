const express = require("express");

const app = express();
app.use(express.json());

let users = [];

/*
{username: "sachin", password="asdfahjfg", token: asgdhjasgdugashjkdgahjskg}

*/

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
    if (u.username === username && u.password === password) {
      return true;
    } else {
      return false;
    }
  });

  if (fOundUser) {
    const token = generatetoken();
    fOundUser.token = token;
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
  let user = users.find((u) => u.token === token);
  if (user) {
    res.json({
      username: user.username,
      password: user.password,
    });
  } else {
    res.json({
      message: "token invalid",
    });
  }
});

app.listen(3000);
