const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSchema = new Schema({
    Type: {
        type: String
    },
    Body: {
        type: String
    },
    belongsTo: {
        type: Schema.Types.ObjectId
    },
    Status: {
        type: String
    },
    Seen: {
        type: Boolean,
        default: false
    }
});

const Problems = mongoose.model("Problems", problemSchema); 
module.exports = Problems;