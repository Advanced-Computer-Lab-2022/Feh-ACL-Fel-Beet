const express = require('express');
const router = express.Router();
const { addNewInstructor } = require('../controllers/instructorController');

router.post('/addInstructor', addNewInstructor)

module.exports = router;