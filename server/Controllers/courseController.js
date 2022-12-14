const Course = require("../Models/courseModel");
const mongoose = require('mongoose');



// search for course by title,subject,instructor
const searchCourse = async (req, res) => {
  const { Name, Professor, Subject } = req.body

  if (Name != undefined) {
      const course = await Course.find({ Name: Name })
      return res.status(200).json({ course })
  }
  else if (Subject != undefined) {
      const course = await Course.find({ Subject: Subject }).sort({ price: 1 })
      return res.status(200).json({ course })
  }
  else if (Professor != undefined) {
      const course = await Course.find({ Professor: Professor  }).sort({ price: 1 })
      return res.status(200).json({ course })
  }

}


// FILTER COURSE METHODS
// INSTRUCTOR
const filterByInstructor = async (req, res) => {
  const { Professor } = req.body;

  const course = await Course.find({ Professor: Professor });

  if (!course) {
    return res.status(404).json({ error: "No courses for you" });
  }

  res.status(200).json(course);
};
// NAME
const filterByName = async (req, res) => {
  const { Name } = req.body;

  const course = await Course.find({ Name: Name });

  if (!course) {
    return res.status(404).json({ error: "No courses for you" });
  }

  res.status(200).json(course);
};
// PRICE
const filterByPrice = async (req, res) => {
  const course = await Course.find({}).sort({ Price: 1 })
  return res.status(200).json({ course })
}


const filterByRating = async (req, res) => {
  const course = await Course.find({}).sort({ Rating:-1 })
  return res.status(200).json({ course })
}
// SUBJECT
const filterBySubject = async (req, res) => {
  const course = await Course.find({}).sort({ Subject:1 })
  return res.status(200).json({ course })
}


// GET ALL COURSES
const getCourses = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });

  res.status(200).json(courses);
};

// CREATE COURSE
const createCourse = async (req, res) => {
  const {
    Name,
    Professor,
    Country,
    Subject,
    Price,
    Hours,
    Rating,
    Subs
  } = req.body;

  try {
    const course = await Course.create({
      Name,
      Professor,
      Country,
      Subject,
      Price,
      Hours,
      Rating,
      Subs
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A COURSE
const deleteCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such course!" });
  }

  const course = await Course.findOneAndDelete({ _id: id });

  if (!course) {
    return res.status(400).json({ error: "No such course" });
  }

  res.status(200).json(course);
};

const updateCourse = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such course'})
  }

  const course = await Course.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!course) {
    return res.status(400).json({error: 'No such course'})
  }

  res.status(200).json(course)
}

module.exports = {
  getCourses,
  createCourse,
  deleteCourse,
  filterByInstructor,
  filterByName,
  filterByPrice,
  filterBySubject,
  updateCourse,
  searchCourse,
  filterByRating
};
