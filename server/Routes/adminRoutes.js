const express = require('express');
const router = express.Router();
const { add } = require('../Controllers/adminController');

// ADD NEW ADMIN
router.post('/createAdmin', add);

module.exports = router;