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

module.exports = {
  login,
  add,
};
