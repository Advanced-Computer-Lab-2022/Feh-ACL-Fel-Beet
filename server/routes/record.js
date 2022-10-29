const express = require("express");
const router = express.Router();
const Model = require("../models/Courses");
module.exports = router;

router.post('/post', (req, res) => {
    const data = new Model({
        Name: 'Yousef',
        Professor: 'Korayem'
    })

    data.save();
    res.status(200).json(data);
});

router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

router.put('/tryput/:id', async (req, res) => {
    var idOfObject = req.params.id;
    Model.findByIdAndUpdate(idOfObject, {Name: 'Chicken Burger'}, function(err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log("Updated : ", idOfObject);
        }
    })
    res.status(500).json({Name: 'Chicken Burger'});
})

module.exports = router;