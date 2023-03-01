const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

mongoose.set("strictQuery", true);
//get user

router.get("/:id", async (req, res) => {});

router.delete("delete/:id", async (req, res) => {});
