const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    fname: { type: String, required: "First name is required" },
    lname: { type: String, required: "Last name is required" },
    email: { type: String, required: "Email is required" },
    password: { type: String, required: "Password is required" },
    username: { type: String, required: "Name is required" },
    timezone: { type: [] },
    schedule: { type: [] },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
