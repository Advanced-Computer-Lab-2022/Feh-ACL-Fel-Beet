const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questions = new Schema({
  Question: {
      type: String
  },
  Choices: {
      type: [String]
  },
  Answer: {
      type: String
  }
});

const exercises = new Schema({
  Name: {
      type: String,
      required: true
  },
  Questions: {
      type: [questions],
  },
  Grade: {
      type: Number
  }
});

const subtitles = new Schema({
  Title: {
      type: String,
      required: true
  },
  Hours: {
      type: Number
  },
  shortSummary: {
    type: String
  },
  Exercises: {
    type: [exercises]
  }
});

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
      totalRating: {
        type: Number,
        default: 0
      },
      noOfRatings: {
        type: Number,
        default: 0
      }
    },
    Promotion: {
      price: Number,
      endDate: Date
    },
    Subtitles: {
      type: [subtitles]
    }
  }, { timestamps: true }
);

exercises.methods.calculateGrade = function() {
  this.Grade = this.Question.length;
};

coursesSchema.methods.incrementNoOfRatings = function() {
  this.Rating.noOfRatings += 1;
  return this.Rating.noOfRatings;
};

const Course = mongoose.model("Course", coursesSchema);
module.exports = Course;
