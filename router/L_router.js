const express = require("express");
const router = express.Router();

const data = require("../models/L_model");

router.get("/", (req, res) => {
  res.render("login", { result: "" });
});

router.post("/Login", async (req, res) => {
  console.log(req.body);
  const login = await data.find({
    uname: req.body.username,
    password: req.body.pass,
  });
  console.log(login.length);
  if (login.length > 0) {
    res.render("Home");
  } else {
    res.render("Login", { result: "Please check your username and password" });
  }
});
module.exports = router;
