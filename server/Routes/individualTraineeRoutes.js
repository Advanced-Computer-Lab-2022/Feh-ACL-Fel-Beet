const express = require('express')
const router = express.Router()
const { add, login, viewRatingsAndReviews, writeReview } = require('../Controllers/individualTraineeController')

router.post('/add', add)
router.post('/login', login)
router.post('/viewRatingsAndReviews/:id', viewRatingsAndReviews)
router.post('/writeReview', writeReview)

module.exports = router