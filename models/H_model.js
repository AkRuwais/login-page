const mongoose = require("mongoose");
const scheema = mongoose.Schema;

const data = new mongoose.Schema({
  picture: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Home", data);
