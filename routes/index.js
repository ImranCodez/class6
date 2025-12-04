const express = require("express");
const route = express.Router;
const Authroute = require("./auth");
const Shorturleroute= require("./ShortUrl")

route.use("/auth", Authroute);
route.use("/url", Shorturleroute);


module.exports = route;
