const express = require("express")
const app = express()
const { UserModel, TodoModel } = require("./db")
const { z } = require("zod")
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const { auth, JWT_SECRET} = require("./auth")

app.use(express.json())
dotenv.config()

mongoose.connect("mongodb+srv://SachinDb:NyIykVZEgukzOTOv@cluster0.4xnsc.mongodb.net/todo-app-database-2")

console.log("Success")


app.post("/signup", async (req, res) => {
    const reqBody = z.object({
        username: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(100),
        name: z.string().min(3).max(100)
    })

    const parseDataWithSuccess = reqBody.safeParse(req.body)

    if(!parseDataWithSuccess.success){
        return res.json({
            message: "Incorrect Data Format",
            error:  parseDataWithSuccess.error
        })
       
    }


    const username = req.body.username
    const password = req.body.password
    const name = req.body.name


    // hashing the password with bycrypt
    const hashingPassword = await bcrypt.hash(password, 5)


    // error handling creating a new user

    try {
        await UserModel.create({
            username: username,
            password: hashingPassword,
            name: name
        })

    } catch (error) {
        //if the user is already exist then 

        res.json({
            message: "User is already exist!"
        })
        
    }

    res.json({
        message: "You are signed up"
    })
})


app.post("/signin", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const findUser = await UserModel.findOne({
        username: username
    })

    if(!findUser){
        return res.json({
            message: "Invalid Credientials"
        })
    }

    // compared the password with the hash password

    const comparePasswordMatch = bcrypt.compare(password, findUser.password)


    if(comparePasswordMatch){
        const token = jwt.sign({
            id: findUser._id.toString()
        }, JWT_SECRET)


        res.json({
            token: token,
            message: "You are signed in"
        })

    } else {
        res.status(403).json({
            message: "Invalid Credientials"
        })
    }   

})

app.post('/todo', auth, async (req, res) => {
    const userId = req.userId


    const title = req.body.title
    const done = req.body.done


    await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        message: "Todo Created"
    })
})

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId

    const todos = await TodoModel.find({
        userId
    })

    res.json({
        todos
    })

})


app.listen(3000)