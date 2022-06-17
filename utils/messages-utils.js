const Message = require("../models/message");

const getAllMessages = () => Message.find();

module.exports = { getAllMessages };
