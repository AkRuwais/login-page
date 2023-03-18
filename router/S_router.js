const express = require("express");
const router = express.Router();

const data = require("../models/L_model");

router.get("/", (req, res) => {
  res.render("Signup");
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const Signup = await data.insertMany({
    fname: req.body.fname,
    uname: req.body.uname,
    email: req.body.email,
    password: req.body.password,
  });
  console.log(Signup);
  res.render("login", { result: "" });
});

module.exports = router;
