const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const individualTraineeSchema = new Schema({
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
        required: true,
        unique: true
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
    },
    Courses: {
        type: [String],
        default: []
    },
    Progress: [{
        Course: String,
        Percentage: {
            type: Number,
            default: 0
        }
    }],
    Wallet: {
        type: Number,
        default: 0
    }
}, { timestamps: true});

const individualTrainee = mongoose.model('Individual Trainee', individualTraineeSchema);
module.exports = individualTrainee;