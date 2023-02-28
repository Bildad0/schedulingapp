import Router from "express";
import User from "../models/userModel.js";
const router = Router();

router.post("/reqister", async (req, res) => {
  const { email, password, username, timezone } = req.body;
  const newUser = User({ email, password, username, timezone });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
