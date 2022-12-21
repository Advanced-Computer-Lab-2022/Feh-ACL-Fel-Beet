const mongoose = require('mongoose');
const Instructor = require("../Models/instructorModel");
const Reviews = require('../models/reviewsModel');

// View Ratings & Reviews
const viewInstructorReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await Reviews.find({ belongsTo: id })
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const viewCourseReviews = async (req, res) => {
  const { id } = req.params;
  let reviews = []

  try {
    const instructor = await Instructor.findById(id);
    const listOfCourses = instructor.Courses;
    listOfCourses.map(async courseId => {
      reviews.push(await Reviews.find({ belongsTo: courseId }));
    })
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
}

const editProfile = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such instructor'})
  }

  const instructor = await Instructor.findByIdAndUpdate(id, { ...req.body })
  if (!instructor) {
    return res.status(400).json({error: 'No such instructor'})
  }

  res.status(200).json(instructor)
}

module.exports = {
  editProfile,
  viewInstructorReviews,
  viewCourseReviews
};