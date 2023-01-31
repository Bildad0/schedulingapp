import express, { urlencoded } from "express";
import dbConnect from "./DB/dbconnection.js";
import * as User from "./DB/userModel.js";
//password encryption
import * as bcrypt from "bcrypt";
const salt = bcrypt.genSalt();

const app = express();
const PORT = 4000;

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

//register user
app.post("api/v1.0/register", (req, res) => {
  bcrypt.hash(req.body.password, salt).then((hashedPassword) => {
    const user = new User({
      email: req.body.email,
      password: hashedPassword,
      username: req.body.username,
      timezone: {},
      schedule: [],
    });
    user
      .push()
      .then((result) => {
        res.status(201).send({
          message: "User created successfully",
          result,
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: "Error creating user",
          error,
        });
      })
      .catch((e) => {
        res.status(500).send({
          message: "password was not hashed successfully",
          e,
        });
      });
  });
});

//login user to the server
app.post("api/v1.0/login", (req, res) => {
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
app.post("api/v1.0/schedule/create", (req, res) => {
  const { userId, timezone, schedule } = req.body;
  let result = database.filter((db) => db.id === userId);
  result[0].timezone = timezone;
  result[0].schedule = schedule;
  res.json({ message: "Ok" });
});

//getting schedules
app.get("api/v1.0/schedules/:id", (req, res) => {});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
