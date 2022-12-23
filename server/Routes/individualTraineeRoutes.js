const express = require('express')
const router = express.Router()
const { rateInstructor, rateCourse, registerCourse } = require('../Controllers/traineeController')

// Rate an instructor
router.post('/rateInstructor/:traineeId/:instructorId', rateInstructor)

// Rate a course
router.post('/rateCourse/:traineeId/:courseId', rateCourse);

// Register to a new course
router.post('/registerCourse/:traineeId/:courseId', registerCourse);

module.exports = router