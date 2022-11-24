const express = require('express');
const router = express.Router();
const { add, login } = require('../Controllers/instructorController');

router.post('/add', add)
router.post('/login', login)

module.exports = router;