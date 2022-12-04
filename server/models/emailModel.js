const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema(
  {
    Body: {
      type: String,
      default: "",
    },
    belongsTo: {
        type: String,
        required: true
    }
  }
);

const Emails = mongoose.model("Emails", emailSchema)
module.exports = Emails