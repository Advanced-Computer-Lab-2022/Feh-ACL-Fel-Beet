const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema(
  {
    Body: {
        type: String,
        default: "",
    },
    belongsTo: {
        type: String,
        required: true
    }
  }
);

const Reviews = mongoose.model("Reviews", reviewsSchema)
module.exports = Reviews