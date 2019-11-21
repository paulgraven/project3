const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Item Model
const Post = require("../../models/Post");

// @route   GET api/posts
// @desc    Get All Posts
// @access  Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts));
});

// @route   POST api/posts
// @desc    Create A Post
// @access  Private route, since we added "auth" as a second parameter; protected routes (need tokens)
router.post("/", auth, (req, res) => {
  const newPost = new Post({
    continent: req.body.continent,
    country: req.body.country,
    city: req.body.city,
    photo: req.body.photo,
    description: req.body.description,
    user: req.body.user
  });
  newPost.save().then(post => res.json(post));
});

// @route   DELETE api/posts/:id
// @desc    Delete A Post
// @access  Private route, since we added "auth" as a second parameter; protected routes (need tokens)
router.delete("/:id", auth, (req, res) => {
  Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;