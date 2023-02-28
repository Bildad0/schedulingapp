import mongoose from "mongoose";
import * as dotenv from "dotenv";
import userSchema from "../models/userModel.js";
dotenv.config();

async function dbConnect() {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB");
  });

  userSchema;
}

export default dbConnect;
