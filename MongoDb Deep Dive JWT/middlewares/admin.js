const { Admin } = require("../db/db")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")


function adminMiddleware(req, res, next){
    const token = req.headers.authorization;
    const word = token.split(" ")

    const jwtToken = word[1]

    const decodeData = jwt.verify(jwtToken, JWT_SECRET)

    if(decodeData.username){
        next()
    } else {
        res.json({
            message: "You are not authenticated"
        })
    }
}

module.exports = adminMiddleware