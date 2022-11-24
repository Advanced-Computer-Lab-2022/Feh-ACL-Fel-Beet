const CorporateTrainee = require("../Models/corporateTraineeModel")

//LOGIN
const login = async (req, res) => {
    const { Username, Password } = req.body;

    try{
        const corporateTrainee = await CorporateTrainee.findOne({
            Username: Username,
            Password: Password
        })
        if(corporateTrainee == null){
            res.status(200).json({error: "Invalid credentials"})
        }else{
            res.status(200).json(corporateTrainee)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// ADD CORPORATE TRAINEE
const add = async (req, res) => {
    const { Username, Password } = req.body;

    try{
        const corporateTrainee = await CorporateTrainee.create({ Username, Password});
        res.status(200).json(corporateTrainee);
    } catch(error){
        res.status(400).json({ error: error.message });  
    }
};

module.exports = {
    add,
    login
}