const mongoose = require("mongoose");

const thumbnailSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  videoName: {
    type: String,
    required: true,
  },
  version: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  paid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Thumbnail", thumbnailSchema);
