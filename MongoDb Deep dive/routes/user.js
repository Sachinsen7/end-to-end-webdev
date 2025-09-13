const { Router } = require("express")

const userMiddleware = require("../middlewares/user")
const { User, Course } = require("../db/db")

const router = Router()

router.post("/signup", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    
    User.create({
        username,
        password
    })

    res.json({
        message: "user created successfully"
    })
})

router.get("/courses", async (req, res) => {
    const response = await Course.find({})

    res.json({
        courses: response
    })
})

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    const courseId = req.params.courseId
    const username = req.headers.username


    await User.updateOne({
        username: username
    }, {
        "$push": {
            puchasedCourses: courseId
        }
    })

    res.json({
        message: "Puchase Completed"
    })
})

router.get("/purchasedCourse", userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    })
    
    console.log(user.puchasedCourses)

    const course = await Course.find({
        _id: {
            "$in": user.puchasedCourses
        }
    })


    res.json({
        courses: course
    })
})


module.exports = router

