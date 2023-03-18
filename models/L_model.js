const mongoose = require("mongoose");
const scheema = mongoose.Schema;

const data = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  uname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", data);
