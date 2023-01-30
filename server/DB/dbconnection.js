import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
mongoose.set("strictQuery", true);

async function dbConnect() {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Succesfully connected to mongo db Atlas");
    })
    .catch((error) => {
      console.log("unable to connect to Mongo db");
      console.error(error);
    });
}

export default dbConnect;
