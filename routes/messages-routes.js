const { getMessages, getMessage } = require("../controllers/messages-controller");
const express = require("express");
const { get } = require("mongoose");
const router = express.Router();

router.get("/messages", getMessages);

router.get("/messages/:id", getMessage);

module.exports = router;
