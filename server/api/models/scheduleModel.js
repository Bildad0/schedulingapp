const mongoose = require("mongoose");
const User = require("./userModel");

const scheduleSchema = new mongoose.Schema(
  {
    id: { type: String },
    userId: { type: String, required: "user needed" },
    time: { type: String, required: "Time or date is required" },
    schedule: { type: String },
    scheduletype: { type: String, required: "Must specify type" },
    guest_id: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("schedule", scheduleSchema);
