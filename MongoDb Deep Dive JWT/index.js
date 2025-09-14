const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")


const userRouter = require("./routes/user")
const adminRouter = require("./routes/admin")

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})




