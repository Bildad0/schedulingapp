const express = require("express");
const authRouter = require("./route/auth");
const userRouter = require("./route/users");
const scheduleRouter = require("./route/schedules");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

//TODO: I'll add custom cors policy later
// var corsOptions = {
//   headers: {
//     "Access-Control-Allow-Credentials": false,
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "http://localhost:3001/",
//     "Access-Control-Allow-Headers":
//       "Origin, X-Requested-With, Content-Type, Accept",
//   },
// };

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/schedules", scheduleRouter);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Database connected and Backend server is running successfully on port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
