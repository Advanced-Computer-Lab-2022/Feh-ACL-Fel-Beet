const Admin = require('../models/adminModel');
const Instructor = require('../models/instructorModel');
const CorporateTrainee = require('../models/corporateTraineeModel');
const mongoose = require('mongoose');

const addNewAdmin = async (req, res) => {
    const { Username, Password } = req.body;
        
    try{
        const admin = await Admin.create({ Username, Password});
        res.status(200).json(admin);
    } catch(error){
        res.status(400).json({ error: error.message });  
    }
};

const addNewInstructor = async (req, res) => {
    const { Username, Password } = req.body;

    try{
        const instructor = await Instructor.create({ Username, Password});
        res.status(200).json(instructor);
    } catch(error){
        res.status(400).json({ error: error.message });  
    }
};

const addNewCorporateTrainee = async (req, res) => {
    const { Username, Password } = req.body;

    try{
        const corporateTrainee = await CorporateTrainee.create({ Username, Password});
        res.status(200).json(corporateTrainee);
    } catch(error){
        res.status(400).json({ error: error.message });  
    }
};

module.exports = { 
    addNewAdmin,
    addNewInstructor,
    addNewCorporateTrainee
};