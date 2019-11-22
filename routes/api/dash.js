const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

//User Model
const User = require("../../models/User");

router.get("api/posts/user/_id", auth, async(req,res)=>{
    User = await user.filter(req, posts.user._id);
    try {
        const myPost ={
            country: req.body.country,
            city: req.body.city,
            photo: req.body.photo,
            description: req.body.description
        }
        const post = await myPost.get();
        res.json(post);
    } catch (error) {
        res.status(500).send("Server Error")
    }
})