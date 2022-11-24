const express = require("express");
const router = express.Router();

const {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse,
    viewInstructorCourses
  } = require('../Controllers/courseController')

// VIEW ALL COURSES
router.get('/allCourses', getCourses)
// GET COURSE FROM ID
router.get('/get/:id', getCourse);
// CREATE COURSE
router.post('/create', createCourse)
// VIEW INSTRUCTOR COURSES
router.post('/viewInstructorCourses', viewInstructorCourses)
// UPDATE COURSE
router.patch('/update/:id', updateCourse) 
// DELETE COURSE
router.delete('/delete/:id', deleteCourse)

module.exports = router;