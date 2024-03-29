const mongoose = require("mongoose");
const Course = require("../Models/courseModel");
const Instructor = require("../Models/instructorModel");

const listOfSubjects = ["Hardware", "CS", "Math"];

const getInstructorCourses = async (req, res) => {
  const id = req.body.id;

  const instructor = await Instructor.findById(id);
  const courses = await Course.find({ Name: { $in: instructor.Courses } });
  res.status(200).json(courses);
};

// search for course by title,subject,instructor
const searchAndFilter = async (req, res) => {
  const { searchItem } = req.body;
  const maxPrice = req.body.maxPrice || Infinity;
  const realRating = req.body.realRating || 0;
  const subject = req.body.subject || listOfSubjects;

  const courses = await Course.find({
    $and: [
      { Rating: { $gte: realRating } },
      { Subject: { $in: subject } },
      { Price: { $lte: maxPrice } },
      {
        $or: [
          { Name: new RegExp(searchItem, "i") },
          { Subject: new RegExp(searchItem, "i") },
          { Professor: new RegExp(searchItem, "i") },
        ],
      },
    ],
  })
    .exec()
    .catch(() => res.status(400).send("database exploded"));
  res.send(courses);
};

const searchAndFilterInstructor = async (req, res) => {
  const { searchItem, id } = req.body;
  const maxPrice = req.body.maxPrice || Infinity;
  const realRating = req.body.realRating || 0;
  const subject = req.body.subject || listOfSubjects;

  const instructor = await Instructor.findById(id);
  const listOfCourses = instructor.Courses;

  const courses = await Course.find({
    $and: [
      { Rating: { $gte: realRating } },
      { Subject: { $in: subject } },
      { Price: { $lte: maxPrice } },
      { Name: { $in: listOfCourses } },
      {
        $or: [
          { Name: new RegExp(searchItem, "i") },
          { Subject: new RegExp(searchItem, "i") },
          { Professor: new RegExp(searchItem, "i") },
        ],
      },
    ],
  })
    .exec()
    .catch(() => res.status(400).send("database exploded"));
  res.send(courses);
};

// GET ALL COURSES
const getCourses = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });
  res.status(200).json(courses);
};

const getCourse = async (req, res) => {
  const { Name } = req.body;

  const course = await Course.findOne({ Name: Name });
  if (!course) {
    return res.status(400).json({ error: "No such course" });
  }
  res.status(200).json(course);
};

// CREATE COURSE
const createCourse = async (req, res) => {
  const {
    Name,
    Subject,
    Price,
    promotion,
    endDate,
    shortSummary,
    VideoUrl,
    id,
    Subtitles,
  } = req.body;

  try {
    const instructor = await Instructor.findById(id);
    console.log(instructor);
    const newPrice = Price - Price * (promotion / 100);
    const course = await Course.create({
      Name,
      Professor: `${instructor.Username}`,
      Subject,
      Price: newPrice,
      Promotion: { price: promotion, endDate: endDate },
      shortSummary,
      VideoUrl,
      Subtitles,
    });
    await Instructor.findByIdAndUpdate(id, { $push: { Courses: Name } });
    res.status(200).json(course);
  } catch (error) {
    console.log("error is : " + error);
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
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such course" });
  }

  const course = await Course.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!course) {
    return res.status(400).json({ error: "No such course" });
  }
  res.status(200).json(course);
};

const addSubtitle = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findById(id);
    const subs = [...course.Subtitles, { ...req.body }];
    await Course.findByIdAndUpdate(id, { Subtitles: subs });
    res.status(200).json(subs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSub = async (req, res) => {
  const { subId, courseId } = req.params;

  try {
    const course = await Course.findById(courseId);
    const updatedSub = course.Subtitles.id(subId).set({ ...req.body });
    await Course.findByIdAndUpdate(courseId, { Subtitles: course.Subtitles });
    res.status(200).json(updatedSub);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
  searchAndFilter,
  addSubtitle,
  updateSub,
  searchAndFilterInstructor,
  getInstructorCourses,
};
