const express = require('express');
const router = express.Router();
const { addAdmin, addCorporateTrainee, addInstructor, setPromotion, findUser } = require('../Controllers/adminController');

// Add new admin
router.post('/createAdmin', addAdmin);

// Add new instructor
router.post('/createInstructor', addInstructor);

// Add new corporate trainee
router.post('/createCorporate', addCorporateTrainee);

// Set promotion for courses
router.post('/setPromotion', setPromotion);

// Find User
router.post('/findUser', findUser);

module.exports = router;