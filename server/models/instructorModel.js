const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    FirstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    Gender: {
      type: String,
    },
    Rating: {
      type: Number,
      required: true,
      default: 0,
    }
  },
  { timestamps: true }
);

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
