const Instructor = require('../Models/instructorModel');

//LOGIN
const login = async (req, res) => {
    const { Username, Password } = req.body;

    try{
        const instructor = await Instructor.findOne({
            Username: Username,
            Password: Password
        })
        if(instructor == null){
            res.status(200).json({error: "Invalid credentials"})
        }else{
            res.status(200).json(instructor)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//ADD NEW INSTRUCTOR
const add = async (req, res) => {
    const { Username, Password } = req.body;

    try{
        const instructor = await Instructor.create({ Username, Password});
        res.status(200).json(instructor);
    } catch(error){
        res.status(400).json({ error: error.message });  
    }
};

module.exports = {
    add,
    login
};