import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: "Email is required" },
    password: { type: String, required: "Password is required" },
    username: { type: String, required: "Name is required" },
    timezone: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
