const express = require("express");
const router = express.Router();
const CourseModel = require("../models/Courses");
module.exports = router;

// POST a new entry
router.post('/post', async (req, res) => {
    const {Name,Professor,Country,Subject,Price,Hours,Rating,Subs,Exercises,Hours_subs,Link} = req.body
    
    try {
      const course = await CourseModel.create({Name,Professor,Country,Subject,Price,Hours,Rating,Subs,Exercises,Hours_subs,Link})
      res.status(200).json(course)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  })

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