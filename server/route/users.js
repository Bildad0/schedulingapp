import express from "express";
import mongoose from "mongoose";
import UserModel from "../models/userModel.js";
const Router = express.Router();

mongoose.set("strictQuery", true);
//register user

Router.post("/register", (req, res) => {
  const user = new UserModel({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    timezone: req.body.timezone,
  });
  user.save((err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error creating user");
      return;
    }
    res.status(400).send(user);
  });
});

//login user to the server
Router.post("/login", (req, res) => {
  const { username, password } = req.body;
  let result = database.filter(
    (user) => user.username == username && user.password == password
  );
  if (result.length !== 1) {
    return res.json({ error_message: "Incorrect credentials" });
  }
  res.json({
    message: "Login Successfully",
    data: {
      _id: result[0].id,
      _email: result[0].email,
    },
  });
});

export default Router;
