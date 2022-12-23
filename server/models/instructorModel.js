const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    Gender: {
      type: String,
    },
    ratingsCalc: {
      type: [Number],
      default: []
    },
    Rating: {
      type: Number,
      default: 5
    },
    miniBiography: {
      type: String
    },
    Courses: {
      type: [Schema.Types.ObjectId],
      default: []
    },
    Wallet: {
      type: Number,
      default: 0
    }
}, { timestamps: true });

instructorSchema.methods.noOfRatings = function() {
  noOfRatings = this.ratingsCalc.length;
  return noOfRatings;
};

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
