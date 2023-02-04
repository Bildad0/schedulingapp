import express, { urlencoded } from "express";
import dbConnect from "./Database/dbconnection.js";

import Router from "./route/users.js";
const app = express();
const PORT = process.env.PORT || 3000;

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
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
