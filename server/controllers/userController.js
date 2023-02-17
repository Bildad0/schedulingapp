import mongoose from "mongoose";
import userSchema from "../models/userModel.js";
import sha256 from "js-sha256";

export async function register(req, res) {
  const { username, email, password } = req.body;
  const emailRegex = /[@gmail.com|@yahoo.com|@hotmail.com|@live.com]$/;
  if (!emailRegex.test(email))
    throw "Email is not supported from your domain. ";
  if (password.length < 6) throw "Password must be atleast 6 characters long";
  const user = new userSchema({
    username,
    email,
    password: sha256(password + process.env.SALT),
    timezone,
  });
  await user.save();
  res.json({ message: "User [" + username + "]registered successfully" });
}
