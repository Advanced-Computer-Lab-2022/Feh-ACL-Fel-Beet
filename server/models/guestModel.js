const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true
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
    unique: true
  },
    Phone_Number: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Guest = mongoose.model('Guest', GuestSchema);
module.exports = Guest; 