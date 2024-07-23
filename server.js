const express = require('express')
//mongoose defined
const mongoose = require('mongoose')

require('dotenv').config()
const workoutRoutes=require('./routes/workouts')
//express app
const app =express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()

})

app.use('/api/workouts',workoutRoutes)

mongoose.connect("mongodb://localhost:27017/Learn_React")
 .then(()=>{app.listen(process.env.PORT,()=>{   
    console.log("connected & listening on ",process.env.PORT)
})
})
 .catch((error)=>{(console.log(error))})


