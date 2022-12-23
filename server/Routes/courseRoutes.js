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
  getCourse
  } = require('../Controllers/courseController')

// VIEW ALL COURSES
router.get('/allCourses', getCourses);

// Get a specific course
router.get('/getCourse/:id', getCourse);

// CREATE COURSE
router.post('/create/:instructId', createCourse);

// DELETE COURSE
router.delete('/delete/:id', deleteCourse);

// UPDATE COURSE
router.patch('/editCourse/:id', updateCourse);

// Search according to name, subject and instructor & filter according to subject, rating and price
router.get('/search', searchAndFilter);

// Add a new subtitle to the list of subtitles
router.post('/addSub/:id', addSubtitle);

// Update a subtitle
router.patch('/updateSub/:subId/:courseId', updateSub);

module.exports = router;