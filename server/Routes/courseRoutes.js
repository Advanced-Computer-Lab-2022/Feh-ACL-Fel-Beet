const express = require("express");
const router = express.Router();

const {
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
  searchAndFilter,
  addSubtitle,
  updateSub,
  getCourse,
  searchAndFilterInstructor,
  getInstructorCourses,
} = require("../Controllers/courseController");

// VIEW ALL COURSES
router.get("/allCourses", getCourses);

router.post("/getInstructorCourses", getInstructorCourses);

// Get a specific course
router.post("/getCourse", getCourse);

// CREATE COURSE
router.post("/create", createCourse);

// DELETE COURSE
router.delete("/delete/:id", deleteCourse);

// UPDATE COURSE
router.patch("/editCourse/:id", updateCourse);

// Search according to name, subject and instructor & filter according to subject, rating and price
router.post("/search", searchAndFilter);

router.post("/searchInstructor", searchAndFilterInstructor);

// Add a new subtitle to the list of subtitles
router.post("/addSub/:id", addSubtitle);

// Update a subtitle
router.patch("/updateSub/:subId/:courseId", updateSub);

module.exports = router;
