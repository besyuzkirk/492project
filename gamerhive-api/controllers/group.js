const mongoose = require("mongoose");
const Group = require("../models/Group");
const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/User");

exports.addGroup = asyncHandler(async (req, res, next) => {
  const { name, description } = req.body;

  let group = await Group.create({ name, description });

  res.status(200).json({ success: true, data: group });
});

exports.addUserToGroup = asyncHandler(async (req, res, next) => {
  
  const { groupId, userId } = req.body;

  let user = await User.findById(userId);
  
  let group = await Group.findById(groupId)
  
  let addedUser =  group.users.push(user)
  await group.save()



  res.status(200).json({ success: true, data: addedUser });
});
