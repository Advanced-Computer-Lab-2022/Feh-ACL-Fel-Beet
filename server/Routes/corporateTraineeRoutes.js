const express = require("express");
const router = express.Router();
const {
  rateInstructor,
  rateCourse,
  getCorporateProfile,
  requestCourseAccess,
  report,
  viewProblems,
  editProfile,
} = require("../Controllers/traineeController");

// Get Profile
router.get("/profile/:id", getCorporateProfile);

// Edit profile
router.patch("/editProfile/:id", editProfile);

// Rate an instructor
router.post("/rateInstructor/:traineeId/:instructorId", rateInstructor);

// Rate a course
router.post("/rateCourse/:traineeId/:courseId", rateCourse);

// Report a problem
router.post("/report/:id", report);

// View problems
router.get("/viewReports", viewProblems);

// Request a refund
router.post("/requestCourse/:id", requestCourseAccess);

module.exports = router;
