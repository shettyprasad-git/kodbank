const express = require('express');
const router = express.Router();
const BalanceController = require('./balance.controller');
const { verifyAccessToken } = require('../../middleware/auth.middleware');

router.get('/', verifyAccessToken, BalanceController.getBalance);

module.exports = router;
