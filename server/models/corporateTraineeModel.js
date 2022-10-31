const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corporateTraineeSchema = new Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String
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

const corporateTrainee = mongoose.model('CorporateTrainee', corporateTraineeSchema);
module.exports = corporateTrainee;