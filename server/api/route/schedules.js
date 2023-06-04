const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Schedule = require("../models/scheduleModel");
const scheduleRouter = express.Router();

//create schedules in the server
scheduleRouter.post("/add", async (req, res) => {
  const { userId, time, schedule, guest_id, scheduletype } = req.body;
  try {
    const newSchedule = Schedule({
      id: uuidv4(),
      userId,
      time,
      schedule,
      guest_id,
      scheduletype,
    });
    await newSchedule.save().then((response) => {
      res.status(200).json({
        message: "Schedule created succesfully",
        data: newSchedule,
      });
    });
  } catch (error) {
    res.json({ message: error.message, data: null });
  }
});

//get all schedules
scheduleRouter.get("/", async (res) => {
  try {
    const schedules = await Schedule.find();
    if (schedules[0] != null) {
      res.status(200).json({ data: schedules, message: "schedules found" });
    } else {
      res.status(404).json({ message: "No schedules available", data: null });
    }
  } catch (error) {
    res.json({ message: error, data: null });
  }
});

//get schedule by id
scheduleRouter.get("/:id", async (req, res) => {
  const scheduleId = req.params.id;
  try {
    const schedule = await Schedule.findOne({ id: scheduleId });
    if (schedule) {
      res.status(200).json({ data: schedule, message: "schedule found" });
    } else {
      res.status(404).json({ message: "No schedule with such id" });
    }
  } catch (error) {
    res.json({ message: error, data: null });
  }
});

//delete all schedules
scheduleRouter.delete("/delete/:id", async (req, res) => {
  const schedulId = req.params.id;
  try {
    const scheduleToDelete = await Schedule.findOneAndDelete({
      id: schedulId,
    });
    if (scheduleToDelete)
      res.status(200).json({
        data: null,
        message:
          "Schedules " +
          scheduleToDelete.schedule +
          " were deleted successfuly",
      });
  } catch (error) {
    res.json({ message: error.message, data: null });
  }
});

module.exports = scheduleRouter;
