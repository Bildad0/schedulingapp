import express, { urlencoded } from "express";
const app = express();
const PORT = 4000;
//const User = require("./DB/userModel");
import dbConnect from "./DB/dbconnection.js";

//const dbConnect = require("./DB/dbConnection");

//password encryption
//const bcrypt = require("bcrypt");

dbConnect();

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use((res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
});

// app.post("/register", (req, res) => {
//   bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
//     const user = new User({
//       email: req.body.email,
//       password: hashedPassword,
//       username: req.body.username,
//       timezone: {},
//       schedule: [],
//     });
//     user
//       .save()
//       .then((result) => {
//         res.status(201).send({
//           message: "User created successfully",
//           result,
//         });
//       })
//       .catch((error) => {
//         res.status(500).send({
//           message: "Error creating user",
//           error,
//         });
//       })
//       .catch((e) => {
//         res.status(500).send({
//           message: "password was not hashed successfully",
//           e,
//         });
//       });
//   });
// });

//login user to the server
app.post("/login", (req, res) => {
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

//create schedules in the server
app.post("/schedule/create", (req, res) => {
  const { userId, timezone, schedule } = req.body;
  let result = database.filter((db) => db.id === userId);
  result[0].timezone = timezone;
  result[0].schedule = schedule;
  res.json({ message: "Ok" });
});

//getting schedules
app.get("/schedules/:id", (req, res) => {});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
