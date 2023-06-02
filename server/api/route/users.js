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

    const updateUser = await User.findByIdAndUpdate(req.params.id, {
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
      message: "User " + updateUser.username + " updated successfuly",
    });
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
});

//get all users for admin
userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find().limit(100);
    if (users[0] == null) {
      res.status(404).json({ message: "No Users" });
    } else {
      res.status(200).json({ data: users });
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
});

//get user by username
userRouter.get("/:username", async (req, res) => {
  const userName = req.params.username;
  try {
    const user = User.findOne({ username: userName });

    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ message: "No user with user name " + userName });
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
});

//delete a user
userRouter.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const userToDelete = await User.findOne({ id: userId });
    if (userToDelete) {
      const userDeleted = await User.findOneAndDelete({ id: userId });
      res.status(200).json({
        message: "User " + userDeleted.username + " deleted successfuly",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "User can not be found" });
    res.status(error.status).json({ message: `${error.message}` });
  }
});

module.exports = userRouter;
