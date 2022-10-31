const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Username: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
    Phone_Number: {
    type: String,
    required: true
  }
}, { timestamps: true });

const User = mongoose.model('Course', UserSchema);
module.exports = User; 