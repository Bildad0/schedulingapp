import express from "express";
import dbConnect from "./Database/dbconnection.js";
import router from "./route/auth.js";
import cors from "cors";
const app = express();
const PORT = 3000;

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", router);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

export default app;
