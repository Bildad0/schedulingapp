import express from "express";
import mongoose from "mongoose";
const Router = express.Router();
import { catchErrors } from "../handlers/errorHandlers.js";
import register from "../controllers/userController.js";

mongoose.set("strictQuery", true);
//register user

Router.post("/register", catchErrors(register));

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
