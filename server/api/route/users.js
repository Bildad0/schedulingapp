const express = require("express");
const userRouter = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const fs = require("fs");

//get user by id
userRouter.get("/profile/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findOne({ id: userId });
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ message: "User cannot be found" });
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
});

//edit user
userRouter.put("/edit/:id", async (req, res) => {
  const { fname, lname, email, password, username, timezone, image } = req.body;
  try {
    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //convert image to base 64 incase of any
    var imageData = fs.readFileSync(image);
    var imageUri = imageData.toString("base64");

    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: {
        fname,
        lname,
        email,
        username,
        timezone,
        imageUrl: imageUri,
        password: hashedPassword,
      },
    });

    res.status(200).json({
      message: "User " + updatedUser.username + " updated successfuly",
      data: updatedUser,
    });
  } catch (error) {
    res.status(error.status).json({ message: `${error.message}`, data: null });
  }
});

//get all users for admin
userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find().limit(100);
    if (users[0] == null) {
      res.status(404).json({ message: "No Users", data: null });
    } else {
      res
        .status(200)
        .json({ data: users, message: `${users.length} users found` });
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}`, data: null });
  }
});

//get user by username
userRouter.get("/:username", async (req, res) => {
  const userName = req.params.username;
  try {
    await User.findOne({ username: userName }).then((response) => {
      if (response) {
        res.status(200).json({
          message: "User found",
          data: response,
        });
      } else {
        res.status(404).json({
          message: "No user with user name " + userName,
          data: null,
        });
      }
    });
  } catch (error) {
    res.status(500).json({ message: `${error.message}`, data: null });
  }
});

//delete a user
userRouter.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    await User.findOne({ id: userId }).then(async (response) => {
      if (response) {
        const userDeleted = await User.findOneAndDelete({ id: userId });
        res.status(200).json({
          message: "User " + userDeleted.username + " deleted successfuly",
          data: null,
        });
      }
      res.json({ message: "User can't be deleted", data: null });
    });
  } catch (error) {
    res.status(error.status).json({ message: `${error.message}`, data: null });
  }
});

module.exports = userRouter;
