const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postTitle: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  postText: {
    type: String,
    required: true
  },
  postImageUrl: {
    type: String,
    required: false
  },
  isPublic: {
    type: Boolean,
    required: true,
    default: true
  },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  commentIdList: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  likeCount: {
    type: Number,
    default: 0
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', postSchema);

