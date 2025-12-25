const express = require("express");
const route = express.Router();
const Authroute = require("./auth");
const Shorturleroute = require("./ShortUrl");
const { Redirectlong } = require("../Controllers/ShortneController");

route.use("/auth", Authroute);
route.use("/url", Shorturleroute);

// .........dynamic route..........//
route.get("/:id",Redirectlong)

module.exports = route;
