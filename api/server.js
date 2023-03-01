const express = require("express");
const router = require("./route/auth");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();
app.use(cors());
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

app.use("/api/auth", router);
