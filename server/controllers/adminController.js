const Admin = require('../Models/adminModel');
const CorporateTrainee = require("../Models/corporateTraineeModel");
const IndividualTrainee = require("../Models/individualTraineeModel");
const Instructor = require("../Models/instructorModel");
const Course = require("../Models/courseModel");

//ADD NEW ADMIN
const addAdmin = async (req, res) => {
    const { Username, Password } = req.body;
       
    // Check if username exists
    if( await IndividualTrainee.findOne({ Username: Username}) ||
        await CorporateTrainee.findOne({ Username: Username}) ||
        await Instructor.findOne({ Username: Username}) ||
        await Admin.findOne({ Username: Username})) {
            res.json("Username already exists");
        }

    try{
        const admin = await Admin.create({ Username, Password });
        res.status(200).json(admin);
    } catch(error){
        res.status(400).json({ error: error.message });  
    }
};

//ADD NEW INSTRUCTOR
const addInstructor = async (req, res) => {
    const { Username, Password } = req.body;
  
    // Check if username exists
    if( await IndividualTrainee.findOne({ Username: Username}) ||
        await CorporateTrainee.findOne({ Username: Username}) ||
        await Instructor.findOne({ Username: Username}) ||
        await Admin.findOne({ Username: Username})) {
            res.json("Username already exists");
        }

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
  
    // Check if username exists
    if( await IndividualTrainee.findOne({ Username: Username}) ||
        await CorporateTrainee.findOne({ Username: Username}) ||
        await Instructor.findOne({ Username: Username}) ||
        await Admin.findOne({ Username: Username})) {
            res.json("Username already exists");
        }

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

const setPromotion = async (req, res) => {
    const { listOfCourses, Promotion } = req.body;

    listOfCourses?.map(async courses => {
      const course = await Course.findOneAndUpdate({Name: courses}, {Promotion: {price: Promotion.price, endDate: Promotion.endDate}});
      res.status(200).json(course)
    });
  };



module.exports = { 
    addAdmin, 
    addInstructor,
    addCorporateTrainee,
    setPromotion
};