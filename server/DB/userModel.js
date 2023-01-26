import { UserSchema as _UserSchema, model } from "mangoose";

const UserSchema = new _UserSchema({
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
  username,
  timezone: {},
  schedule: [],
});

export default model.Users || model("Users", UserSchema);
