import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "please provide an email"],
    unique: [true, "Email already exist"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    unique: false,
  },
  username: {
    type: String,
    required: [true, "please provide username"],
    unique: [true, "username already exist"],
  },
  timezone: {},
  schedule: [],
});

const User = mongoose.model("User", UserSchema);

export default User;
