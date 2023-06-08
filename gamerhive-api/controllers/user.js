const User = require("../models/User");
const mongoose = require("mongoose");
const asyncHandler = require("../middlewares/asyncHandler");
const Follower = require("../models/Follower");
const { v4: uuidv4 } = require("uuid");
const path = require('path')

exports.getUser = asyncHandler(async (req, res, next) => {
  console.log(req.query.id);

  var query = { _id: req.query.id };

  const user = await User.findOne(query);

  if (!user) {
    return next({
      message: `No post found for id ${req.params.id}`,
      statusCode: 404,
    });
  }

  res.status(200).json({ success: true, data: user });
});

exports.follow = asyncHandler(async (req, res, next) => {
  let { userId, followerUserId } = req.body;

  var query = { _id: userId };
  const user = await User.findOne(query);
  const followerUser = await User.findOne({ _id: followerUserId });

  const follower = new Follower();

  follower.username = followerUser.username;
  follower.email = followerUser.email;

  if (user) {
    user.followers.push(follower);

    await user.save();
    res.status(200).json({ success: true, data: user });
  }
});

exports.changeProfilePicture = asyncHandler(async (req, res, next) => {
  var query = { _id: req.query.id };
  const user = await User.findOne(query);

  if (!user) {
    return res.status(404).json("User not found");
  }

  user.picturePath = req.picturePath;
  
  user
    .save()
    .then(() => res.json("User Photo Updated"))
    .catch((err) => res.status(400).json("Error: " + err));
});

exports.getUserName = asyncHandler(async (req, res, next) => {
  

  var query = { _id: req.query.id };

  const user = await User.findOne(query);

  if (!user) {
    return next({
      message: `No post found for id ${req.params.id}`,
      statusCode: 404,
    });
  }

  res.status(200).json({ success: true, data: user.username });
});


exports.getUserProfile = asyncHandler(async (req, res, next) => {
  console.log(req.query.id);

  var query = { username: req.query.id };

  const user = await User.findOne(query);

  if (!user) {
    return next({
      message: `No post found for id ${req.params.id}`,
      statusCode: 404,
    });
  }

  res.status(200).json({ success: true, data: user });
});

