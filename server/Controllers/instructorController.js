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

// // Send Email
// const sendEmail = async (req, res) => {
//   const { body, id } = req.body

//   try {
//       const email = await Emails.create({Body: body, belongsTo: id})
//       res.status(200).json(email)
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
// }

// Send Email
const writeReview = async (req, res) => {
  const { body, id } = req.body

  try {
      const review = await Reviews.create({Body: body, belongsTo: id})
      res.status(200).json(review)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

// View Ratings & Reviews
const viewRatingsAndReviews = async (req, res) => {
  const { id } = req.params;
  try {
    const instructor = await Instructor.findById(id);
    const reviews = await Reviews.find({belongsTo: mongoose.Types.ObjectId(id)})
    res.status(200).json({reviews: reviews, rating: instructor.Rating});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

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
  login,
  editInstructor,
  viewRatingsAndReviews,
  writeReview
};
