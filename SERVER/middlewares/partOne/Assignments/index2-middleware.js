const express = require("express");

const app = express();

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      message: "Sorry You are not of age yet",
    });
  }
}

app.use(isOldEnoughMiddleware); // you can this

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      message: "you have successfully riden the ride1",
    });
  }
});

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      message: "you have successfully riden the ride1",
    });
  }
});

app.listen(3000);
