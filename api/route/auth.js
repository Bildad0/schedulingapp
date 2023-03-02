const express = require("express");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jtw = require("jsonwebtoken");
const User = require("../models/userModel");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { email, password, username, timezone } = req.body;

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const newUser = User({
      id: uuidv4(),
      email,
      password: hashedPassword,
      username,
      timezone,
    });
    const savedUser = await newUser.save();
    res
      .status(200)
      .json({ message: "Account created succesfully", data: savedUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = User.findOne({ email: email });
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }

    const checkPasswordMatch = bcrypt.compare(
      password,
      User.findOne({ password }).toString()
    );
    if (!checkPasswordMatch) {
      res.status(401).json({ error: "Incorrect password." });
    }
    const token = jtw.sign(
      {
        id: user._id,
        schedule: user.schedule,
        username: user.username,
        timezone: user.timezone,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.status(200).json({
      token,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = authRouter;
