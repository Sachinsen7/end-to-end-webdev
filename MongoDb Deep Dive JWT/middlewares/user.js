const { User } = require("../db/db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if(!token) {
    res.json({
      message: "Token is missing"
    })
  }

  try {
    const word = token.split(" ");

    const jwtToken = word[1];

    const decodeData = jwt.verify(jwtToken, JWT_SECRET)

    if (decodeData.username) {
      req.username = decodeData.username;
      next();
    } else {
      res.status(403).json({
        message: "You are not authenticated",
      });
    }
  } catch (error) {
    res.status(403).json({
      message: "Invalid Token",
    });
  }
  
}

module.exports = userMiddleware;
