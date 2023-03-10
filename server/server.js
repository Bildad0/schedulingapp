const express = require("express");
const authRouter = require("./route/auth");
const userRouter = require("./route/users");
const scheduleRouter = require("./route/schedules");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();
var corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

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

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/schedules", scheduleRouter);
