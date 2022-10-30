const express = require("express");
const router = express.Router();
const CourseModel = require("../models/Courses");
module.exports = router;

const {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse
  } = require('../controllers/courseController')

// POST a new entry
router.post('/post', createCourse)

//get a course by ID
router.get('/getOne/:id', getCourse);

//update a course by ID
router.patch('/patch/:id', updateCourse)

//get all courses 
router.get('/allCourses', getCourses)

//delete a couse by ID
router.delete('/delete/:id', deleteCourse)

module.exports = router;