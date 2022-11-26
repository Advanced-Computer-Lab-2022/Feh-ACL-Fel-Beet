const Course = require("../Models/courseModel");

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
  const { Price } = req.body;

  const course = await Course.find({ Price: Price });

  if (!course) {
    return res.status(404).json({ error: "No courses for you" });
  }

  res.status(200).json(course);
};
// SUBJECT
const filterBySubject = async (req, res) => {
  const { Subject } = req.body;

  const course = await Course.find({ Subject: Subject });

  if (!course) {
    return res.status(404).json({ error: "No courses for you" });
  }

  res.status(200).json(course);
};
// ID
const filterByID = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such course found", id });
  }

  const course = await Course.findById(id);

  if (!course) {
    return res.status(404).json({ error: "No such course; Incorrect ID" });
  }

  res.status(200).json(course);
};

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
    Subs,
    Exercises,
    Hours_subs,
    Link,
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
      Subs,
      Exercises,
      Hours_subs,
      Link,
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

module.exports = {
  getCourses,
  createCourse,
  deleteCourse,
  filterByInstructor,
  filterByName,
  filterByPrice,
  filterBySubject,
  filterByID,
};
