import express from "express";
import userModel from "../models/userModel.js";
import moment from "moment";
const app = express();

//register user
app.post("api/v1/register", async (req, res) => {
  const user = new userModel(req.body);
  console.log(moment);
  try {
    await user.save();
    res.status(400).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//login user to the server
app.post("api/v1/login", (req, res) => {
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

export default app;
