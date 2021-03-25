// Core Express
const express = require('express');
//Routes
const lawyerRouter = require('./api/lawyer/lawyer.router');
const supportRouter = require('./api/support/support.router');
//Middleware
require('dotenv').config();
const cors = require('cors');

function start() {
	const app = initServer();

	initMiddleware(app);
	initRouter(app);
	startListening(app);
}

function initServer() {
	return express();
}

function initMiddleware(app) {
	app.use(express.json());
	app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
}

function initRouter(app) {
	app.use('/api/lawyer', lawyerRouter);
	app.use('/api/support', supportRouter);
}

function startListening(app) {
	const PORT = process.env.PORT || 8080;

	app.listen(PORT, () => console.log('Server started listening on port', PORT));
}

start();
