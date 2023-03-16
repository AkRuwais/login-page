const express = require("express");
const app = express();
app.listen(4000, () => {
  console.log("Server connected");
});

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/login").then(() => {
  console.log("mongoose Connected");
});

const Import = require("./models/product");

const path = require("path");
const { dirname } = require("path");
app.set("viw engine", "ejs");
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/product.ejs"));
});
