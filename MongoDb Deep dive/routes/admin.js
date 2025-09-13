const {Router } = require("express")

const adminMiddleware = require("../middlewares/admin")
const { Admin, Course } = require("../db/db")
const { json } = require("body-parser")

const router = Router()

router.post("/signup",  (req, res) => {
    const username = req.body.username
    const password = req.body.password


    Admin.create({
        username,
        password
    }).then(() => {
        res.json({
            message: "Admin created successfully"
        })
    }).catch((err) => {
        res.json({
            message: "error"
        })
    })

   
})

router.post("/course", adminMiddleware, async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse)

    res.json({
        message: "Course created successfully", courseId: newCourse._id
    })
})

router.get("/courses", adminMiddleware, async (req, res) => {
    const response = await Course.find({})

    res.json({
        courses: response
    })
})

module.exports = router