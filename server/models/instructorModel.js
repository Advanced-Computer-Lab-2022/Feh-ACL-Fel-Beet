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
    Email: {
      type: String,
      unique: false,
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
    },
    Reviews: {
      type: [
        {
          text: String,
          value: Number,
          reviewerIndi: {
            type: Schema.Types.ObjectId,
            ref: "individualTrainee",
          },
          reviewerCorp: {
            type: Schema.Types.ObjectId,
            ref: "CorporateTrainee",
          },
        },
      ],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
