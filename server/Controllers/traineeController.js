const IndividualTrainee = require("../Models/individualTraineeModel");
const CorporateTrainee = require("../Models/corporateTraineeModel");
const Instructor = require("../Models/instructorModel");
const Course = require("../Models/courseModel");
const Reviews = require("../Models/reviewsModel");

// Rate Instructor
const rateInstructor = async (req, res) => {
    const { traineeId, instructorId } = req.params;
    const { Rating } = req.body;

    const instructor = await Instructor.findById(instructorId); 
    if(instructor) {
      const noOfRatings = instructor.incrementNoOfRatings();
      const rating = (Rating+instructor.Rating.totalRating)/noOfRatings;
      await Instructor.findByIdAndUpdate(instructorId, { Rating: {totalRating: rating, noOfRatings: noOfRatings} })
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

  const course = await Course.findById(courseId); 
  if(course) {
    const noOfRatings = course.incrementNoOfRatings();
    const rating = (Rating+course.Rating.totalRating)/noOfRatings;
    await Course.findByIdAndUpdate(courseId, { Rating: {totalRating: rating, noOfRatings: noOfRatings} })
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

