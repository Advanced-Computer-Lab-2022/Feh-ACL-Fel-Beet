const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corporateTraineeSchema = new Schema({
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

const corporateTrainee = mongoose.model('Corporate Trainee', corporateTraineeSchema);
module.exports = corporateTrainee;