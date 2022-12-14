const Admin = require('../Models/adminModel');
const CorporateTrainee = require("../Models/corporateTraineeModel");
const Instructor = require("../Models/instructorModel");

//ADD NEW ADMIN
const addAdmin = async (req, res) => {
    const { Username, Password } = req.body;
        
    try{
        const admin = await Admin.create({ Username, Password});
        res.status(200).json(admin);
    } catch(error){
        res.status(400).json({ error: error.message });  
    }
};

//ADD NEW INSTRUCTOR
const addInstructor = async (req, res) => {
    const { Username, Password } = req.body;
  
    try {
      const instructor = await Instructor.create({ Username, Password });
      res.status(200).json(instructor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// ADD CORPORATE TRAINEE
const addCorporateTrainee = async (req, res) => {
    const { Username, Password } = req.body;
  
    try {
      const corporateTrainee = await CorporateTrainee.create({
        Username,
        Password,
      });
      res.status(200).json(corporateTrainee);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = { 
    addAdmin, 
    addInstructor,
    addCorporateTrainee
};