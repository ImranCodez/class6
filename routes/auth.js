const express = require("express");
const { Singup, SingIn } = require("../Controllers/AuthController");
const route = express.Router;
// .Resistration part..........//
route.get("/Singup",Singup)
// ........Login part......//
route.post("/singIn",SingIn)








module.exports = route;