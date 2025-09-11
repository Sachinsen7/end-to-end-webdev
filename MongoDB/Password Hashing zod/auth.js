const jwt = require("jsonwebtoken")
const JWT_SECRET = "ilovekanchan"

function auth(req, res, next){
    const token = req.headers.authorization

    const decodeData = jwt.verify(token, JWT_SECRET)

    if(decodeData){
        req.userId = decodeData.id
        next()
    
    } else {
        res.status(403).json({
            message: "Invalid Credientials"
        })            
    }
}


module.exports = {
    auth,
    JWT_SECRET
}