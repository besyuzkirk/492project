const express = require("express");
const router = express.Router();

const { getPosts, addPost, getPostByUsername } = require("../controllers/post");

const { auth } = require("../middlewares/auth");

router.get("/", getPosts);
router.post("/", auth,  addPost);
router.get("/getPostsByUser", getPostByUsername);

module.exports = router;
