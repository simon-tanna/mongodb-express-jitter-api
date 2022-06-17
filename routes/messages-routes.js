const { getMessages } = require("../controllers/messages-controller");
const express = require("express");
const { get } = require("mongoose");
const router = express.Router();

router.get("/messages", getMessages);

module.exports = router;
