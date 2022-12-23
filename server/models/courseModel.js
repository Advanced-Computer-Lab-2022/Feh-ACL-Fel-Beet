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
  Description: {
    type: String
  },
  VideoUrl: {
    type : String
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
    },
    ratingsCalc: {
      type: [Number],
      default: []
    },
    Rating: {
      type: Number,
      default: 5
    },  
    Promotion: {
      price: Number,
      endDate: Date
    },
    shortSummary: {
      type: String
    },
    VideoUrl: {
      type : String
    },
    noOfEnrolled: {
      type: Number,
      default: 0
    },
    Subtitles: {
      type: [subtitles]
    }
  }, { timestamps: true }
);

exercises.methods.calculateGrade = function() {
  this.Grade = this.Question.length;
};

coursesSchema.methods.incrementNoOfEnrolled = function() {
  noOfEnrolled = this.noOfEnrolled++;
};

const Course = mongoose.model("Course", coursesSchema);
module.exports = Course;
