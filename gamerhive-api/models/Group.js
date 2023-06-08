const mongoose = require("mongoose");
const User = require("./User");
const { Schema } = mongoose;

const GroupSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  users: [ User.schema ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Group", GroupSchema);
