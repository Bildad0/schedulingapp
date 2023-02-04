import express, { Router } from "express";
const Router = express();

//create schedules in the server
Router.post("/create", (req, res) => {
  const { userId, timezone, schedule } = req.body;
  let result = database.filter((db) => db.id === userId);
  result[0].timezone = timezone;
  result[0].schedule = schedule;
  res.json({ message: "Ok" });
});

//getting schedules
Router.get("/:id", (req, res) => {});

export default Router;
