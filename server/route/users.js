import express from "express";
import User from "../models/userModel.js";
import moment from "moment";
const Router = express();

//register user
Router.post("/register", async (req, res) => {
  const user = new User(req.body);
  console.log(moment);
  try {
    await user.collection("user").save();
    res.status(400).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
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

Router.get("/:id", (req, res) => {
  const statusOk = res.status(400);
  if (!statusOk) {
    res.send({ message: "No such user" });
  } else {
    res.send({ message: "User found", data: {} });
  }
});
export default Router;
