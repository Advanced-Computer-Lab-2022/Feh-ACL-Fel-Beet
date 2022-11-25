const express = require("express");
const router = express.Router();

const {
  getCourses,
  createCourse,
  deleteCourse,
  filterByInstructor,
  filterByName,
  filterByPrice,
  filterBySubject,
  filterByID
  } = require('../Controllers/courseController')

// VIEW ALL COURSES
router.get('/allCourses', getCourses)
// CREATE COURSE
router.post('/create', createCourse)
// FILTER COURSE
router.post('/findByInstructor', filterByInstructor)
router.post('/findByName', filterByName)
router.post('/findByPrice', filterByPrice)
router.post('/findBySubject', filterBySubject)
router.post('/findByID', filterByID)
// DELETE COURSE
router.delete('/delete/:id', deleteCourse)

module.exports = router;