const express = require("express");
const router = express.Router();
const multer = require("multer");
const data = require("../models/H_model");
const storage = require("../Util/DiskStorage");
const upload = multer({ storage: storage });

router.post("/", upload.single("picture"), (req, res) => {
  console.log(req.file);
 
})
module.exports = router
