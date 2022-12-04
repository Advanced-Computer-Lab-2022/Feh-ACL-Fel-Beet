const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coursesSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
      unique: true,
    },
    Professor: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
    Subject: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Hours: {
      type: Number,
      required: true,
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
            value: String,
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
    Subs: {
      type: String,
      required: true,
    },
    Exercises: {
      type: String,
      required: true,
    },
    Hours_subs: {
      type: String,
      required: true,
    },
    Link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", coursesSchema);
module.exports = Course;
