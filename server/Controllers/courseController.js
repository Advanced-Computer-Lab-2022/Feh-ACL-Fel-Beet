const mongoose = require('mongoose');
const Course = require("../Models/courseModel");
const Instructor = require("../Models/instructorModel");

// search for course by title,subject,instructor
const searchAndFilter = async (req, res) => {
  const { searchItem, realRating, subject, maxPrice } = req.body

  const courses = await Course.find(
    {
        $and: [
            { Rating: { $gte: realRating }},
            { Subject: { $in: subject } },
            { Price: { $lte: maxPrice } }, {
                $or: [
                    { Name: new RegExp(searchItem, 'i') },
                    { Subject: new RegExp(searchItem, 'i') },
                    { Professor: new RegExp(searchItem, 'i') }
                ]
            }
        ]
    }).exec().catch(() => res.status(400).send("database exploded"));
    res.status(200).json(courses);
  }

// GET ALL COURSES
const getCourses = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });
  res.status(200).json(courses);
};

// CREATE COURSE
const createCourse = async (req, res) => {
  const { instructId } = req.params
  const {
    Name,
    Subject,
    Price,
    shortSummary,
    Subtitles
  } = req.body;

  try {
    const instructor = await Instructor.findById(instructId);
    const course = await Course.create({
      Name,
      Professor: `${instructor.firstName} ${instructor.lastName}`,
      Subject,
      Price,
      shortSummary,
      Subtitles
    });
    instructor.Courses.push(course._id);
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addSubtitle = async (req, res) => {
  const { id } = req.params

  try {
    const course = await Course.findById(id);
    const subs = [...course.Subtitles, {...req.body}];
    await Course.findByIdAndUpdate(id, { Subtitles: subs });
    res.status(200).json(subs);
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
}

const updateSub = async (req, res) => {
  const { subId, courseId } = req.params;

  try {
    const course = await Course.findById(courseId);
    const updatedSub = course.Subtitles.id(subId).set({...req.body});
    await Course.findByIdAndUpdate(courseId, { Subtitles: course.Subtitles })
    res.status(200).json(updatedSub);
  } catch(error) {
    res.status(400).json({ error: error.message });
    }
}

const addExercise = async (req, res) => {
  const { subId, courseId } = req.params

  try {
    const course = await Course.findById(courseId);
    const subtitle = course.Subtitles.id(subId);
    const exercises = [...subtitle.Exercises, {...req.body}];
    const updatedCourse = course.subtitle.Exercises.set({exercises});
    await Course.findByIdAndUpdate(courseId, {Subtitles: updatedCourse});
    res.status(200).json(exercises);
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
}

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
  updateCourse,
  searchAndFilter,
  addSubtitle,
  updateSub,
  addExercise
};
