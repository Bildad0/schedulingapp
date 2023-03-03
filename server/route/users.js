const express = require("express");
const userRouter = express.Router();
const User = require("../models/userModel");

//get user by id
userRouter.get("/profile/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findOne({ id: userId });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User is cannot be found" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//edit user
userRouter.put("/edit/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json({
      message: "User " + updateUser.username + " updated successfuly",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//get all users for admin
userRouter.get("/", async (res) => {
  try {
    const users = await User.find().limit(100);
    if (users[0] == null) {
      res.status(404).json({ message: "No Users" });
    } else {
      res.status(200).json({ users });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//get user by username
userRouter.get("/:username", async (req, res) => {
  const userName = req.params.username;
  try {
    const user = User.findOne({ username: userName });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "No user with user name " + userName });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//delete a user
userRouter.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const userToDelete = await User.findOneAndDelete({ id: userId });
    res.status(200).json({
      message: "User " + userToDelete.username + " deleted successfuly",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = userRouter;
