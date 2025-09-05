const express = require("express")
const jwt = require("jsonwebtoken")
const JWTPassword = "secret"
const app = express()
const zod = require("zod")


const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)


const signJwt = (username, password) => {

    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)


    if(!usernameResponse.success || !passwordResponse.success){
        return null
    }
    const signature = jwt.sign({
        username
    }, JWTPassword)

    return signature
}

const verifyJwt = (token) => {
    let ans = true
    try {
        const verified = jwt.verify(token, JWTPassword)
    } catch (error) {
        ans = false
        console.error(error)
    }
    return ans
}

const decodeJwt = (token) => {
    const decoded = jwt.decode(token)
    if(decoded){
        return true
    } else {
        return false
    }
}

const ans = signJwt("hsagdhsgd@gmail.com", "123456")
console.log(ans)
// console.log(decodeJwt("fgheyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30ghjsd"))
console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhzYWdkaHNnZEBnbWFpbC5jb20iLCJpYXQiOjE3NTA3OTE2NDh9.h2RCDxuumfYPwleThyJSEd8VgM0W2_IhVQXHEPokHe8"))


app.listen(3000)
