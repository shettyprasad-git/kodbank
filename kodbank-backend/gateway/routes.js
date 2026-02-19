const express = require('express');
const router = express.Router();

// Mount Auth Routes
router.use('/auth', require('../services/auth-service/auth.routes'));

router.use('/user', require('../services/user-service/user.routes'));
router.use('/balance', require('../services/balance-service/balance.routes'));

module.exports = router;
