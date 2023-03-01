const express = require("express");
const mongoose = require("mongoose");
const userRouter = express.Router();
const User = require("../models/userModel");

mongoose.set("strictQuery", true);
//get user

userRouter.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id })
      .populate("email")
      .populate("username")
      .populate("timezone")
      .populate("schedule");
    if (user != null) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

userRouter.get("/all", async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find()
          .sort({
            _id: -1,
          })
          .limit(5)
      : await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "No Users" });
  }
});

userRouter.delete("delete/:id", async (req, res) => {});

module.exports = userRouter;
