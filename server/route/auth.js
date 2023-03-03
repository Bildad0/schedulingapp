const express = require("express");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jtw = require("jsonwebtoken");
const User = require("../models/userModel");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { email, password, username, timezone } = req.body;

  try {
    const userExistWithEmail = await User.findOne({ email: email });
    const userExistWithUserName = await User.findOne({ username: username });
    if (userExistWithEmail) {
      res.status(422).json({ message: "Email already exists" });
    } else if (userExistWithUserName) {
      res.status(422).json({ message: "Username already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
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
    const { input, password } = req.body;
    const userByEmail = User.findOne({ email: input });
    const userByUsername = User.findOne({ username: input });
    if (!userByEmail) {
      if (!userByUsername) res.status(404).json({ error: "User not found" });
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
        id: userByEmail.id || userByUsername.id,
        schedule: userByEmail.schedule || userByUsername.schedule,
        username: userByEmail.username || userByUsername.username,
        timezone: userByEmail.timezone || userByUsername.timezone,
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
