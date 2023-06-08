const mongoose = require("mongoose");
const Post = require("../models/Post");
const asyncHandler = require("../middlewares/asyncHandler");
const { upload } = require("../middlewares/multerMiddleware");

exports.getPosts = asyncHandler(async (req, res, next) => {
  var query = {};

  const posts = await Post.find(query).sort({ createdDate: - 1});

  if (!posts) {
    return next({
      message: `No post found for id ${req.params.id}`,
      statusCode: 404,
    });
  }

  res.status(200).json({ success: true, data: posts });
});

exports.addPost = asyncHandler(async (req, res, next) => {
 
  console.log("req.body", req.body);
  console.log("req.files", req.files);
  const { postTitle, postText, isPublic, groupId, userId, userName } = req.body;

  const postImage = req.files.postImage;

  // Move the file to a public directory
  const filename = `${Date.now()}-${postImage.name}`;
  await postImage.mv(`public/uploads/${filename}`);
  


  const post = new Post({
    postTitle,
    postText,
    postImageUrl: `/uploads/${filename}`,
    isPublic,
    groupId,
    userId,
    userName
  });

  let newPost = await Post.create(post);

  res.status(200).json({ success: true, data: newPost });
});


exports.getPostByUsername = asyncHandler(async (req, res, next) => {
  
  const query = { userName: req.query.username };

  const posts = await Post.find(query);

  if (!posts || posts.length === 0) {
    return next({
      message: `No posts found for username ${username}`,
      statusCode: 404,
    });
  }

  res.status(200).json({ success: true, data: posts });
});
