const express = require("express")
const app = express()

app.use(express.json())

const users = [
    {
        name: "naman",
        kidneys: [{
            healthy: false
        }]
    }
]



app.get("/", (req, res) => {
    const namanKidneys = users[0].kidneys
    let numberOfKidneys = namanKidneys.length
    let numberOfHealthyKidneys = 0

    for(let i = 0; i < namanKidneys.length; i++){
        if(namanKidneys[i].healthy) {
            numberOfHealthyKidneys++
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", (req, res) => {
    // another input type body

    const isHealthy = req.body.isHealthy

    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done!"
    })
})


app.put("/", (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true
    }

    res.json({
        msg: "Update Done"
    })
})



app.delete("/", (req, res) => {

    if(isThereAtleatOneUnHealthyKidney()){
        const newArray = []

        for (let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy){
                newArray.push({
                    healthy: true
                })
            }
            
        }
        users[0].kidneys = newArray;
        res.json({
            msg: "done"
        })
    } else res.json({
        msg: "you have no bad kidneys"
    })
    
})


function isThereAtleatOneUnHealthyKidney(){
    let atleastOne = false

    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy){
            atleastOne = true
        }
        
    }

    return atleastOne
}




app.listen(3000)
