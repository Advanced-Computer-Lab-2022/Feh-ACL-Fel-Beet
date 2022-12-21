const IndividualTrainee = require("../Models/individualTraineeModel");
const CorporateTrainee = require("../Models/corporateTraineeModel");
const Instructor = require("../Models/instructorModel");
const Course = require("../Models/courseModel");
const Reviews = require("../models/reviewsModel");

// Rate Instructor
const rateInstructor = async (req, res) => {
    const { traineeId, instructorId } = req.params;
    const { Rating } = req.body;
    let totalRating = 0;

    const instructor = await Instructor.findById(instructorId); 
    if(instructor) {
      const r = instructor.ratingsCalc.push(Rating);
      const noOfRatings = instructor.noOfRatings();
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
    course.ratingsCalc.push(Rating);
    const noOfRatings = course.noOfRatings();
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

module.exports = {
    rateCourse,
    rateInstructor
}

