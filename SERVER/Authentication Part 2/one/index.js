const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "ilovekanchan";

app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
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

app.post("/signin", (req, res) => {
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
      },
      JWT_SECRET
    );

    res.json({
      message: token,
    });
  }

  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const encodedInformation = jwt.verify(token, JWT_SECRET);

  jwt.decode(token, JWT_SECRET);

  if (encodedInformation.username) {
    const user = users.find((u) => u.username === encodedInformation.username);

    res.json({
      username: user.username,
    });
  }
});

app.listen(3000);
