const { getRegister,postLogin,postRegister } = require("../controller/userAuth.controller")

const route  = require("express").Router()

// get register route
route.get("/register",getRegister)
// post register router
route.post("/register",postRegister)

// get login route
route.post("/login",postLogin)

module.exports = route