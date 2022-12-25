const IndividualTrainee = require("../Models/individualTraineeModel");
const CorporateTrainee = require("../Models/corporateTraineeModel");
const Instructor = require("../Models/instructorModel");
const Course = require("../Models/courseModel");
const Reviews = require("../models/reviewsModel");
const Requests = require("../models/requestsModel");
const Problems = require("../models/problemModel");

//---------------FUNCTIONS THAT BELONG TO BOTH TYPES OF TRAINEES-------------------

// Rate Instructor
const rateInstructor = async (req, res) => {
  const { traineeId, instructorId } = req.params;
  const { Rating } = req.body;
  let totalRating = 0;

  const instructor = await Instructor.findById(instructorId);
  if (instructor) {
    const noOfRatings = instructor.ratingsCalc.push(Rating);
    instructor.ratingsCalc.map((rating) => {
      totalRating += rating;
    });
    const realRating = totalRating / noOfRatings;

    await Instructor.findByIdAndUpdate(instructorId, {
      Rating: realRating,
      ratingsCalc: instructor.ratingsCalc,
    });
  } else {
    res.status(400).json("No such instructor exists");
  }

  if (await IndividualTrainee.findById(traineeId)) {
    const review = await Reviews.create({
      ...req.body,
      writtenBy: traineeId,
      belongsTo: instructorId,
    });
    res.status(200).json(review);
  } else if (await CorporateTrainee.findById(traineeId)) {
    const review = await Reviews.create({
      ...req.body,
      writtenBy: traineeId,
      belongsTo: instructorId,
    });
    res.status(200).json(review);
  } else {
    res.status(400).json("No such trainee exists");
  }
};

// Rate Course
const rateCourse = async (req, res) => {
  const { traineeId, courseId } = req.params;
  const { Rating } = req.body;
  let totalRating = 0;

  const course = await Course.findById(courseId);
  if (course) {
    const noOfRatings = course.ratingsCalc.push(Rating);
    course.ratingsCalc.map((rating) => {
      totalRating += rating;
    });
    const realRating = totalRating / noOfRatings;

    await Course.findByIdAndUpdate(courseId, {
      Rating: realRating,
      ratingsCalc: course.ratingsCalc,
    });
  } else {
    res.status(400).json("No such course exists");
  }

  if (await IndividualTrainee.findById(traineeId)) {
    const review = await Reviews.create({
      ...req.body,
      writtenBy: traineeId,
      belongsTo: courseId,
    });
    res.status(200).json(review);
  } else if (await CorporateTrainee.findById(traineeId)) {
    const review = await Reviews.create({
      ...req.body,
      writtenBy: traineeId,
      belongsTo: courseId,
    });
    res.status(200).json(review);
  } else {
    res.status(400).json("No such trainee exists");
  }
};

const report = async (req, res) => {
  const { id } = req.params;

  const problem = await Problems.create({ ...req.body, belongTo: id });
  res.status(200).json(problem);
};

const viewProblems = async (req, res) => {
  const problems = Problems.find();
  res.status(200).json(problems);
};

const editProfile = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such trainee" });
  }
};

//--------------------------------------------------------------------------------------------------------------

//------------------FUNCTIONS THAT BELONG TO INDIVIDUAL TRAINEES-----------------------------------------------

const registerCourse = async (req, res) => {
  const { traineeId } = req.params;
  const courseName = req.body.Name;

  const course = await Course.find({ Name: courseName });
  course.incrementNoOfEnrolled();
  const trainee = await IndividualTrainee.findByIdAndUpdate(traineeId, {
    $push: { Courses: courseName, Progress: { Course: courseName } },
  });
  res.status(200).json(trainee.Courses);
};

const requestRefund = async (req, res) => {
  const { id } = req.params;
  const course = req.body.course;

  const trainee = await IndividualTrainee.findById(id);
  const request = await Requests.create({
    Type: "Financial",
    Course: course,
    belongTo: id,
  });
  if (request) {
    res.status(200).json(request);
  } else {
    res.status(400).json("Request not created!");
  }
};

const getIndividualProfile = async (req, res) => {
  const { id } = req.params;

  const trainee = await IndividualTrainee.findById(id);
  if (trainee) {
    res.status(200).json(trainee);
  } else {
    res.status(400).json("No such trainee!");
  }
};

//--------------------------------------------------------------------------------------------------------------

//-------------------------FUNCTIONS THAT BELONG CORPORATE TRAINEES---------------------------------------------

const requestCourseAccess = async (req, res) => {
  const { id } = req.params;
  const course = req.body.course;

  const trainee = await CorporateTrainee.findById(id);
  const request = await Requests.create({
    Type: "Course Access",
    Course: course,
    belongTo: id,
  });
  if (request) {
    res.status(200).json(request);
  } else {
    res.status(400).json("Request not created!");
  }
};

const getCorporateProfile = async (req, res) => {
  const { id } = req.params;

  const trainee = await CorporateTrainee.findById(id);
  if (trainee) {
    res.status(200).json(trainee);
  } else {
    res.status(400).json("No such trainee!");
  }
};

//--------------------------------------------------------------------------------------------------------------

module.exports = {
  rateCourse,
  rateInstructor,
  registerCourse,
  requestRefund,
  requestCourseAccess,
  getIndividualProfile,
  getCorporateProfile,
  report,
  viewProblems,
  editProfile,
};
