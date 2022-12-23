const IndividualTrainee = require("../Models/individualTraineeModel");

//LOGIN
const login = async (req, res) => {
  const { Username, Password } = req.body;

  try {
    const individualTrainee = await IndividualTrainee.findOne({
      Username: Username,
      Password: Password,
    });
    req.session.user = { individualTrainee };
    if (individualTrainee == null) {
      res.status(200).json({ error: "Invalid credentials" });
    } else {
      res.status(200).json(individualTrainee);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//ADD INDIVIDUAL TRAINEE
const add = async (req, res) => {
  const { Username, Password, Email, FirstName, LastName, Gender } = req.body;

  try {
    const individualTrainee = await IndividualTrainee.create({
      Username,
      Password,
      Email,
      FirstName,
      LastName,
      Gender,
    });
    res.status(200).json(individualTrainee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Find an individual trainee 
const findIndividualTrainee = async (req, res) => {
  const { Username, Password, Email, FirstName, LastName, Gender } = req.body;

  const trainee = await IndividualTrainee.find({Username: Username, Email: Email});

  if(!trainee){
    res.status(400).json("No trainee with that username or email exists");
  }
  else{
    res.status(200).json("A trainee with that username or email exists");
  }
}

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
    const trainee = await IndividualTrainee.findById(id);
    const reviews = await Reviews.find({belongsTo: mongoose.Types.ObjectId(id)})
    res.status(200).json({reviews: reviews, rating: trainee.Rating});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  login,
  add,
  viewRatingsAndReviews,
  writeReview,
  findIndividualTrainee
};
