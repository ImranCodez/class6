const express = require("express");
const { singup, singin } = require("../Controllers/AuthController");
const route = express.Router();
// .Resistration part..........//
route.post("/Singup",singup)
// ........Login part......//
route.post("/singIn",singin)








module.exports = route;