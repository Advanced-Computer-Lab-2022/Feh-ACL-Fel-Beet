const express = require('express');
const router = express.Router();
const { login, editInstructor, viewRatingsAndReviews, writeReview } = require('../Controllers/instructorController');

router.post('/login', login)
router.post('/writeReview', writeReview)
router.patch('/edit/:id', editInstructor)
router.get('/viewReviewsAndRatings/:id', viewRatingsAndReviews)


module.exports = router;