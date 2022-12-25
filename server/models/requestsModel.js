const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    Type: {
        type: String
    },
    Course: {
        type: String
    },
    AcceptedStatus: {
        type: Boolean
    },
    belongsTo: {
        type: Schema.Types.ObjectId
    }
});

const Requests = mongoose.model("Requests", requestSchema);
module.exports = Requests;