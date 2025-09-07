const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "ilovekanchan";

app.use(express.json());

const users = [];

//middleware

function auth(req, res, next) {
  const token = req.headers.token;
  const encodedInformation = jwt.verify(token, JWT_SECRET);

  if (encodedInformation.username) {
    const user = users.find((u) => u.username === encodedInformation.username);

    res.json({
      username: user.username,
    });
  }
  next();
}

function logger(req, res, next) {
  console.log("Method is " + req.method);
  console.log("Host is " + req.hostName);
  console.log(new Date());
  next();
}

app.post("/signup", logger, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)) {
    res.json({
      message: "you are already signed up",
    });
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "you are signed up",
  });

  console.log(users);
});

app.post("/signin", logger, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    res.json({
      message: "Credential Error",
    });
  } else {
    const token = jwt.sign(
      {
        username: username,
        password: password,
      },
      JWT_SECRET
    );

    res.json({
      message: token,
    });
  }

  console.log(users);
});

app.get("/me", logger, auth, (req, res) => {
  const { user } = req;

  res.json({
    username: user.username,
    password: user.password,
  });
});

app.listen(3000);
console.log("Listening on port 3000");
