const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//create schedules in the server

router.get("/", (req, res) => {
  let result = database.filter((db) => db.id === userId);
  result[0].timezone = timezone;
  result[0].schedule = schedule;
  res.json({ message: "Ok" });
});

//getting schedules
router.post("/create", (req, res) => {
  const { userId, timezone, schedule } = req.body;
  //add schedule model
  const scheduleExist = await;
});
