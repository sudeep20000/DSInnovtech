const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 2,
      maxlength: 30,
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Please provide mobile number"],
      unique: true,
      maxlength: 10,
    },

    email: {
      type: String,
      required: [true, "Please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide valid email",
      ],
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 6,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: Date,
    lastLogin: Date,
  },
  { timestamps: true }
);

// Indexes for fast queries
// UserSchema.index({ email: 1 }); // Unique index for logins
UserSchema.index({ createdAt: -1 }); // Sort users by registration date

// Mongoose Middleware(req -> middleware run and re-assign property -> save the user data with modification)
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

// Schema instance method(only for schema instance)
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
