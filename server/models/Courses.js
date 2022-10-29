const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Professor: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Course = mongoose.model('Course', coursesSchema);
module.exports = Course;