const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jtw = require("jsonwebtoken");
const User = require("../models/userModel");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { fname, lname, email, password, username, timezone, image } = req.body;
  try {
    // check user existence
    const userExistWithEmail = await User.findOne({ email: email });
    const userExistWithUserName = await User.findOne({ username: username });
    if (userExistWithEmail && !userExistWithUserName) {
      res.status(422).json({ message: "Email already exists" });
    } else if (userExistWithUserName && !userExistWithEmail) {
      res.status(422).json({ message: "User name already exist" });
    }

    //convert base 64 image here
    var imageData = fs.readFileSync(image);
    var imageUri = imageData.toString("base64");

    //encrypting user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = User({
      id: uuidv4(),
      fname,
      lname,
      email,
      password: hashedPassword,
      username,
      timezone,
      imageUrl: imageUri,
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
    await User.findOne({ email: input }).then((response) => {
      const checkPasswordMatch = bcrypt.compare(password, response.password);
      if (!checkPasswordMatch) {
        res.status(404).json({ message: "User not found" });
      }
      var salt = bcrypt.genSalt(10);
      var hashedPassword = bcrypt.hash(password, salt);
      if (hashedPassword == response.password) {
        const token = jtw.sign(
          {
            id: response.id,
            schedule: response.schedule,
            username: response.username,
            timezone: response.timezone,
          },
          process.env.JWT_SECRET,
          { expiresIn: "7d" }
        );
        res.status(200).json({
          token,
          user: response,
        });
      }
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = authRouter;
