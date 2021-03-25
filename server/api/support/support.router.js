//Core Express
const { Router } = require('express');
//Controllers
const { handleErrorReport } = require('./support.controller');
//Helpers
const tryCatchHandler = require('../../helpers/tryCatchHandler');

const supportRouter = Router();

// @ POST /api/support
supportRouter.post('/', tryCatchHandler(handleErrorReport));

module.exports = supportRouter;
