const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MongoURI = process.env.ATLAS_URI;

module.exports = {
    connectToServer: function () {
        mongoose.connect(MongoURI).then( () => {
        console.log("MongoDB is now connected")
    }).catch(err => console.log(err));
    },
}