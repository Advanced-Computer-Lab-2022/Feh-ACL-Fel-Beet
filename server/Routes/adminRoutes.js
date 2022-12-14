const express = require('express');
const router = express.Router();
const { addAdmin, addCorporateTrainee, addInstructor } = require('../Controllers/adminController');

// ADD NEW ADMIN
router.post('/createAdmin', addAdmin);
router.post('/createInstructor', addInstructor);
router.post('/createCorporate', addCorporateTrainee);

module.exports = router;