const express = require('express')
const router = express.Router()
const { login, viewRatingsAndReviews, writeReview } = require('../Controllers/corporateTraineeController')


router.post('/login', login)
router.post('/viewRatingsAndReviews/:id', viewRatingsAndReviews)
router.post('/writeReview', writeReview)

module.exports = router