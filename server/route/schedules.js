const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Schedule = require("../models/scheduleModel");
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
  try {
    const schedules = await Schedule.find();
    if (schedules[0] != null) {
      res.status(200).json({ schedules });
    } else {
      res.status(404).json({ message: "No schedules available" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//get schedule by id
scheduleRouter.get("/:id", async (req, res) => {
  const scheduleId = req.params.id;
  try {
    const schedule = await Schedule.findOne({ id: scheduleId });
    if (schedule) {
      res.status(200).json({ Shedules: schedule.schedule });
    } else {
      res.status(404).json({ message: "No schedule with such id" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//delete all schedules
scheduleRouter.delete("/delete/:id", async (req, res) => {
  const schedulId = req.params.id;
  try {
    const scheduleToDelete = await Schedule.findOneAndDelete({
      id: schedulId,
    });
    res.status(200).json({
      message:
        "Schedules " + scheduleToDelete.schedule + " were deleted successfuly",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});
module.exports = scheduleRouter;
