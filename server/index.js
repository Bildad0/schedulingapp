import express, { urlencoded } from "express";
import dbConnect from "./Database/dbconnection.js";
import bodyParser from "body-parser";
import Router from "./route/users.js";
const app = express();
const PORT = 4000;

dbConnect();

app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
});
app.use(Router);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
