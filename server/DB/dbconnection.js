import mongoose from "mongoose";
require("app.env").config();
async function dbConnect() {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Succesfully connected to mongo db Atlas");
    })
    .catch((error) => {
      console.log("unable to connect to Mongo db");
      console.error(error);
    });
}

module.exports = dbConnect;
