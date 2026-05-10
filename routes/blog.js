const express = require("express");
const router = express.Router();

//Import controllers
const {createComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/postController");
const {likePost, unlikePost} = require("../controllers/likeController");


// Mapping routes to controllers
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/create", likePost);
router.post("/likes/unlike", unlikePost);


//export
module.exports = router;