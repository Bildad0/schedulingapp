const express = require("express");
const mongoose = require("mongoose");
const userRouter = express.Router();
const User = require("../models/userModel");

mongoose.set("strictQuery", true);

//get user by id
userRouter.get("/profile/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findOne({ id: userId });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "no user with such id" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//get all users
userRouter.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const users = query ? await User.find().limit(10) : await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "No Users" });
  }
});

userRouter.delete("/delete/:id", async (req, res) => {});

module.exports = userRouter;
