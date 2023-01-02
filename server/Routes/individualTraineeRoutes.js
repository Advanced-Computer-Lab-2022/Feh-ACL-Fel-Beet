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
  findTrainee,
} = require("../Controllers/traineeController");

const { forgotPassword } = require("../Helpers/Nodemailer");

router.post("/forgotPass", forgotPassword);

// Get Profile
router.post("/profile", getIndividualProfile);

// Edit profile
router.post("/edit", editIndividual);

// Rate an instructor
router.post("/rateInstructor", rateInstructor);

// Rate a course
router.post("/rateCourse", rateCourse);

// Register to a new course
router.post("/registerCourse/:traineeId/:courseId", registerCourse);

// Report a problem
router.post("/report", report);

// View problems
router.get("/viewReports", viewProblems);

// Request a refund
router.post("/requestRefund/:id", requestRefund);

//Find a trainee
router.post("/findTrainee", findTrainee);

module.exports = router;
