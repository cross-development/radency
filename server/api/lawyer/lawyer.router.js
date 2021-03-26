//Core Express
const { Router } = require('express');
//Controllers
const { handleCSVFile } = require('./lawyer.controller');
//Helpers
const tryCatchHandler = require('../../helpers/tryCatchHandler');

const lawyerRouter = Router();

// @ POST /api/lawyer
lawyerRouter.post('/', tryCatchHandler(handleCSVFile));

module.exports = lawyerRouter;
