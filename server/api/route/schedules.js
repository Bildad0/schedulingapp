const { VercelRequest, VercelResponse } = require("@vercel/node");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Schedule = require("../models/scheduleModel");
const scheduleRouter = express.Router();

//create schedules in the server
scheduleRouter.post("/add", async (VercelRequest, VercelResponse) => {
  const { userId, time, schedule, guest_id, scheduletype } = VercelRequest.body;

  const newSchedule = Schedule({
    id: uuidv4(),
    userId,
    time,
    schedule,
    guest_id,
    scheduletype,
  });

  //check schedule availability
  const scheduleAvailable = await Schedule.findOne({
    guest_id: newSchedule.guest_id,
    scheduletype: newSchedule.scheduletype,
  });

  if (scheduleAvailable) {
    try {
      await Schedule.findOneAndUpdate(
        { id: scheduleAvailable.id },
        {
          time: newSchedule.time,
          schedule: newSchedule.schedule,
          scheduletype: newSchedule.scheduletype,
        }
      ).then((response) => {
        VercelResponse.json({
          message: "Schedule update succesfully",
          data: response,
        });
      });
    } catch (error) {
      VercelResponse.json({ message: error.message, data: null });
    }
  } else {
    try {
      await newSchedule.save().then((response) => {
        VercelResponse.status(200).json({
          message: "Schedule created succesfully",
          data: response,
        });
      });
    } catch (error) {
      VercelResponse.json({ message: error.message, data: null });
    }
  }
});

//get all schedules
scheduleRouter.get("/", async (VercelRequest, VercelResponse) => {
  try {
    const schedules = await Schedule.find();
    if (schedules[0] != null) {
      VercelResponse.status(200).json({
        data: schedules,
        message: "schedules found",
      });
    } else {
      VercelResponse.status(404).json({
        message: "No schedules available",
        data: null,
      });
    }
  } catch (error) {
    VercelResponse.json({ message: error.message, data: null });
  }
});

//get schedule by id
scheduleRouter.get("/:id", async (VercelRequest, VercelResponse) => {
  const scheduleId = VercelRequest.query.id;
  try {
    const schedule = await Schedule.findOne({ id: scheduleId });
    if (schedule) {
      VercelResponse.status(200).json({
        data: schedule,
        message: "schedule found",
      });
    } else {
      VercelResponse.status(404).json({ message: "No schedule with such id" });
    }
  } catch (error) {
    VercelResponse.json({ message: error, data: null });
  }
});

//delete all schedules
scheduleRouter.delete("/delete/:id", async (VercelRequest, VercelResponse) => {
  const schedulId = VercelRequest.query.id;
  try {
    const scheduleToDelete = await Schedule.findOneAndDelete({
      id: schedulId,
    });
    if (scheduleToDelete)
      VercelResponse.status(200).json({
        data: null,
        message:
          "Schedules " +
          scheduleToDelete.schedule +
          " were deleted successfuly",
      });
  } catch (error) {
    VercelResponse.json({ message: error.message, data: null });
  }
});

module.exports = scheduleRouter;
