const mongoose = require("mongoose");
const User = require("./userModel");

const scheduleSchema = new mongoose.Schema(
  {
    id: { type: String },
    userId: { type: String, required: "user needed" },
    date: { type: String, required: "Date is required" },
    schedules: {
      scheduleName: { type: String, required: true },
      time: { type: String, required: true },
    },

    scheduletype: { type: String, required: "Must specify type" },
    guest_id: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("schedule", scheduleSchema);
