const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    id: { type: String },
    userId: { type: String, required: "user needed" },
    timezone: { type: {} },
    schedule: { type: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("schedule", scheduleSchema);
