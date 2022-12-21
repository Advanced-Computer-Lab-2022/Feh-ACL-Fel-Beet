const express = require('express');
const router = express.Router();
const { addAdmin, addCorporateTrainee, addInstructor, setPromotion } = require('../Controllers/adminController');

// Add new admin
router.post('/createAdmin', addAdmin);

// Add new instructor
router.post('/createInstructor', addInstructor);

// Add new corporate trainee
router.post('/createCorporate', addCorporateTrainee);

// Set promotion for courses
router.post('/setPromotion', setPromotion);

module.exports = router;