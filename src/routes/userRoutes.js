import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

const profileHandler = (req, res) => {
  res.json({
    message: "Protected data accessed",
    user: req.user,
  });
};

// protected route
router.get("/profile", authenticate, profileHandler);

export default router;
