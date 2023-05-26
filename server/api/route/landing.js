const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", async (req, res) => {
  res.json({ message: "You are home" });
});

module.exports = homeRouter;
