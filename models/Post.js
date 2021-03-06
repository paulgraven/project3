const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  continent: {
    required: true,
    type: String
  },
  city: {
    required: true,
    type: String
  },
  country: {
    type: String
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  photo: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
