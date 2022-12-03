const express = require('express');
const router = express.Router();
const { add, login,rateInstructor, editInstructor } = require('../Controllers/instructorController');

router.post('/add', add)
router.post('/login', login)
router.post('/rate', rateInstructor)
router.patch('/edit/:id', editInstructor)


module.exports = router;