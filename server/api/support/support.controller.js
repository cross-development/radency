async function handleErrorReport(req, res) {
	const { error } = req.body;

	console.log('message', error);
}

module.exports = { handleErrorReport };
