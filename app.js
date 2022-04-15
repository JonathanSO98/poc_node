const express = require('express');
const bodyParse = require('body-parser');
const accountRoutes = require('./src/routes/accounts');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
app.use(cors())
app.use(bodyParse.json());
app.use('/accounts', accountRoutes);


module.exports.app = app;

module.exports.handler = serverless(app);
