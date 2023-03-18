const express = require("express");
const app = express();
app.listen(4000, () => {
  console.log("Server connected");
});

app.set("view engine", "ejs");

const bodyparser = require("body-parser");
const { urlencoded } = require("body-parser");
app.use(urlencoded({ extended: true }));
app.use(bodyparser.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/login").then(() => {
  console.log("mongoose Connected");
});

app.use(express.static(__dirname + "/public"));

const L_router = require("./router/L_router");
app.use("/", L_router);

const router = require("./router/S_router");
app.use("/Signup", router);

const H_router = require("./router/H_router");
app.use("/Home", H_router);

const path = require("path");
const { dirname } = require("path");

app.use(
  express.urlencoded({
    extended: false,
  })
);
