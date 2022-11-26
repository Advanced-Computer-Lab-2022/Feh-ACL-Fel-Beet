const express = require('express');
const router = express.Router();
const { add, login,rateInstructor } = require('../Controllers/instructorController');

router.post('/add', add)
router.post('/login', login)
router.post('/rate', rateInstructor)
module.exports = router;