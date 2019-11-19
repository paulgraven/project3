const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Post Model and User Model
const Post = require("../../models/Post");
const User = require("../../models/User");

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
  const user = User.findById(req.user.id);
  const newPost = new Post({
    country: req.body.country,
    city: req.body.city,
    photo: req.body.photo,
    description: req.body.description,
    user: user.id,
    name: user.name
  });
  newPost.save().then(
    post => res.json(post)
    // res.json({
    //   post,
    //   user: {
    //     id: user.id,
    //     name: user.name,
    //     email: user.email
    //   }
    // })
  );
});

// @route   POST api/posts
// @desc    Create A Post
// @access  Private route, since we added "auth" as a second parameter; protected routes (need tokens)
// router.post("/", auth, async (req, res) => {
// const user = await User.findById(req.user.id);
//   try {
//     const newPost = {
//       country: req.body.country,
//       city: req.body.city,
//       photo: req.body.photo,
//       description: req.body.description,
//       name: user.name,
//       id: user.id
//     };
//     const post = await newPost.save();
//     res.json(post);
//   } catch (error) {
//     res.status(500).send("Server Error");
//   }
// });

// @route   DELETE api/posts/:id
// @desc    Delete A Post
// @access  Private route, since we added "auth" as a second parameter; protected routes (need tokens)
router.delete("/:id", auth, (req, res) => {
  Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
