const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password, username, timezone } = req.body;
  const newUser = User({ email, password, username, timezone });
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    }
    const savedUser = await newUser.save();
    res
      .status(200)
      .json({ message: "Account created succesfully", data: savedUser });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {});

module.exports = router;
