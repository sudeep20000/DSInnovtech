const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: [true, "Please provide firstname"],
    minlength: 1,
    maxlength: 20,
  },
  lastName: {
    type: String,
    require: [true, "Please provide lastname"],
    minlength: 3,
    maxlength: 20,
  },
  organization: {
    type: String,
    require: [true, "Please provide organization"],
    minlength: 3,
    maxlength: 20,
  },
  jobTitle: {
    type: String,
    require: [true, "Please provide job title"],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    require: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
  },
  phone: {
    type: String,
    require: [true, "Please provide phone number"],
  },
  country: {
    type: String,
    require: [true, "Please provide country name"],
  },
  message: {
    type: String,
    require: [true, "Please provide message"],
  },
});

module.exports = mongoose.model("User", UserSchema);
