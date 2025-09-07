const express = require("express")

const app = express()


app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        answer : a + b
    })
})

//dynamic params query 

app.get("/sum/:firstArg/:secondArg", (req, res) => {
    const a = parseInt(req.params.firstArg)
    const b = parseInt(req.params.secondArg)

    res.json({
        answer : a + b
    })
})


//middlewares

let reqCount = 0;

function Increase(){
    reqCount = reqCount + 1;
    console.log("total no. of request", reqCount)
}
    


app.get("/sub", (req, res) => {
    Increase()
    const a = req.query.a
    const b = req.query.b

    res.json({
        answer : a - b
    })
})  


app.use("/divide/:a/:b", (req, res) => {
    Increase()
    const a = req.params.a
    const b = req.params.b

    res.json({
        answer: a / b
    })
})

app.listen(3000)