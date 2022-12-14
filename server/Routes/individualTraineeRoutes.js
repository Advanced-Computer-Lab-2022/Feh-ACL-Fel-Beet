const express = require('express')
const router = express.Router()
const { add, login, viewRatingsAndReviews, writeReview } = require('../Controllers/individualTraineeController')
const { rateInstructor, rateCourse } = require('../Controllers/traineeController')

router.post('/add', add)
router.post('/login', login)
router.post('/viewRatingsAndReviews/:id', viewRatingsAndReviews)
router.post('/rateInstructor/:traineeId/:instructorId', rateInstructor)
router.post('/rateCourse/:traineeId/:courseId', rateCourse);



module.exports = router