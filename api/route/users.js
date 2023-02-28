const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router();

mongoose.set("strictQuery", true);
//register user

//login user to the server
// Router.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   let result = database.filter(
//     (user) => user.username == username && user.password == password
//   );
//   if (result.length !== 1) {
//     return res.json({ error_message: "Incorrect credentials" });
//   }
//   res.json({
//     message: "Login Successfully",
//     data: {
//       _id: result[0].id,
//       _email: result[0].email,
//     },
//   });
// });

export default Router;
