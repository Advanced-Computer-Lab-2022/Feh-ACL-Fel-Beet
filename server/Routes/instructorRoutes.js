const express = require('express');
const router = express.Router();
const { editProfile, viewInstructorReviews, viewCourseReviews } = require('../Controllers/instructorController');

// Edit Profile
router.patch('/edit/:id', editProfile)

// View reviews & ratings
router.get('/viewReviews/:id', viewInstructorReviews)

// View course reviews & ratings
router.get('/viewCourseReview/:id', viewCourseReviews);


module.exports = router;