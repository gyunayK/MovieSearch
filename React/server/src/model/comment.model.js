const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    text: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    movieId: { type: Number, ref: "Movie" },
    timestamp: { type: Date, default: Date.now },
  },
  { collection: "comments" }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
