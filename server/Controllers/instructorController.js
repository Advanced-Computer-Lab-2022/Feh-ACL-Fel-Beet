const Instructor = require('../models/instructorModel');

//ADD NEW INSTRUCTOR
const addNewInstructor = async (req, res) => {
    const { Username, Password } = req.body;

    try{
        const instructor = await Instructor.create({ Username, Password});
        res.status(200).json(instructor);
    } catch(error){
        res.status(400).json({ error: error.message });  
    }
};

module.exports = {
    addNewInstructor
};