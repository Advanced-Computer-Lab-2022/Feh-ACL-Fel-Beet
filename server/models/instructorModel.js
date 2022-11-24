const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        unique: true
    },
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Gender: {
        type: String
    }
}, { timestamps: true});

const Instructor = mongoose.model('Instructor', instructorSchema);
module.exports = Instructor;