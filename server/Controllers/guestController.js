const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const IndividualTrainee = require("../Models/individualTraineeModel");
const CorporateTrainee = require("../Models/corporateTraineeModel");
const Instructor = require("../Models/instructorModel");
const Admin = require('../Models/adminModel');

const jwtSecret = process.env.JWTSECRET;

const login = async (req, res) => {
    const { Username, Password } = req.body;

    let type;
    let user;
    if(await IndividualTrainee.findOne({ Username: Username})) {
        user = await IndividualTrainee.findOne({ Username: Username});
        type = "Indiviual Trainee";
    } else if(await CorporateTrainee.findOne({ Username: Username})) {
        user = await CorporateTrainee.findOne({ Username: Username});
        type = "Corporate Trainee";
    } else if(await Instructor.findOne({ Username: Username})) {
        user = await Instructor.findOne({ Username: Username});
        type = "Instructor";
    } else if(await Admin.findOne({ Username: Username})) {
        user = await Admin.findOne({ Username: Username});
        type = "Admin";
    } else {
        res.status(400).json("You don't have an account!")
    }

    const id = user._id;
    if(await bcrypt.compare(Password, user.Password)){
        const token = jwt.sign({ id }, jwtSecret);
        res.cookie('jwt', token, { httpOnly: true });
        res.status(200).json(type);
    } else {
        res.status(400).json("You password is incorrect!");
    }
}

const logout = async (req, res) => {
    res.cookie("jwt", "", { httpOnly: true, maxAge: 1});
    res.status(200).json("Logged out successfully");
}

const signup = async (req, res) => {
    const { Username, Password } = req.body;
    
    // Check if username exists
    if( await IndividualTrainee.findOne({ Username: Username}) ||
        await CorporateTrainee.findOne({ Username: Username}) ||
        await Instructor.findOne({ Username: Username}) ||
        await Admin.findOne({ Username: Username})) {
            res.status(400).json("Username already exists");
        }

    try {
        const salt = await bcrypt.genSalt();
        hashedPass = await bcrypt.hash(Password, salt);
        const individualTrainee = await IndividualTrainee.create({ ...req.body, Password: hashedPass });
        const token = jwt.sign({ Username }, jwtSecret);
        res.cookie('jwt', token, { httpOnly: true });
        res.status(200).json(individualTrainee);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { login, signup, logout };