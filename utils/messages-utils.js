const Message = require("../models/message");

const getAllMessages = () => Message.find();

const getMessageById = (id) => Message.findById(id);

module.exports = { getAllMessages, getMessageById };
