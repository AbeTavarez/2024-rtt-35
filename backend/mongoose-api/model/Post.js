import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  topic: {
    type: String,
    enum: ["JavaScript", "Python", "React", "Express"],
    default: "Express"
  },
});

// create a new Post model
const Post = mongoose.model('Post', postSchema);
export default Post;