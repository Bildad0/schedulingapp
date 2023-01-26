import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
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

export default mongoose.model("Users", UserSchema);
