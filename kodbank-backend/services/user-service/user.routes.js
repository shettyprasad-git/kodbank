const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');
const { verifyAccessToken } = require('../../middleware/auth.middleware');

router.get('/dashboard', verifyAccessToken, UserController.getDashboard);

module.exports = router;
