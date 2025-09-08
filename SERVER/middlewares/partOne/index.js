const express = require("express");

const app = express();

// app.get("/sum", (req, res) => {
//     const a = parseInt(req.query.a)
//     const b = parseInt(req.query.b)

//     res.json({
//         answer : a + b
//     })
// })

// //dynamic params query

// app.get("/sum/:firstArg/:secondArg", (req, res) => {
//     const a = parseInt(req.params.firstArg)
//     const b = parseInt(req.params.secondArg)

//     res.json({
//         answer : a + b
//     })
// })

//middlewares

let reqCount = 0;

function Increase(req, res, next) {
  reqCount = reqCount + 1;
  // if(req.headers.cookie === "goggle"){
  //     next()
  // } else {
  //     console.log("total no. of request", reqCount)  // it can stop the requests
  //     res.json({
  //         message: "I ended the request early"
  //     })
  // }

  res.json({
    message: "I ended the request early",
  });
}

// app.get("/sub", (req, res) => {
//     Increase()
//     const a = req.query.a
//     const b = req.query.b

//     res.json({
//         answer : a - b
//     })
// })

function realSumHandler(req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    answer: a - b,
  });
}

// you can do this too
app.use(Increase); // this is middleware

app.get("/sum", realSumHandler); // shoter wayyy
app.get("/multiply", realSumHandler); // shoter wayyy
app.get("/divide", realSumHandler); // shoter wayyy

app.get("/sum", Increase, realSumHandler); // shoter wayyy
app.get("/multiply", Increase, realSumHandler); // shoter wayyy
app.get("/divide", Increase, realSumHandler); // shoter wayyy

app.get("/sub", Increase, (req, res) => {
  Increase();
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    answer: a - b,
  });
});

app.use("/divide/:a/:b", (req, res) => {
  Increase();
  const a = req.params.a;
  const b = req.params.b;

  res.json({
    answer: a / b,
  });
});

app.listen(3000);
