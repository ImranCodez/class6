const express = require("express");
const { CreateShortURl } = require("../Controllers/ShortneController");
const { authmiddleware } = require("../middleware/authmiddleware");
const router = express.Router();

router.post("/create", authmiddleware, CreateShortURl);

module.exports = router;
