const CorporateTrainee = require("../Models/corporateTraineeModel")

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
    addNewCorporateTrainee
}