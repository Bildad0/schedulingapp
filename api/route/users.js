const express = require("express");
const mongoose = require("mongoose");
const userRouter = express.Router();
const User = require("../models/userModel");

mongoose.set("strictQuery", true);
//get user

userRouter.get("/profile", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("email")
      .populate("username")
      .populate("timezone")
      .populate("schedule");

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

userRouter.delete("delete/:id", async (req, res) => {});

module.exports = userRouter;
