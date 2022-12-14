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
    Rating: {
      totalRating: {
        type: Number,
        default: 0
      },
      noOfRatings: {
        type: Number,
        default: 0
      }
    },
    miniBiography: {
      type: String
    }
}, { timestamps: true });

instructorSchema.methods.incrementNoOfRatings = function() {
  this.Rating.noOfRatings += 1;
  return this.Rating.noOfRatings;
};

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
