const { getHome } = require("../controller/home.controller");

const route = require("express").Router()

// home get route
route.get("/",getHome)

module.exports = route;