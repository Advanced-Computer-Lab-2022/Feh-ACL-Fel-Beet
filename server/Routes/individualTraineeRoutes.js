const express = require("express");
const router = express.Router();
const {
  rateInstructor,
  rateCourse,
  registerCourse,
  report,
  viewProblems,
  getIndividualProfile,
  editIndividual,
  requestRefund,
} = require("../Controllers/traineeController");

// Get Profile
router.post("/profile", getIndividualProfile);

// Edit profile
router.patch("/edit/:id", editIndividual);

// Rate an instructor
router.post("/rateInstructor/:traineeId/:instructorId", rateInstructor);

// Rate a course
router.post("/rateCourse/:traineeId/:courseId", rateCourse);

// Register to a new course
router.post("/registerCourse/:traineeId/:courseId", registerCourse);

// Report a problem
router.post("/report/:id", report);

// View problems
router.get("/viewReports", viewProblems);

// Request a refund
router.post("/requestRefund/:id", requestRefund);

module.exports = router;
