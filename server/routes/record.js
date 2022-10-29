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
});

recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };
    db_connect
      .collection("learningSystem")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
   });
    
recordRoutes.route("/:id").delete((req, response) => {
let db_connect = dbo.getDb();
let myquery = { _id: ObjectId(req.params.id) };
db_connect.collection("learningSystem").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
});
});

module.exports = recordRoutes;