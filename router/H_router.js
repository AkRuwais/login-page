const express = require("express");
const router = express.Router();
const multer = require("multer");
const data = require("../models/H_model");
const storage = require("../Util/DiskStorage");
const upload = multer({ storage: storage });

router.post("/", upload.single("picture"), async (req, res) => {
  console.log(req.file.originalname);

  await data.insertMany({
    picture: req.file.originalname,
    name: req.body.name,
    username: req.body.username,
    website: req.body.website,
    bio: req.body.bio,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
  });
  // console.log(Home);
  const person = await data.find();

  console.log(person);
  res.render("Users", { person });
});

module.exports = router;
