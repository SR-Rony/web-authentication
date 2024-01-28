const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
let app = express()
let homeRoute = require("./routes/home.route")
let userAuthRoute = require("./routes/userAuth.route")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// home route
app.use(homeRoute)
// user authentication route
app.use(userAuthRoute)


mongoose.connect('mongodb://127.0.0.1:27017/userAuthDB')
  .then(() => console.log('Connected!'))
    .catch((error)=>{
        console.log('server is not connect!');
    })


// error pages
app.use((req,res,next)=>{
    res.status(404).send("<h1>404 pages is not found</h1>")
})

// server error
app.use((error,req,res,next)=>{
    res.status(500).send("server is broke")
})

module.exports = app;