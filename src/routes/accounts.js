const express = require('express');
const router = express.Router();
const { getAccount } = require('../controller/accounts');

router.get('/:accountId', getAccount);

module.exports = router;