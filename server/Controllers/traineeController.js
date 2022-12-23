const IndividualTrainee = require("../Models/individualTraineeModel");
const CorporateTrainee = require("../Models/corporateTraineeModel");
const Instructor = require("../Models/instructorModel");
const Course = require("../Models/courseModel");
const Reviews = require("../models/reviewsModel");
const Requests = require('../models/requestsModel');

//---------------FUNCTIONS THAT BELONG TO BOTH TYPES OF TRAINEES-------------------

// Rate Instructor
const rateInstructor = async (req, res) => {
    const { traineeId, instructorId } = req.params;
    const { Rating } = req.body;
    let totalRating = 0;

    const instructor = await Instructor.findById(instructorId); 
    if(instructor) {
      const noOfRatings = instructor.ratingsCalc.push(Rating);
      instructor.ratingsCalc.map(rating => {
        totalRating += rating;
      });
      const realRating = totalRating/noOfRatings;

      await Instructor.findByIdAndUpdate(instructorId, { Rating: realRating, ratingsCalc: instructor.ratingsCalc })
    } else {
      res.status(400).json("No such instructor exists");
    }

    if(await IndividualTrainee.findById(traineeId)) {
      const review = await Reviews.create({ ...req.body, writtenBy: traineeId, belongsTo: instructorId });
      res.status(200).json(review);
    } else if(await CorporateTrainee.findById(traineeId)) {
      const review = await Reviews.create({ ...req.body, writtenBy: traineeId, belongsTo: instructorId });
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
  if(course) {
    const noOfRatings = course.ratingsCalc.push(Rating);
    course.ratingsCalc.map(rating => {
      totalRating += rating;
    });
    const realRating = totalRating/noOfRatings;

    await Course.findByIdAndUpdate(courseId, { Rating: realRating });
  } else {
    res.status(400).json("No such course exists");
  }

  if(await IndividualTrainee.findById(traineeId)) {
    const review = await Reviews.create({ ...req.body, writtenBy: traineeId, belongsTo: courseId });
    res.status(200).json(review);
  } else if(await CorporateTrainee.findById(traineeId)) {
    const review = await Reviews.create({ ...req.body, writtenBy: traineeId, belongsTo: courseId });
    res.status(200).json(review);
  } else {
    res.status(400).json("No such trainee exists");
  }
};

//--------------------------------------------------------------------------------------------------------------

//------------------FUNCTIONS THAT BELONG TO INDIVIDUAL TRAINEES-----------------------------------------------
const registerCourse = async (req, res) => {
  const { traineeId, courseId } = req.params;

  const course = await Course.findById(courseId);
  course.incrementNoOfEnrolled();
  const trainee = await IndividualTrainee.findByIdAndUpdate(traineeId, {"$push": {Courses: course.Name}});
  res.status(200).json(trainee.Courses);
}

const requestRefund = async (req, res) => {
  const { id } = req.params;
  const course = req.body.course;

  const trainee = await IndividualTrainee.findById(id);
  const request = await Requests.create({Type: "Financial", Course: course, belongTo: trainee.Username});
  if(request) {
    res.status(200).json(request);
  } else {
    res.status(400).json("Request not created!");
  }  
}

const getWallet = async (req, res) => {
  const { id } = req.params;

  const trainee = await IndividualTrainee.findById(id);
  if(trainee) {
    res.status(200).json(trainee.Wallet);
  } else {
    res.status(400).json("No such trainee!");
  }
}

//--------------------------------------------------------------------------------------------------------------

//-------------------------FUNCTIONS THAT BELONG CORPORATE TRAINEES---------------------------------------------

const requestCourseAccess = async (req, res) => {
  const { id } = req.params;
  const course = req.body.course;

  const trainee = await CorporateTrainee.findById(id);
  const request = await Requests.create({Type: "Course Access", Course: course, belongTo: trainee.Username});
  if(request) {
    res.status(200).json(request);
  } else {
    res.status(400).json("Request not created!");
  }  
}

//--------------------------------------------------------------------------------------------------------------

module.exports = {
    rateCourse,
    rateInstructor,
    registerCourse,
    requestRefund,
    requestCourseAccess,
    getWallet
}

