
const mongoose = require("mongoose");
const { Schema } = mongoose;


const FollowerSchema = new Schema({
  
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isAccepted : {
      type: Boolean,
      default: false
    }
  
  })
  
module.exports = mongoose.model("Follower", FollowerSchema)
