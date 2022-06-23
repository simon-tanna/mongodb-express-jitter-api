const Message = require("../models/message");

const getAllMessages = () => Message.find();

const getMessageById = (id) => Message.findById(id);

const postNewMessage = (body) => {
	let date = Date.now();
	body.posted = date;
	return Message(body);
};

module.exports = { getAllMessages, getMessageById, postNewMessage };
