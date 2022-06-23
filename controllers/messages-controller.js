const { getAllMessages, getMessageById } = require("../utils/messages-utils");

const getMessages = (req, res) => {
	getAllMessages().exec((err, messages) => {
		if (err) {
			res.status(500);
			return res.json({ error: err.message });
		} else {
			res.status(200);
			res.send(messages);
		}
	});
};

const getMessage = (req, res) => {
	// req.params.id is the req to get the individual message
	getMessageById(req.params.id).exec((err, message) => {
		if (err) {
			res.status(500);
			return res.json({ error: err.message });
		} else {
			res.status(200);
			res.send(message);
		}
	});
};

module.exports = { getMessages, getMessage };
