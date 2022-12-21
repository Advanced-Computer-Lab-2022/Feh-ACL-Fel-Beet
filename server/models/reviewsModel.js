const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  Title:{
    type: String,
    required: true
  },
  Body: {
    type: String,
    default: "",
  },
  Rating:{
    type: Number
  },
  writtenBy: {
    type: Schema.Types.ObjectId,
    required: true
  },
  belongsTo: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, { timestamps: true });

const Reviews = mongoose.model("Reviews", reviewsSchema)
module.exports = Reviews