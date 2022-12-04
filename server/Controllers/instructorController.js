const Instructor = require("../Models/instructorModel");
const mongoose = require('mongoose');

//LOGIN (login)
const login = async (req, res) => {
  const { Username, Password } = req.body;

  try {
    const instructor = await Instructor.findOne({
      Username: Username,
      Password: Password,
    });
    req.session.user = { instructor };
    if (instructor == null) {
      res.status(200).json({ error: "Invalid credentials" });
    } else {
      res.status(200).json(instructor);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//ADD NEW INSTRUCTOR
const add = async (req, res) => {
  const { Username, Password } = req.body;

  try {
    const instructor = await Instructor.create({ Username, Password });
    res.status(200).json(instructor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// View Ratings & Reviews
const viewRatingsAndReviews = async (req, res) => {
  const { id } = req.params;
  try {
    const instructor = await Instructor.findById(id);
    res.status(200).json({reviews: instructor.Reviews, rating: instructor.Rating});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Rate Instructor
const rateInstructor = async (req, res) => {
    const { instructorId, rating, text } = req.body;
  
    if (req.session.user?.corporateTrainee) {
      const user = req.session.user?.corporateTrainee;
      const instructor = await Instructor.findOne({ _id: instructorId });
      if (!instructor) return res.status(400).send("no instructor exsits");
      const Reviews = [
        ...instructor.Reviews,
        { value: rating, text, reviewerCorp: user._id },
      ];
      const Rating = Reviews.reduce((s, r) => s + r.rating, 0) / Reviews.length;
      
      await Instructor.updateOne({ _id: instructorId }, { Reviews, Rating });
      return res.status(200).send("ok");
    } else if (req.session.user?.individualTrainee) {
      const user = req.session.user?.individualTrainee;
      const instructor = await Instructor.findOne({ _id: instructorId });
      if (!instructor) return res.status(400).send("no instructor exsitst");
      const Reviews = [
        ...instructor.Reviews,
        { value: rating, text, reviewerIndi: user._id },
      ];
      const Rating = Reviews.reduce((s, r) => s + r.value, 0) / Reviews.length;
      console.log({Rating, Reviews,Instructor});
      await Instructor.updateOne({ _id: instructorId }, { Reviews, Rating });
      return res.status(200).send("ok");
    } else res.status(400).send("not enought permissions");
  };

const editInstructor = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such instructor'})
  }

  const instructor = await Instructor.findOneAndUpdate({_id: id}, { ...req.body })
  if (!instructor) {
    return res.status(400).json({error: 'No such instructor'})
  }

  res.status(200).json(instructor)
}

module.exports = {
  add,
  login,
  rateInstructor,
  editInstructor,
  viewRatingsAndReviews
};
