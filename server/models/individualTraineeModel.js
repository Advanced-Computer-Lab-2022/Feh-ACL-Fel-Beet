const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const individualTraineeSchema = new Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    }
}, { timestamps: true});

const individualTrainee = mongoose.model('individualTrainee', individualTraineeSchema);
module.exports = individualTrainee;