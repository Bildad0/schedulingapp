import express from "express";
const app = express();

//create schedules in the server
app.post("api/v1/schedule/create", (req, res) => {
  const { userId, timezone, schedule } = req.body;
  let result = database.filter((db) => db.id === userId);
  result[0].timezone = timezone;
  result[0].schedule = schedule;
  res.json({ message: "Ok" });
});

//getting schedules
app.get("api/v1/schedules/:id", (req, res) => {});
