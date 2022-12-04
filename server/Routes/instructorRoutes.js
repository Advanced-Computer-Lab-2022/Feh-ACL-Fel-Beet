const express = require('express');
const router = express.Router();
const { add, login,rateInstructor, editInstructor, viewRatingsAndReviews, sendEmail, writeReview } = require('../Controllers/instructorController');

router.post('/add', add)
router.post('/login', login)
router.post('/rate', rateInstructor)
router.post('/forgetPassword', sendEmail)
router.post('/writeReview', writeReview)
router.patch('/edit/:id', editInstructor)
router.get('/viewReviewsAndRatings/:id', viewRatingsAndReviews)


module.exports = router;