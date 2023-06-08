const mongoose = require("mongoose");
var crypto = require("crypto");
const { Schema } = mongoose;
const Follower = require("../models/Follower");

const UserSchema = new Schema({
  firstname: {
    type: String,
    min: 2,
    max: 50,
  },
  lastname: {
    type: String,
    min: 2,
    max: 50,
  },
  username: {
    type: String,
    min: 2,
    max: 50,
    required: true
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true
  },
  passwordSalt: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  followers: [Follower.schema],
  blockStatus: {
    type: Boolean,
    required: false,
    default: false,
  },
  picturePath: {
    type: String,
    required: false,
  },
});

UserSchema.methods.setPassword = function (password) {
  // Creating a unique salt for a particular user
  this.passwordSalt = crypto.randomBytes(16).toString("hex");

  // Hashing user's salt and password with 1000 iterations,

  this.passwordHash = crypto
    .pbkdf2Sync(password, this.passwordSalt, 1000, 64, `sha512`)
    .toString(`hex`);
};

UserSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.passwordSalt, 1000, 64, `sha512`)
    .toString(`hex`);
  return this.passwordHash === hash;
};

module.exports = mongoose.model("User", UserSchema);
