const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const JWT_SECRET = "ilovekanchan"

const {UserModel, TodoModel} = require("./db")

app.use(express.json())
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://SachinDb:NyIykVZEgukzOTOv@cluster0.4xnsc.mongodb.net/todo-app-database-1")


app.post("/signup", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name

    await UserModel.create({
        username: username,
        password: password,
        name: name
    })

    res.json({
        msg: 'You are Signed up '
    })
})


app.post("/signin", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await UserModel.findOne({
        username: username,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Invalid Credientials"
        })
    }
})

app.post("/todo", auth, (req, res) => {
    const userId = req.userId
    const title = req.body.title
    const done = req.body.done

    TodoModel.create({
        title,
        done,
        userId

    })
    
    res.json({
        userId: userId
    })
})

app.get("/todos", auth, (req, res) => {
    const userId = req.userId
    const todos = TodoModel.find({
        userId: userId
    })
    
    res.json({
        userId: userId
    })
})


function auth(req, res, next){
    const token = req.headers.token

    const decodeData = jwt.verify(token, JWT_SECRET)

    if(decodeData){
       req.userId = decodeData.id  
       next()          
    } else {
        res.status(403).json({
            msg: "Incorrect  Credientials"
        })
    }
}

app.listen(3000)