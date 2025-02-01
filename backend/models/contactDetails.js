const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  // For Registered Users (if logged in)
  contactedBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    default: null, // Null for non-registered users
  },

  firstName: {
    type: String,
    required: function () {
      return !this.userId; // Name required only if userId is absent
    },
    trim: true,
    minlength: 1,
    maxlength: 20,
  },

  lastName: {
    type: String,
    required: function () {
      return !this.userId; // Name required only if userId is absent
    },
    trim: true,
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
    required: function () {
      return !this.userId; // Email required only if userId is absent
    },
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    trim: true,
    lowercase: true,
  },

  phone: {
    type: String,
    require: [true, "Please provide phone number"],
  },

  country: {
    type: String,
    require: [true, "Please provide country name"],
  },

  state: {
    type: String,
    require: [true, "Please provide state name"],
  },

  message: {
    type: String,
    require: [true, "Please provide message"],
    maxlength: 2000,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Indexes for optimized queries
ContactSchema.index({ userId: 1 }); // Find submissions by registered user
ContactSchema.index({ email: 1 }); // Find submissions by guest email
ContactSchema.index({ createdAt: -1 }); // Sort by submission date

module.exports = mongoose.model("Contact_details", ContactSchema);
