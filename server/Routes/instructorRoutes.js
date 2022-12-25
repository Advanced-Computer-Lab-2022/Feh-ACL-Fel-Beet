const express = require("express");
const router = express.Router();
const {
  getProfile,
  editProfile,
  viewInstructorReviews,
  viewCourseReviews,
  viewReports,
} = require("../Controllers/instructorController");
const { route } = require("./individualTraineeRoutes");

// View profile
router.get("/profile", getProfile);

// Edit Profile
router.patch("/edit/:id", editProfile);

// View reviews & ratings
router.get("/viewReviews/:id", viewInstructorReviews);

// View course reviews & ratings
router.get("/viewCourseReview/:id", viewCourseReviews);

// View reported problems
router.get("/viewProblems", viewReports);

module.exports = router;
