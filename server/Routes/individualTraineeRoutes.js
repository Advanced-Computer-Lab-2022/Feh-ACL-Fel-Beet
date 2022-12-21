const express = require('express')
const router = express.Router()
const { rateInstructor, rateCourse } = require('../Controllers/traineeController')

// Rate an instructor
router.post('/rateInstructor/:traineeId/:instructorId', rateInstructor)

// Rate a course
router.post('/rateCourse/:traineeId/:courseId', rateCourse);



module.exports = router