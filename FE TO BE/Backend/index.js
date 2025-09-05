const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "ilovekanchan";

app.use(express.json());

const users = [];

//middleware

function auth(req, res, next) {
  // Get the token from the request headers
  const token = req.headers.token;

   
  if (!token) {
    // Send a response to the client that the token is missing
    return res.json({
      message: "Token is missing!",
    });
  }

  // Use a try-catch block to handle the error
  try {
    // Verify the token using the jwt.verify() function
    const decodedData = jwt.verify(token, JWT_SECRET);

    // Set the username in the request object
    req.username = decodedData.username;

    // Call the next middleware function
    next();
  } catch (error) {
    // Send a response to the client that the token is invalid
    return res.json({
      message: "Invalid token!",
    });
  }
}
function logger(req, res, next) {
  console.log("Method is " + req.method);
  console.log("Host is " + req.hostname);
  console.log(new Date());
  next();
}

// localhost:3000
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); //current directory
});

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
      token: token,
    });
  }

  console.log(users);
});

app.get("/me", logger, auth, (req, res) => {
  const foundUser = users.find((user) => user.username === req.username);

  if (!foundUser) {
    return res.json({
      message: "user not found",
    });
  }

  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

app.listen(3000);
console.log("Listening on port 3000");
