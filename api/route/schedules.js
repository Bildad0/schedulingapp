const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Schedule = require("../models/scheduleModel");
const User = require("../models/userModel");
const scheduleRouter = express.Router();

//create schedules in the server
scheduleRouter.post("/add", async (req, res) => {
  const { id, userId, timezone, schedule } = req.body;
  try {
    const newSchedule = Schedule({
      id: uuidv4(),
      userId,
      timezone,
      schedule,
    });
    const savedSchedule = await newSchedule.save();
    res
      .status(200)
      .json({ message: "Schedule created succesfully", data: savedSchedule });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//get all schedules
scheduleRouter.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const schedules = query
      ? await Schedule.find().limit(10)
      : await Schedule.find();
    res.status(200).json({ schedules });
  } catch (error) {
    res.status(500).json({ message: "No schedules available create one" });
  }
});

//get schedule by id
scheduleRouter.get("/:id", async (req, res) => {});

module.exports = scheduleRouter;
