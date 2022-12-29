const express = require("express");
const router = express.Router();
const {
  getProfile,
  editProfile,
  viewInstructorReviews,
  viewCourseReviews,
  viewReports,
  report,
} = require("../Controllers/instructorController");

// View profile
router.post("/profile", getProfile);

// Edit Profile
router.patch("/edit/:id", editProfile);

// View reviews & ratings
router.get("/viewReviews/:id", viewInstructorReviews);

// View course reviews & ratings
router.get("/viewCourseReview/:id", viewCourseReviews);

// View reported problems
router.get("/viewProblems", viewReports);

// Report a problem
router.post("/report/:id", report);

module.exports = router;
