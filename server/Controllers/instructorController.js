const Course = require('../models/Courses');
const mongoose = require('mongoose');

const viewInstructorCourses = async (req, res) => {
    const { Professor } = req.body

    const course = await Course.find({'Professor': Professor});

    if (!course) {
        return res.status(404).json({error: 'No courses for you'})
    }

    res.status(200).json(course)
}

module.exports = viewInstructorCourses;