const Admin = require('../models/adminModel');

//ADD NEW ADMIN
const addNewAdmin = async (req, res) => {
    const { Username, Password } = req.body;
        
    try{
        const admin = await Admin.create({ Username, Password});
        res.status(200).json(admin);
    } catch(error){
        res.status(400).json({ error: error.message });  
    }
};

module.exports = { 
    addNewAdmin
};