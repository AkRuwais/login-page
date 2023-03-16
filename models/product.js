const mongoose = require("mongoose");
const scheme = new mongoose.Schema({
  User_Name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.export = mongoose.model("User", scheme);
