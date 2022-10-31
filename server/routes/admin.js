const express = require('express');
const router = express.Router();

const { addNewAdmin,
        addNewInstructor,
        addNewCorporateTrainee } = require('../controllers/adminController');


// Add a new admin
router.post('/createAdmin', addNewAdmin);

// Add a new instructor
router.post('/createInstructor', addNewInstructor);

// Add a new corporate trainee    
router.post('/createCorporateTrainee', addNewCorporateTrainee);

module.exports = router;