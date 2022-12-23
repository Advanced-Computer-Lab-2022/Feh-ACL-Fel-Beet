const express = require('express')
const router = express.Router()
const { add, login, viewRatingsAndReviews, writeReview, findIndividualTrainee } = require('../Controllers/individualTraineeController')
const { rateInstructor, rateCourse } = require('../Controllers/traineeController')

router.post('/add', add)
router.post('/login', login)
router.post('/findIndividualTrainee', findIndividualTrainee)
router.post('/viewRatingsAndReviews/:id', viewRatingsAndReviews)
router.post('/rateInstructor/:traineeId/:instructorId', rateInstructor)

// Rate a course
router.post('/rateCourse/:traineeId/:courseId', rateCourse);



module.exports = router