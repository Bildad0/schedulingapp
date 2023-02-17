import express, { urlencoded } from "express";
import dbConnect from "./Database/dbconnection.js";
import bodyParser from "body-parser";
import Router from "./route/users.js";

import * as errorHandlers from "./handlers/errorHandlers.js";
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
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);

if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

app.use("/users", Router);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

export default app;
