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
    }
    if (userExistWithUserName) {
      res.status(422).json({ message: "User name already exist" });
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
    const userByEmail = await User.findOne({ email: input }).then(async () => {
      const checkPasswordMatch = bcrypt.compare(
        password,
        await User.findOne({ password: password })
      );
      if (!userByEmail && !checkPasswordMatch) {
        res.status(404).json({ message: "User not found" });
      }
      const token = jtw.sign(
        {
          id: userByEmail.id,
          schedule: userByEmail.schedule,
          username: userByEmail.username,
          timezone: userByEmail.timezone,
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
      res.status(200).json({
        token,
      });
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = authRouter;
