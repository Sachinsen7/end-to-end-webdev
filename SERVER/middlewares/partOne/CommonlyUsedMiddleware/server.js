const express = require("express")
const bodyParser = require("body-parser")

const app = express();

// app.use(bodyParser.json())
app.use(express.json())

app.use(loggerMiddleware)  // define before the functionsss


function loggerMiddleware(req, res, next){
    console.log("Method is" + req.method)
    console.log("Host is " + req.hostName)
    console.log(new Date())

    next()
}


app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});



app.listen(3002);