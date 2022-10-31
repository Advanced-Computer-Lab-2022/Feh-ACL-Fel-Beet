const express = require('express');
const router = express.Router();

const viewInstructorCourses = require('../controllers/instructorController');

// GET all courses taught by this instructor
router.get('/viewInstructorCourses', viewInstructorCourses);

module.exports = router;