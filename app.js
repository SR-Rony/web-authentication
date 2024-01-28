const express = require("express")
let app = express()
let homeRoute = require("./routes/home.route")

// home route
app.use("/",homeRoute)

// error pages
app.use((req,res,next)=>{
    res.status(404).send("<h1>404 pages is not found</h1>")
})

// server error
app.use((error,req,res,next)=>{
    res.status(500).send("server is broke")
})

module.exports = app;