import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import router from "./route/auth.js";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

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

app.use(cors());
app.use(express.json());

app.use("/api/auth", router);

export default app;
